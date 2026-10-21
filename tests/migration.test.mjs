import { describe, expect, test } from 'bun:test';
import { programmes } from '../src/content/programmes.ts';
import {
  programmeSlugs,
  programmePath,
  programmeLevels,
} from '../src/content/programme-routes.ts';
import { programmeDetails } from '../src/content/programme-details.ts';
import { newsStories } from '../src/content/news.ts';
import { newsArticles } from '../src/content/news-articles.ts';
import sitemap from '../src/app/sitemap.ts';
import { contentPageSeo } from '../src/lib/content-seo.ts';
import { findNewsArticle } from '../src/lib/news.ts';

// Migration contracts protect published URLs and financial information, rather
// than locking presentational markup to a particular implementation.
describe('Public migration contracts', () => {
  test('existing course and Unicode article URLs remain represented', () => {
    const paths = programmes.map((p) => programmePath(p.id));
    for (const slug of [
      'diploma-in-business-management',
      'diploma-in-english-2026-ugc-recognized-university-diploma',
      'diploma-in-human-resource-management',
      'diploma-in-information-technology',
      'diploma-in-psychology-and-counseling',
    ])
      expect(paths).toContain(`/program/${slug}/`);
    expect(new Set(Object.values(programmeSlugs)).size).toBe(10);
    for (const story of newsStories) {
      const article = newsArticles.find((a) => a.id === story.id);
      expect(decodeURIComponent(new URL(story.href).pathname)).toBe(
        `/${decodeURIComponent(article.slug)}/`,
      );
      expect(article.paragraphs.length).toBeGreaterThan(0);
    }
  });
  test('published diploma payment plans reconcile with their own totals', () => {
    for (const p of programmes.filter((p) => p.level === 'Diploma')) {
      const fees = programmeDetails[p.id].fees;
      expect(fees.installments.reduce((a, b) => a + b, 0)).toBe(fees.total);
      expect(fees.total).toBe(fees.standard / 2);
      expect(fees.oneTime).toBeLessThan(fees.total);
    }
    expect(programmeDetails['english-diploma'].fees.total).toBe(18000);
    expect(programmeDetails['tamil-diploma'].fees.total).toBe(24000);
  });
  test('sitemap contains live canonical content and excludes retired or empty categories', () => {
    const urls = sitemap().map((p) => p.url);
    expect(urls).toHaveLength(27);
    expect(new Set(urls).size).toBe(27);
    for (const path of [
      '/academic-staff/',
      '/events/',
      '/category/uncategorized/',
      '/program-level/specialized-masters/',
      '/program-level/ph-d/',
    ])
      expect(urls).not.toContain(`https://sitc.lk${path}`);
    for (const p of programmes)
      expect(urls).toContain(`https://sitc.lk${programmePath(p.id)}`);
    expect(programmeLevels.filter((l) => l.level)).toHaveLength(2);
  });
  test('public previews remain noindex without changing canonical identities', () => {
    const old = process.env.PREVENT_INDEXING;
    try {
      process.env.PREVENT_INDEXING = 'true';
      const meta = contentPageSeo({
        title: 'Programme',
        description: 'Preview',
        path: '/program/example/',
      });
      expect(meta.robots.index).toBe(false);
      expect(meta.alternates.canonical).toBe(
        'https://sitc.lk/program/example/',
      );
      expect(sitemap()).toHaveLength(0);
    } finally {
      if (old === undefined) delete process.env.PREVENT_INDEXING;
      else process.env.PREVENT_INDEXING = old;
    }
  });
});

test('article lookup accepts original percent escapes, Unicode and equivalent composition', () => {
  for (const article of newsArticles) {
    expect(findNewsArticle(article.slug)?.article.id).toBe(article.id);
    expect(findNewsArticle(decodeURIComponent(article.slug))?.article.id).toBe(
      article.id,
    );
    expect(
      findNewsArticle(decodeURIComponent(article.slug).normalize('NFD'))
        ?.article.id,
    ).toBe(article.id);
  }
  expect(findNewsArticle('not-an-article')).toBeNull();
  expect(findNewsArticle('%')).toBeNull();
});
