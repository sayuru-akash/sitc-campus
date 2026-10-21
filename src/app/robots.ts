import type { MetadataRoute } from 'next';
import { preventIndexing } from '@/lib/content-seo';
export default function robots(): MetadataRoute.Robots {
  return preventIndexing()
    ? { rules: { userAgent: '*', allow: '/' } }
    : {
        rules: { userAgent: '*', allow: '/', disallow: '/wp-admin/' },
        sitemap: 'https://sitc.lk/sitemap.xml',
      };
}
