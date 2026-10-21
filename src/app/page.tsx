import type { Metadata } from 'next';
import { homepageSeo } from '@/content/seo';
import { ProgrammeSelectionProvider } from '@/components/programme-selection';
import { SiteHeader } from '@/components/site-header';
import { StructuredData } from '@/components/structured-data';
import { SiteFooter } from '@/components/site-footer';
import { Hero, Highlights } from '@/components/sections/hero';
import { ProgrammeExplorer } from '@/components/sections/programme-explorer';
import { Leadership } from '@/components/sections/leadership';
import { Experience } from '@/components/sections/experience';
import { Pathway } from '@/components/sections/pathway';
import { StudentResources } from '@/components/sections/student-resources';
import { FAQ } from '@/components/sections/faq';
import { Enquiry } from '@/components/sections/enquiry';

const preventIndexing =
  process.env.PREVENT_INDEXING === 'true' ||
  process.env.VERCEL_ENV === 'preview';

// Page-specific metadata prevents future routes and 404s inheriting the
// homepage's canonical URL, description, and social preview.
export const metadata: Metadata = {
  title: { absolute: homepageSeo.title },
  description: homepageSeo.description,
  alternates: { canonical: homepageSeo.url },
  robots: {
    index: !preventIndexing,
    follow: !preventIndexing,
    'max-image-preview': 'large',
  },
  openGraph: {
    title: homepageSeo.title,
    description: homepageSeo.description,
    url: homepageSeo.url,
    siteName: homepageSeo.openGraphSiteName,
    type: 'website',
    locale: homepageSeo.locale,
    images: [
      {
        url: homepageSeo.socialImage,
        secureUrl: homepageSeo.socialImage,
        width: homepageSeo.socialImageWidth,
        height: homepageSeo.socialImageHeight,
        alt: 'SITC Campus logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: homepageSeo.title,
    description: homepageSeo.description,
    images: [{ url: homepageSeo.socialImage, alt: 'SITC Campus logo' }],
  },
};

export default function Home() {
  return (
    <ProgrammeSelectionProvider>
      <StructuredData />
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Highlights />
        <ProgrammeExplorer />
        <Experience />
        <Leadership />
        <Pathway />
        <StudentResources />
        <FAQ />
        <Enquiry />
      </main>
      <SiteFooter />
    </ProgrammeSelectionProvider>
  );
}
