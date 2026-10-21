import type { MetadataRoute } from 'next';
import { mainPageMetadata } from '@/content/page-metadata';
import { programmes } from '@/content/programmes';
import { programmePath, programmeLevels } from '@/content/programme-routes';
import { newsStories } from '@/content/news';
import { homepageSeo } from '@/content/seo';
import { preventIndexing } from '@/lib/content-seo';

export default function sitemap(): MetadataRoute.Sitemap {
  if (preventIndexing()) return [];
  return [
    { url: homepageSeo.url },
    ...Object.values(mainPageMetadata).map((p) => ({
      url: new URL(p.path, homepageSeo.url).href,
    })),
    ...programmes.map((p) => ({
      url: new URL(programmePath(p.id), homepageSeo.url).href,
    })),
    ...programmeLevels
      .filter((l) => l.level)
      .map((l) => ({
        url: new URL(`/program-level/${l.slug}/`, homepageSeo.url).href,
      })),
    ...newsStories.map((s) => ({
      url: s.href,
      images: [new URL(s.image, homepageSeo.url).href],
    })),
  ];
}
