import { homepageSeo } from '@/content/seo';
import { siteEntities } from '@/lib/site-schema';
export function ContentStructuredData({
  path,
  title,
  description,
  type = 'WebPage',
  breadcrumbs,
  additional = [],
}: {
  path: string;
  title: string;
  description: string;
  type?: string;
  breadcrumbs: readonly { name: string; path: string }[];
  additional?: readonly Record<string, unknown>[];
}) {
  const url = new URL(path, homepageSeo.url).href;
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      ...siteEntities(),
      {
        '@type': type,
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: 'en',
        about: { '@id': `${homepageSeo.url}#organization` },
        isPartOf: { '@id': `${homepageSeo.url}#website` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [{ name: 'Home', path: '/' }, ...breadcrumbs].map(
          (item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: new URL(item.path, homepageSeo.url).href,
          }),
        ),
      },
      ...additional,
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, '\\u003c'),
      }}
    />
  );
}
