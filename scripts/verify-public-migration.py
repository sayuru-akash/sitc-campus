#!/usr/bin/env python3
"""Read-only HTTP checks for the built SITC public site. No external form actions."""
import argparse
import csv
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import quote, unquote, urljoin, urlsplit
from urllib.request import Request, build_opener, HTTPRedirectHandler
from xml.etree import ElementTree

ROOT = Path(__file__).resolve().parents[1]

class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        return None

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.h1 = 0
        self.ids = set()
        self.links = []
        self.meta = {}
        self.canonical = None
        self.schemas = []
        self.script = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'h1': self.h1 += 1
        if attrs.get('id'): self.ids.add(attrs['id'])
        if tag == 'a' and attrs.get('href'): self.links.append(attrs['href'])
        if tag == 'meta': self.meta[attrs.get('name', attrs.get('property'))] = attrs.get('content', '')
        if tag == 'link' and attrs.get('rel') == 'canonical': self.canonical = attrs.get('href')
        if tag == 'script' and attrs.get('type') == 'application/ld+json': self.script = ''

    def handle_data(self, data):
        if self.script is not None: self.script += data

    def handle_endtag(self, tag):
        if tag == 'script' and self.script is not None:
            self.schemas.append(json.loads(self.script))
            self.script = None


def main():
    args_parser = argparse.ArgumentParser(description=__doc__)
    args_parser.add_argument('--base-url', default='http://localhost:3100')
    args_parser.add_argument('--report', type=Path)
    args = args_parser.parse_args()
    base = args.base_url.rstrip('/')
    opener = build_opener(NoRedirect)

    def fetch(path, method='GET'):
        request = Request(base + quote(path, safe='/%?=&'), method=method)
        try:
            response = opener.open(request, timeout=20)
        except HTTPError as error:
            response = error
        return response.status, response.headers, response.read()

    status, _, body = fetch('/sitemap.xml')
    assert status == 200, ('sitemap', status)
    root = ElementTree.fromstring(body)
    urls = [element.text for element in root.findall('{*}url/{*}loc')]
    assert len(urls) == len(set(urls)) == 27, ('sitemap count', len(urls))
    pages = {}
    results = []
    empty_levels = ['/program-level/specialized-masters/', '/program-level/ph-d/']
    for url in urls + ['https://sitc.lk' + path for path in empty_levels]:
        path = urlsplit(url).path
        status, _, html = fetch(path)
        assert status == 200, (path, status)
        page = Page()
        page.feed(html.decode())
        assert page.h1 == 1, (path, 'H1 count', page.h1)
        assert page.canonical == url, (path, 'canonical', page.canonical)
        assert page.meta.get('description'), (path, 'missing description')
        assert page.meta.get('og:url') == url, (path, 'Open Graph URL')
        assert page.meta.get('twitter:title'), (path, 'Twitter title')
        assert page.schemas, (path, 'missing JSON-LD')
        assert ('noindex' in page.meta.get('robots', '')) == (path in empty_levels), (path, 'robots')
        pages[unquote(path)] = page
        results.append({'path': path, 'status': status, 'h1': page.h1, 'canonical': page.canonical})

    for path, page in pages.items():
        for href in page.links:
            target = urlsplit(urljoin(base + quote(path, safe='/'), href))
            if target.netloc != urlsplit(base).netloc: continue
            target_path = unquote(target.path)
            if target_path in pages:
                if target.fragment:
                    assert unquote(target.fragment) in pages[target_path].ids, (path, href, 'missing fragment')
            else:
                assert Path(target_path).suffix, (path, href, 'unimplemented internal page')
                assert fetch(target.path, 'HEAD')[0] == 200, (path, href, 'missing file')

    legacy = list(csv.DictReader((ROOT / 'docs/research/sitc-migration-map.csv').open()))
    for row in legacy:
        status, headers, _ = fetch(row['Local path'])
        assert status == int(row['Expected status']), (row['Local path'], status)
    retired = ['/academic-staff/', '/events/', '/category/uncategorized/']
    for path in retired:
        for method in ['GET', 'HEAD']:
            status, headers, _ = fetch(path, method)
            assert status == 410 and not headers.get('Location'), (path, method, status)
            assert 'noindex' in headers.get('X-Robots-Tag', ''), (path, 'noindex header')

    redirect_checks = 0
    for path in pages:
        if path == '/': continue
        status, headers, _ = fetch(path.rstrip('/'))
        assert status == 308, (path, 'slashless', status)
        assert unquote(headers.get('Location', '')) == path, (path, headers.get('Location'))
        redirect_checks += 1
    for path in ['sitemap_index.xml', 'page-sitemap.xml', 'post-sitemap.xml', 'program-sitemap.xml', 'program_level-sitemap.xml', 'category-sitemap.xml', 'sitemap.rss']:
        status, headers, _ = fetch('/' + path)
        assert status == 308 and headers.get('Location') == '/sitemap.xml', (path, status, headers)
        redirect_checks += 1
    for path, destination in [('/news/feed/', '/feed/'), ('/program/', '/academic-programmes/'), ('/program-level/', '/academic-programmes/')]:
        status, headers, _ = fetch(path)
        assert status == 308 and headers.get('Location') == destination, (path, status)
        redirect_checks += 1

    asset_rows = json.loads((ROOT / 'docs/research/legacy-asset-manifest.json').read_text())
    for asset in asset_rows:
        path = urlsplit(asset['source']).path
        assert fetch(path, 'HEAD')[0] == 200, ('legacy asset', path)
    for name in ['it', 'psychology', 'business', 'hrm', 'english', 'tamil']:
        status, headers, _ = fetch('/guides/' + name + '-2026.pdf', 'HEAD')
        assert status == 200 and 'application/pdf' in headers.get('Content-Type', ''), (name, 'guide')

    status, _, body = fetch('/feed/')
    feed = ElementTree.fromstring(body)
    assert status == 200 and len(feed.findall('./channel/item')) == 6, 'RSS feed'
    status, _, body = fetch('/robots.txt')
    assert status == 200 and b'Sitemap: https://sitc.lk/sitemap.xml' in body, 'robots.txt'
    assert all(path.encode() not in body for path in retired), 'retired paths must remain crawlable'
    for unknown in ['/not-a-real-page/', '/program/not-a-programme/', '/program-level/not-a-level/', '/%25/']:
        assert fetch(unknown)[0] == 404, (unknown, 'must return 404')

    report = {'passed': True, 'indexablePages': len(urls), 'htmlPagesChecked': len(pages), 'legacyHtmlDecisionsChecked': len(legacy), 'retiredRoutes': len(retired), 'legacyAssetsChecked': len(asset_rows), 'currentGuidesChecked': 6, 'redirectsChecked': redirect_checks, 'rssItems': 6, 'internalLinksAndFragments': 'passed', 'metadataAndStructuredData': 'passed', 'unknownRoutes': '404', 'pages': results}
    if args.report: args.report.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps({key:value for key,value in report.items() if key != 'pages'}, indent=2))

if __name__ == '__main__':
    main()
