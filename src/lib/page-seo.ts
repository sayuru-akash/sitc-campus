import type { Metadata } from 'next';
import { mainPageMetadata, type MainPageKey } from '@/content/page-metadata';
import { homepageSeo } from '@/content/seo';

export function mainPageSeo(key: MainPageKey): Metadata {
  const page = mainPageMetadata[key];
  const preventIndexing =
    process.env.PREVENT_INDEXING === 'true' ||
    process.env.VERCEL_ENV === 'preview';
  const url = new URL(page.path, homepageSeo.url).href;
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    robots: {
      index: !preventIndexing,
      follow: !preventIndexing,
      'max-image-preview': 'large',
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: homepageSeo.openGraphSiteName,
      locale: homepageSeo.locale,
      type: 'website',
      images: [
        {
          url: homepageSeo.socialImage,
          width: 1040,
          height: 318,
          alt: 'SITC Campus logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [homepageSeo.socialImage],
    },
  };
}
