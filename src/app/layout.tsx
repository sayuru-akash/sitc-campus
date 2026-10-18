import type { Metadata } from 'next';
import localFont from 'next/font/local';
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3100',
  ),
  title: 'SITC Campus | A future with possibility',
  description:
    'Discover diploma, degree and postgraduate study pathways at SITC Campus, Sri Lanka. Explore programmes and connect with admissions.',
  openGraph: {
    title: 'SITC Campus | A future with possibility',
    description: 'Explore programmes and connect with SITC Campus admissions.',
    type: 'website',
    locale: 'en_LK',
    images: [
      {
        url: '/images/campus.jpg',
        width: 1950,
        height: 695,
        alt: 'SITC Campus academic community',
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${sinhala.variable} ${tamil.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
