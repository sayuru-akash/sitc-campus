import { homepageSeo } from '@/content/seo';
import { locations, site, socialLinks, supportChannels } from '@/content/site';

// The same public identity is embedded on every indexable page.
export function siteEntities() {
  const origin = new URL(homepageSeo.url).origin;
  return [
    {
      '@type': 'EducationalOrganization',
      '@id': `${origin}/#organization`,
      name: site.name,
      alternateName: ['SITC Campus - Sri Lanka', homepageSeo.alternateSiteName],
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
  ];
}
