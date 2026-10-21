import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  trailingSlash: true,
  images: { qualities: [75, 90] },
};
export default nextConfig;
