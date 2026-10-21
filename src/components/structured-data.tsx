import { campusVideo } from '@/content/campus-video';
import { homepageSeo } from '@/content/seo';
import { locations, site, socialLinks, supportChannels } from '@/content/site';

export function StructuredData() {
  const origin = new URL(homepageSeo.url).origin;
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': `${origin}/#organization`,
        name: site.name,
        alternateName: [
          'SITC Campus - Sri Lanka',
          homepageSeo.alternateSiteName,
        ],
        url: `${origin}/`,
        logo: {
          '@type': 'ImageObject',
          '@id': `${origin}/#organizationLogo`,
          url: `${origin}/images/sitc-wordmark.png`,
          width: 1697,
          height: 271,
          caption: 'SITC Campus',
        },
        email: site.email,
        telephone: site.telephone,
        sameAs: socialLinks.map((link) => link.href),
        address: locations.map((location) => ({
          '@type': 'PostalAddress',
          streetAddress: location.address.slice(0, 2).join(', '),
          addressLocality: location.locality,
          addressCountry: location.country,
          ...('postalCode' in location
            ? { postalCode: location.postalCode }
            : {}),
        })),
        contactPoint: supportChannels.map((channel) => ({
          '@type': 'ContactPoint',
          telephone: channel.number,
          contactType: channel.label,
        })),
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: homepageSeo.url,
        name: homepageSeo.siteName,
        alternateName: homepageSeo.alternateSiteName,
        description: 'Leading Higher Education Institute',
        inLanguage: 'en',
        publisher: { '@id': `${origin}/#organization` },
      },
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
