import Link from 'next/link';
import { notFound } from 'next/navigation';
import { programmes } from '@/content/programmes';
import { programmeDetails } from '@/content/programme-details';
import {
  programmeSlugs,
  programmePath,
  programmeLevelPath,
} from '@/content/programme-routes';
import { ProgrammeSelectionProvider } from '@/components/programme-selection';
import { Enquiry } from '@/components/sections/enquiry';
import { ProgrammeCards } from '@/components/programme-cards';
import { ContentStructuredData } from '@/components/content-structured-data';
import { programmeSeo } from '@/lib/programme-seo';
import { site } from '@/content/site';
import { homepageSeo } from '@/content/seo';

export const dynamicParams = false;
export function generateStaticParams() {
  return Object.values(programmeSlugs).map((slug) => ({ slug }));
}
function findProgramme(slug: string) {
  return programmes.find((p) => programmeSlugs[p.id] === slug);
}
function programmeTitle(p: (typeof programmes)[number]) {
  return p.level === 'Diploma' ? `Diploma in ${p.title}` : p.title;
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = findProgramme(slug);
  if (!p) notFound();
  return programmeSeo(p.id);
}
const money = (n: number) => `LKR ${new Intl.NumberFormat('en-LK').format(n)}`;

export default async function ProgrammePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = findProgramme(slug);
  if (!p) notFound();
  const detail = programmeDetails[p.id];
  const title = programmeTitle(p);
  const path = programmePath(p.id);
  return (
    <ProgrammeSelectionProvider initialId={p.id}>
      <ContentStructuredData
        path={path}
        title={title}
        description={p.description}
        breadcrumbs={[
          { name: 'Programmes', path: '/academic-programmes/' },
          {
            name: p.level === 'Degree' ? 'Undergraduate' : p.level,
            path: programmeLevelPath(p.level),
          },
          { name: title, path },
        ]}
        additional={[
          {
            '@type': 'Course',
            '@id': `${homepageSeo.url.slice(0, -1)}${path}#course`,
            name: title,
            description: detail.curriculum ? detail.overview : p.description,
            url: new URL(path, homepageSeo.url).href,
            educationalLevel: p.level,
            mainEntityOfPage: {
              '@id': `${new URL(path, homepageSeo.url).href}#webpage`,
            },
            ...(detail.verifiedCurriculum
              ? {
                  teaches: detail.curriculum
                    ? detail.curriculum.flatMap((year) =>
                        year.modules.map((module) => module.title),
                      )
                    : detail.areas.map((area) => area.title),
                }
              : {}),
            provider: {
              '@id': `${homepageSeo.url}#organization`,
              '@type': 'EducationalOrganization',
              name: 'SITC Campus',
              url: homepageSeo.url,
              sameAs: homepageSeo.url,
            },
            ...(detail.durationIso ? { timeRequired: detail.durationIso } : {}),
            ...(detail.entry ? { coursePrerequisites: detail.entry } : {}),
            ...(detail.curriculum
              ? {
                  numberOfCredits: detail.curriculum.reduce(
                    (total, year) =>
                      total +
                      year.modules.reduce(
                        (credits, module) => credits + module.credits,
                        0,
                      ),
                    0,
                  ),
                }
              : {}),
          },
        ]}
      />
      <div className="page-container programme-detail">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/academic-programmes/">Programmes</Link>
          <span aria-hidden="true">/</span>
          <Link href={programmeLevelPath(p.level)}>
            {p.level === 'Degree' ? 'Undergraduate' : p.level}
          </Link>
        </nav>
        <div className="course-hero">
          <div>
            <h1 id="page-heading">{title}</h1>
            <p className="course-lead">{p.description}</p>
            {detail.intake && (
              <p className="course-intake">
                Published intake: <strong>{detail.intake}</strong>
              </p>
            )}
          </div>
          <aside className="course-summary" aria-label="Programme at a glance">
            <dl>
              <div>
                <dt>Qualification level</dt>
                <dd>{p.level}</dd>
              </div>
              {detail.awardingBody && (
                <div>
                  <dt>Awarding body</dt>
                  <dd>{detail.awardingBody}</dd>
                </div>
              )}
              {detail.duration && (
                <div>
                  <dt>Duration</dt>
                  <dd>{detail.duration}</dd>
                </div>
              )}
              {detail.delivery && (
                <div>
                  <dt>Delivery</dt>
                  <dd>{detail.delivery}</dd>
                </div>
              )}
              {detail.medium && (
                <div>
                  <dt>Teaching medium</dt>
                  <dd>{detail.medium}</dd>
                </div>
              )}
              {!detail.duration && (
                <div>
                  <dt>Entry route and study plan</dt>
                  <dd>Individual admissions assessment</dd>
                </div>
              )}
            </dl>
            <a className="button course-enquire" href="#enquire">
              Enquire about this programme <span aria-hidden="true">↗</span>
            </a>
            {detail.guide && (
              <a
                className="course-guide-link"
                href={detail.guide}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download programme guide (PDF) ↗
              </a>
            )}
          </aside>
        </div>
        <nav className="course-section-nav" aria-label="Programme contents">
          <a href="#overview">Overview</a>
          <a href="#study-areas">Study areas</a>
          <a href="#entry-fees">Entry & fees</a>
          <a href="#progression">Progression</a>
          <a href="#questions">Questions</a>
        </nav>
        <div className="course-reading-layout">
          <div>
            <section id="overview" className="course-section">
              <h2>About this programme</h2>
              <p>{detail.overview}</p>
              <h3>Who is it for?</h3>
              <p>{detail.audience}</p>
              {detail.verifiedCurriculum && (
                <>
                  <h3>Qualification profile</h3>
                  {detail.qualification && <p>{detail.qualification}</p>}
                  <p>
                    SITC’s published guide identifies PSB University as the
                    awarding body. Ask admissions for the exact award title,
                    current awarding arrangements and recognition documents
                    relevant to your intended use of the qualification.
                  </p>
                </>
              )}
            </section>
            <section id="study-areas" className="course-section">
              <h2>
                {detail.verifiedCurriculum
                  ? 'What you will study'
                  : 'Explore the subject'}
              </h2>
              <p className="course-source-note">
                {detail.verifiedCurriculum
                  ? 'A concise overview of the study areas in SITC’s published programme guide. Read the guide for the full academic profile.'
                  : 'These are subject themes to help you explore this pathway, not a confirmed SITC module list. Ask admissions for the current approved syllabus, module credits and assessment plan.'}
              </p>
              {detail.curriculum ? (
                detail.curriculum.map((year) => (
                  <div key={year.title}>
                    <h3>{year.title}</h3>
                    {year.note && <p>{year.note}</p>}
                    <ol className="curriculum-list">
                      {year.modules.map((module, index) => (
                        <li key={module.code}>
                          <span aria-hidden="true">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div>
                            <h3>{module.title}</h3>
                            <p>
                              {module.code} · {module.credits} credits
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))
              ) : (
                <ol className="curriculum-list">
                  {detail.areas.map((area, i) => (
                    <li key={area.title}>
                      <span aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3>{area.title}</h3>
                        <p>{area.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </section>
            <section className="course-section">
              <h2>Develop your understanding</h2>
              <ul className="course-outcomes">
                {detail.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </section>
          </div>
          <aside className="course-admissions">
            <h2>Admissions</h2>
            <p>
              Make an informed choice with a study plan that fits your
              background and goals.
            </p>
            <a href="#entry-fees">
              Entry and fees <span aria-hidden="true">↗</span>
            </a>
            <a href="#enquire">
              Ask a programme question <span aria-hidden="true">↗</span>
            </a>
            <a href={site.telephoneHref}>{site.telephone}</a>
            {detail.programmeContact && (
              <a
                href={detail.programmeContact.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {detail.programmeContact.label}
              </a>
            )}
            {detail.guide && (
              <a href={detail.guide} target="_blank" rel="noopener noreferrer">
                {detail.guideLabel} ↗
              </a>
            )}
          </aside>
        </div>
        <section id="entry-fees" className="course-section entry-section">
          <div>
            <h2>Entry & application</h2>
            <p>
              {detail.entry ??
                (p.level === 'Diploma'
                  ? 'Share your qualifications and relevant work experience with admissions. Eligibility is reviewed against the programme requirements; the listed audience does not guarantee admission.'
                  : 'Entry may depend on school qualifications, relevant prior study, language ability and the route you choose. Obtain the current entry criteria and an individual assessment from SITC before applying.')}
            </p>
            <ol className="application-steps">
              <li>
                <strong>Choose your pathway</strong>
                <span>
                  Tell the team which programme interests you and what you hope
                  to achieve.
                </span>
              </li>
              <li>
                <strong>Review your eligibility</strong>
                <span>
                  Have your certificates, results and relevant experience ready
                  for an admissions assessment.
                </span>
              </li>
              <li>
                <strong>Confirm your offer</strong>
                <span>
                  Request the syllabus, awarding details, study schedule, full
                  fee breakdown and refund terms in writing.
                </span>
              </li>
            </ol>
            <Link className="text-link" href="/refund-policy/">
              Read the refund policy ↗
            </Link>
          </div>
          <div className="course-fees">
            <h2>Fees & study arrangements</h2>
            {detail.fees ? (
              <>
                <p className="fee-source">
                  Published in the {detail.guideLabel}. Confirm the plan for
                  your intake before paying.
                </p>
                <dl>
                  <div>
                    <dt>Standard course fee</dt>
                    <dd className="fee-standard">
                      <s>{money(detail.fees.standard)}</s>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      {detail.fees.discountLabel ??
                        'After the published 50% scholarship'}
                    </dt>
                    <dd className="fee-scholarship">
                      {money(detail.fees.total)}
                    </dd>
                  </div>
                  {detail.fees.discount !== undefined && (
                    <div>
                      <dt>Published discount</dt>
                      <dd>{money(detail.fees.discount)}</dd>
                    </div>
                  )}
                  {detail.fees.registration !== undefined && (
                    <div>
                      <dt>Registration fee (separate)</dt>
                      <dd>{money(detail.fees.registration)}</dd>
                    </div>
                  )}
                  {detail.fees.oneTime !== undefined && (
                    <div>
                      <dt>One-time payment option</dt>
                      <dd>{money(detail.fees.oneTime)}</dd>
                    </div>
                  )}
                  {detail.fees.installments && (
                    <div>
                      <dt>Instalment plan</dt>
                      <dd>
                        {detail.fees.installments.length} ×{' '}
                        {money(detail.fees.installments[0])}
                      </dd>
                    </div>
                  )}
                  {detail.fees.examination && (
                    <>
                      <div>
                        <dt>Examination fee per subject</dt>
                        <dd>{money(detail.fees.examination.perSubject)}</dd>
                      </div>
                      <div>
                        <dt>Examination fees per semester</dt>
                        <dd>{money(detail.fees.examination.perSemester)}</dd>
                      </div>
                    </>
                  )}
                </dl>
                {detail.fees.note && (
                  <p className="fee-clarification">{detail.fees.note}</p>
                )}
                <a
                  className="text-link"
                  href={detail.guide}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View the published fee source ↗
                </a>
              </>
            ) : (
              <p>
                Request a written quotation for your entry route, including
                tuition, registration, examinations, awarding-body charges and
                any payment-plan conditions. Degree fees are not inferred from
                another institution’s prices.
              </p>
            )}
            {detail.schedule && (
              <p>
                <strong>Published timetable:</strong> {detail.schedule}
              </p>
            )}
            <p>
              {detail.intake
                ? 'Contact admissions to confirm your place and the final timetable.'
                : 'Ask admissions for the next available intake and current timetable.'}
            </p>
            {!detail.duration && (
              <p>
                Confirm programme duration, teaching medium, delivery mode and
                assessment arrangements for your entry route.
              </p>
            )}
          </div>
        </section>
        <section
          id="progression"
          className="course-section progression-section"
        >
          <h2>Where your learning can take you</h2>
          <p>{detail.progression}</p>
          <p>
            Career and further-study outcomes depend on your experience, results
            and the requirements of employers or receiving institutions.
          </p>
        </section>
        <section
          className="course-section course-provenance"
          aria-labelledby="programme-information-heading"
        >
          <h2 id="programme-information-heading">Programme information</h2>
          <p>
            {detail.verifiedCurriculum
              ? 'Study areas, delivery and fees on this page are drawn from SITC’s published intake guide. The overview and progression notes help you interpret that information. The guide and a written admissions offer should be used to confirm the arrangements for your intake.'
              : 'This page introduces the subject and possible progression routes. An official degree specification has not yet been published here. Contact SITC for the approved syllabus, entry requirements, awarding arrangements, duration and fees before applying.'}
          </p>
          <p>
            <Link className="text-link" href="/contact-us/">
              SITC admissions and contact details ↗
            </Link>
          </p>
          {detail.guide && (
            <p>
              <a
                className="text-link"
                href={detail.guide}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: {detail.guideLabel} (PDF) ↗
              </a>
            </p>
          )}
        </section>
        <section id="questions" className="course-section course-questions">
          <h2>Before you apply</h2>
          {detail.duration && (
            <details>
              <summary>How long is the {title}?</summary>
              <p>
                The published programme guide describes{' '}
                {detail.duration.toLowerCase()} of study, delivered{' '}
                {detail.delivery?.toLowerCase()}. Confirm the current intake and
                timetable with SITC admissions.
              </p>
            </details>
          )}
          {detail.fees && (
            <details>
              <summary>What are the published course fees?</summary>
              <p>
                The {detail.guideLabel} lists a standard course fee of{' '}
                {money(detail.fees.standard)} and{' '}
                {detail.fees.discount !== undefined
                  ? `a discount of ${money(detail.fees.discount)}, bringing the course fee to`
                  : 'a published 50% scholarship total of'}{' '}
                {money(detail.fees.total)}.
                {detail.fees.oneTime !== undefined &&
                  ` A one-time payment option of ${money(detail.fees.oneTime)} is also listed.`}
                {detail.fees.registration !== undefined &&
                  ` Registration of ${money(detail.fees.registration)} is separate.`}
                {detail.fees.installments &&
                  ` The instalment plan is ${detail.fees.installments.length} payments of ${money(detail.fees.installments[0])}.`}
                {detail.fees.examination &&
                  ` Examination fees are ${money(detail.fees.examination.perSubject)} per subject, totalling ${money(detail.fees.examination.perSemester)} for three examinations per semester.`}{' '}
                Confirm the offer and any additional charges for your intake
                before paying.
              </p>
            </details>
          )}
          <details>
            <summary>How do I start my application?</summary>
            <p>
              Use the enquiry form below to prepare a WhatsApp message with this
              programme selected. An admissions adviser can review your
              background and explain the application steps. You choose whether
              to send the message.
            </p>
          </details>
          <details>
            <summary>What should I confirm about the qualification?</summary>
            <p>
              Ask for the exact award title, awarding institution, syllabus,
              assessment requirements and evidence relevant to your intended use
              of the qualification. Recognition for employment, migration or
              further study depends on the receiving organisation.
            </p>
          </details>
          <details>
            <summary>Are fees and intake dates guaranteed?</summary>
            <p>
              Published guides describe a particular intake. Confirm current
              fees, payment deadlines, additional charges and the timetable with
              admissions. Payment or an enquiry alone does not guarantee
              admission or credit exemptions.
            </p>
          </details>
        </section>
        <section className="course-related">
          <div className="detail-section-heading">
            <h2>Continue exploring</h2>
            <Link className="text-link" href="/academic-programmes/">
              All programmes ↗
            </Link>
          </div>
          <ProgrammeCards ids={detail.related} />
        </section>
      </div>
      <div className="inner-enquiry">
        <Enquiry />
      </div>
    </ProgrammeSelectionProvider>
  );
}
