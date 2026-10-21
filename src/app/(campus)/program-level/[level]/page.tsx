import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageIntro } from '@/components/inner-page';
import { ContentStructuredData } from '@/components/content-structured-data';
import { ProgrammeCards } from '@/components/programme-cards';
import { programmes } from '@/content/programmes';
import { programmeLevels, programmePath } from '@/content/programme-routes';
import { contentPageSeo } from '@/lib/content-seo';
import { homepageSeo } from '@/content/seo';

export const dynamicParams = false;
export function generateStaticParams() {
  return programmeLevels.map((l) => ({ level: l.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const item = programmeLevels.find((l) => l.slug === level);
  if (!item) notFound();
  return contentPageSeo({
    title: item.title,
    description: item.intro,
    path: `/program-level/${item.slug}/`,
    noindex: !item.level,
  });
}
export default async function LevelPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const item = programmeLevels.find((l) => l.slug === level);
  if (!item) notFound();
  const records = programmes.filter((p) => p.level === item.level);
  const path = `/program-level/${item.slug}/`;
  return (
    <div className="page-container level-page">
      <ContentStructuredData
        path={path}
        title={item.title}
        description={item.intro}
        type="CollectionPage"
        breadcrumbs={[
          { name: 'Programmes', path: '/academic-programmes/' },
          { name: item.title, path },
        ]}
        additional={
          records.length
            ? [
                {
                  '@type': 'ItemList',
                  name: item.title,
                  numberOfItems: records.length,
                  itemListElement: records.map((p, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    name: p.title,
                    url: new URL(programmePath(p.id), homepageSeo.url).href,
                  })),
                },
              ]
            : []
        }
      />
      <PageIntro title={item.title} description={item.intro} />
      <nav className="level-navigation" aria-label="Browse programme levels">
        <Link href="/academic-programmes/">All programmes</Link>
        {programmeLevels
          .filter((l) => l.level)
          .map((l) => (
            <Link
              key={l.slug}
              href={`/program-level/${l.slug}/`}
              aria-current={l.slug === level ? 'page' : undefined}
            >
              {l.title}
            </Link>
          ))}
      </nav>
      {records.length ? (
        <>
          <p className="level-count">{records.length} programmes to explore</p>
          <ProgrammeCards ids={records.map((p) => p.id)} headingLevel={2} />
        </>
      ) : (
        <section className="level-empty">
          <h2>Plan your next academic step.</h2>
          <p>
            No {level === 'ph-d' ? 'doctoral' : 'specialized master’s'}{' '}
            programmes are currently listed in this catalogue. Explore the
            available diploma and undergraduate pathways, or contact admissions
            to discuss your interests.
          </p>
          <Link className="button" href="/academic-programmes/">
            Explore current programmes ↗
          </Link>
          <Link className="text-link" href="/contact-us/">
            Contact admissions ↗
          </Link>
        </section>
      )}
      <div className="level-guidance">
        <h2>Find the route that fits you.</h2>
        <p>
          Compare subjects, read the programme guides and speak with admissions
          about eligibility, current intakes and study arrangements.
        </p>
        <Link className="text-link" href="/contact-us/">
          Get programme advice ↗
        </Link>
      </div>
    </div>
  );
}
