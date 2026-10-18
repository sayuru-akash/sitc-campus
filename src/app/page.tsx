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
