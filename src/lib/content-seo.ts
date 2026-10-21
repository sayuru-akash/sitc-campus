import type { Metadata } from 'next';
import { homepageSeo } from '@/content/seo';

export function preventIndexing() {
  return (
    process.env.PREVENT_INDEXING === 'true' ||
    process.env.VERCEL_ENV === 'preview'
  );
}
export function contentPageSeo({
  title,
  description,
  path,
  image = homepageSeo.socialImage,
  article,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  article?: { published: string; modified: string; lang: string };
  noindex?: boolean;
}): Metadata {
  const url = new URL(path, homepageSeo.url).href;
  const socialImage = new URL(image, homepageSeo.url).href;
  return {
    title: { absolute: `${title} - SITC Campus Sri Lanka` },
    description,
    alternates: { canonical: url },
    robots: {
      index: !(preventIndexing() || noindex),
      follow: !preventIndexing(),
      'max-image-preview': 'large',
    },
    openGraph: {
      title,
      description,
      url,
      siteName: homepageSeo.openGraphSiteName,
      locale: article?.lang === 'si' ? 'si_LK' : homepageSeo.locale,
      images: [{ url: socialImage, alt: title }],
      ...(article
        ? {
            type: 'article',
            publishedTime: article.published,
            modifiedTime: article.modified,
            authors: ['SITC Campus'],
          }
        : { type: 'website' }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage],
    },
  };
}
