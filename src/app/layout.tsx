import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { homepageSeo } from '@/content/seo';
import './globals.css';
const sans = localFont({
  src: '../../public/fonts/dm-sans.woff2',
  weight: '400 700',
  variable: '--font-dm-sans',
  display: 'swap',
});
const serif = localFont({
  src: [
    {
      path: '../../public/fonts/playfair-display.woff2',
      weight: '500 600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/playfair-display-italic.woff2',
      weight: '500 600',
      style: 'italic',
    },
  ],
  variable: '--font-playfair',
  display: 'swap',
});
const sinhala = localFont({
  src: '../../public/fonts/noto-sans-sinhala.woff2',
  weight: '100 900',
  variable: '--font-sinhala',
  display: 'swap',
  preload: false,
});
const tamil = localFont({
  src: '../../public/fonts/noto-sans-tamil.woff2',
  weight: '100 900',
  variable: '--font-tamil',
  display: 'swap',
  preload: false,
});
export const metadata: Metadata = {
  metadataBase: new URL(homepageSeo.url),
  title: {
    default: homepageSeo.siteName,
    template: `%s - ${homepageSeo.siteName}`,
  },
  icons: { apple: homepageSeo.appleIcon },
  alternates: { types: { 'application/rss+xml': 'https://sitc.lk/feed/' } },
};
export const viewport: Viewport = {
  themeColor: '#641c2e',
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${serif.variable} ${sinhala.variable} ${tamil.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
