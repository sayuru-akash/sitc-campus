import { campusVideo } from '@/content/campus-video';
import { locations, site, socialLinks, supportChannels } from '@/content/site';

export function StructuredData() {
  const origin = new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3100',
  ).origin;
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': `${origin}/#organization`,
        name: site.name,
        url: `${origin}/`,
        logo: `${origin}/images/sitc-wordmark.png`,
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
        '@type': 'VideoObject',
        '@id': `${origin}/#campus-film`,
        name: campusVideo.title,
        description: campusVideo.description,
        thumbnailUrl: campusVideo.thumbnailUrl,
        uploadDate: campusVideo.uploadDate,
        duration: campusVideo.duration,
        embedUrl: campusVideo.embedUrl,
        publisher: { '@id': `${origin}/#organization` },
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
