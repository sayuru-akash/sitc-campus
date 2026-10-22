import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90],
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 384, 480],
  },
  async redirects() {
    return [
      {
        source: '/wp-content/uploads/2023/10/sitc-fav-300x300.png',
        destination: '/icon.png',
        permanent: true,
      },
      ...[
        'sitemap_index.xml',
        'page-sitemap.xml',
        'post-sitemap.xml',
        'program-sitemap.xml',
        'program_level-sitemap.xml',
        'category-sitemap.xml',
        'sitemap.rss',
      ].map((source) => ({
        source: `/${source}`,
        destination: '/sitemap.xml',
        permanent: true,
      })),
      { source: '/news/feed/', destination: '/feed/', permanent: true },
      {
        source: '/program/',
        destination: '/academic-programmes/',
        permanent: true,
      },
      {
        source: '/program-level/',
        destination: '/academic-programmes/',
        permanent: true,
      },
      {
        source: '/program/diploma-in-english/',
        destination:
          '/program/diploma-in-english-2026-ugc-recognized-university-diploma/',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
