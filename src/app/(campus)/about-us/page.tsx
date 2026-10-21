import Image from 'next/image';
import Link from 'next/link';
import {
  PageIntro,
  PageStructuredData,
  PageCallToAction,
} from '@/components/inner-page';
import { aboutCampus } from '@/content/about';
import { mainPageSeo } from '@/lib/page-seo';

export const metadata = mainPageSeo('about');

export default function AboutPage() {
  return (
    <>
      <PageStructuredData pageKey="about" type="AboutPage" />
      <div className="about-hero page-container">
        <PageIntro
          title="About SITC Campus"
          breadcrumb="About"
          accent="Learning with purpose. Growing with opportunity."
          description={aboutCampus.intro}
        />
        <figure className="about-photo">
          <Image
            src="/images/inner/campus-community.jpg"
            alt="SITC Campus graduates celebrating at the 2023 general convocation"
            width={768}
            height={512}
            sizes="(max-width: 760px) 88vw, 48vw"
            preload
          />
        </figure>
      </div>
      <section
        className="purpose-columns page-container"
        aria-label="Our purpose"
      >
        <div>
          <h2>Our vision</h2>
          <p>{aboutCampus.vision}</p>
        </div>
        <div>
          <h2>Our mission</h2>
          <p>{aboutCampus.mission}</p>
        </div>
      </section>
      <section
        className="values-section page-container"
        aria-labelledby="values-heading"
      >
        <div>
          <h2 id="values-heading">What we value</h2>
          <p>The principles behind how we learn, teach and work together.</p>
          <Link className="text-link" href="/#leadership">
            Meet our Vice Chancellor <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <ol>
          {aboutCampus.values.map((value, i) => (
            <li key={value.title}>
              <span className="value-number">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <PageCallToAction />
    </>
  );
}
