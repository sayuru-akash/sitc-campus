import Link from 'next/link';
import { mainPageMetadata, type MainPageKey } from '@/content/page-metadata';
import { homepageSeo } from '@/content/seo';

export function PageIntro({
  title,
  description,
  breadcrumb,
  accent,
}: {
  title: string;
  description?: string;
  breadcrumb?: string;
  accent?: string;
}) {
  return (
    <div className="page-intro">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{breadcrumb ?? title}</span>
      </nav>
      <h1 id="page-heading">{title}</h1>
      {accent && <p className="page-accent">{accent}</p>}
      {description && <p className="page-description">{description}</p>}
    </div>
  );
}

export function PageStructuredData({
  pageKey,
  type = 'WebPage',
  additional = [],
}: {
  pageKey: MainPageKey;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  additional?: readonly Record<string, unknown>[];
}) {
  const page = mainPageMetadata[pageKey];
  const url = new URL(page.path, homepageSeo.url).href;
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': type,
        '@id': `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: 'en',
        isPartOf: { '@id': `${homepageSeo.url}#website` },
        about: { '@id': `${homepageSeo.url}#organization` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: homepageSeo.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: page.title.split(' - SITC')[0],
            item: url,
          },
        ],
      },
      ...additional,
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}

export function PageCallToAction({
  title = 'Find your next step.',
}: {
  title?: string;
}) {
  return (
    <section className="page-cta" aria-label="Continue your journey">
      <h2>{title}</h2>
      <div>
        <Link className="button cta-light" href="/academic-programmes/">
          Explore programmes <span aria-hidden="true">↗</span>
        </Link>
        <Link className="cta-contact" href="/contact-us/">
          Contact admissions <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
