import { campusVideo } from '@/content/campus-video';
import { homepageSeo } from '@/content/seo';
import { siteEntities } from '@/lib/site-schema';

export function StructuredData() {
  const origin = new URL(homepageSeo.url).origin;
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      ...siteEntities(),
      {
        '@type': 'WebPage',
        '@id': `${origin}/#webpage`,
        url: homepageSeo.url,
        name: homepageSeo.title,
        description: homepageSeo.description,
        inLanguage: 'en',
        datePublished: homepageSeo.datePublished,
        isPartOf: { '@id': `${origin}/#website` },
        about: { '@id': `${origin}/#organization` },
        breadcrumb: { '@id': `${origin}/#breadcrumblist` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${origin}/#breadcrumblist`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: homepageSeo.url,
          },
        ],
      },
      {
        '@type': 'VideoObject',
        '@id': `${origin}/#campus-film`,
        name: campusVideo.title,
        description: campusVideo.description,
        thumbnailUrl: campusVideo.thumbnailUrl,
        uploadDate: campusVideo.uploadDate,
        duration: campusVideo.duration,
        embedUrl: campusVideo.embedUrl,
        publisher: { '@id': `${origin}/#organization` },
        isPartOf: { '@id': `${origin}/#webpage` },
      },
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
