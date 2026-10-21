import { PageIntro, PageStructuredData } from '@/components/inner-page';
import { ProgrammeSelectionProvider } from '@/components/programme-selection';
import { ProgrammeExplorer } from '@/components/sections/programme-explorer';
import { Enquiry } from '@/components/sections/enquiry';
import { programmes } from '@/content/programmes';
import { homepageSeo } from '@/content/seo';
import Link from 'next/link';
import { programmePath } from '@/content/programme-routes';
import { mainPageSeo } from '@/lib/page-seo';

export const metadata = mainPageSeo('programmes');

export default function ProgrammesPage() {
  return (
    <ProgrammeSelectionProvider>
      <PageStructuredData
        pageKey="programmes"
        type="CollectionPage"
        additional={[
          {
            '@type': 'ItemList',
            name: 'SITC Campus academic programmes',
            numberOfItems: programmes.length,
            itemListElement: programmes.map((programme, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              url: new URL(programmePath(programme.id), homepageSeo.url).href,
              item: {
                '@type': 'Course',
                name: programme.title,
                description: programme.description,
                educationalLevel: programme.level,
                url: new URL(programmePath(programme.id), homepageSeo.url).href,
                provider: {
                  '@id': `${homepageSeo.url}#organization`,
                  '@type': 'EducationalOrganization',
                  name: 'SITC Campus',
                  url: homepageSeo.url,
                  sameAs: homepageSeo.url,
                },
              },
            })),
          },
        ]}
      />
      <div className="page-container">
        <PageIntro
          title="Academic programmes"
          breadcrumb="Programmes"
          description="Find a subject that moves you forward."
        />
        <nav className="level-navigation" aria-label="Browse programme levels">
          <Link href="/program-level/diploma/">Diploma programmes ↗</Link>
          <Link href="/program-level/undergraduate/">
            Undergraduate programmes ↗
          </Link>
        </nav>
        <div className="programme-catalogue">
          <ProgrammeExplorer catalogue />
        </div>
      </div>
      <div className="inner-enquiry">
        <Enquiry />
      </div>
    </ProgrammeSelectionProvider>
  );
}
