import Image from 'next/image';
import portrait from '../../../public/images/vice-chancellor-source.png';
import { LeadershipLanguages } from '@/components/leadership-languages';
import {
  leadershipCopy,
  leadershipLocales,
  leadershipResearch,
  type LeadershipCopy,
  type LeadershipLocale,
} from '@/content/leadership';

function ViceChancellorProfile({
  copy,
  locale,
}: {
  copy: LeadershipCopy;
  locale: LeadershipLocale;
}) {
  return (
    <section
      className="vc-profile-section"
      aria-labelledby={`vc-heading-${locale}`}
    >
      <div className="vc-profile">
        <div className="vc-portrait">
          {/* Exact crop of the supplied photograph, preserving the original pixels.
            Source: 1583x2048. Photo bounds: x312, y433, width960, height1124. */}
          <Image
            src={portrait}
            alt={copy.portraitAlt}
            width={1583}
            height={2048}
            sizes="(max-width: 640px) 280px, (max-width: 1000px) 340px, 470px"
            quality={90}
            className="vc-portrait-source"
          />
        </div>
        <div className="vc-profile-copy">
          <h2 id={`vc-heading-${locale}`}>
            {copy.heading} <span>{copy.headingEmphasis}</span>
          </h2>
          <h3 className="vc-name">
            <span>{copy.honorific}</span> <span>{copy.personName}</span>
          </h3>
          <p className="vc-role">{copy.role}</p>
          <div className="vc-summary">
            {copy.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="vc-research" aria-label={copy.researchDate}>
            <div>
              <strong>{leadershipResearch.citations}</strong>
              <span>{copy.citationsLabel}</span>
            </div>
            <div>
              <strong>{leadershipResearch.hIndex}</strong>
              <span lang="en">h-index</span>
            </div>
            <div>
              <strong>{leadershipResearch.i10Index}</strong>
              <span lang="en">i10-index</span>
            </div>
          </div>
          <p className="vc-research-date">
            <time dateTime={leadershipResearch.asOf}>{copy.researchDate}</time>
          </p>
        </div>
      </div>
      <details className="vc-biography">
        <summary>
          {copy.biographyLabel}
          <span aria-hidden="true">+</span>
        </summary>
        <div>
          {copy.biography.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </details>
    </section>
  );
}

function ViceChancellorMessage({
  copy,
  locale,
}: {
  copy: LeadershipCopy;
  locale: LeadershipLocale;
}) {
  return (
    <section
      className="vc-message"
      aria-labelledby={`vc-message-heading-${locale}`}
    >
      <div className="vc-message-intro">
        <h2 id={`vc-message-heading-${locale}`}>{copy.messageHeading}</h2>
        <blockquote>{copy.quote}</blockquote>
      </div>
      <div className="vc-letter">
        <p className="vc-salutation">{copy.salutation}</p>
        {copy.message.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="vc-signature">
          <strong>{copy.name}</strong>
          <span>{copy.role}</span>
          <span>{copy.institution}</span>
          <span>{copy.country}</span>
        </div>
      </div>
    </section>
  );
}

export function Leadership() {
  return (
    <LeadershipLanguages
      panels={leadershipLocales.map((locale) => {
        const copy = leadershipCopy[locale];
        return {
          locale,
          label: copy.sectionLabel,
          content: (
            <>
              <ViceChancellorProfile copy={copy} locale={locale} />
              <ViceChancellorMessage copy={copy} locale={locale} />
            </>
          ),
        };
      })}
    />
  );
}
