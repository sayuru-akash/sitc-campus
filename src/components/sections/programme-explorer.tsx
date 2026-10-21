'use client';

import { Fragment, useState } from 'react';
import Link from 'next/link';
import { programmePath } from '@/content/programme-routes';
import { useProgrammeSelection } from '@/components/programme-selection';
import { Eyebrow } from '@/components/ui/eyebrow';
import { programmes } from '@/content/programmes';

const filters = [
  { value: 'All', label: 'All programmes' },
  { value: 'Diploma', label: 'Diplomas' },
  { value: 'Degree', label: 'Degrees' },
] as const;

type ProgrammeFilter = (typeof filters)[number]['value'];

export function ProgrammeExplorer({
  catalogue = false,
}: {
  catalogue?: boolean;
}) {
  const [activeFilter, setActiveFilter] = useState<ProgrammeFilter>('All');
  const [search, setSearch] = useState('');
  const { selectProgramme } = useProgrammeSelection();
  const query = search.trim().toLocaleLowerCase();
  const visibleProgrammes = programmes.filter(
    (programme) =>
      (activeFilter === 'All' || programme.level === activeFilter) &&
      `${programme.title} ${programme.description}`
        .toLocaleLowerCase()
        .includes(query),
  );

  return (
    <section
      id="programmes"
      className="section"
      aria-labelledby={catalogue ? 'page-heading' : 'programmes-heading'}
    >
      {!catalogue && (
        <div className="section-head">
          <div>
            <Eyebrow>FIND YOUR DIRECTION</Eyebrow>
            <h2 id="programmes-heading">
              Big ambitions.
              <br />
              <em>The right starting point.</em>
            </h2>
          </div>
          <p>
            Explore a field that inspires you. Our admissions team will help you
            confirm entry requirements, available intakes, fees, and awarding
            arrangements.
          </p>
        </div>
      )}
      <div className="filterbar">
        <div className="filters" role="group" aria-label="Programme level">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={activeFilter === filter.value ? 'active' : undefined}
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
              {catalogue && (
                <span className="filter-count">
                  {' '}
                  (
                  {filter.value === 'All'
                    ? programmes.length
                    : programmes.filter(
                        (programme) => programme.level === filter.value,
                      ).length}
                  )
                </span>
              )}
            </button>
          ))}
        </div>
        <input
          id="search"
          aria-label="Search programmes"
          placeholder="Search your interest ↗"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div id="cards" className="cards">
        {visibleProgrammes.map((programme, index) => (
          <Fragment key={programme.id}>
            {catalogue &&
              (index === 0 ||
                visibleProgrammes[index - 1].level !== programme.level) && (
                <h2 className="catalogue-group">
                  {programme.level === 'Diploma'
                    ? 'Diploma programmes'
                    : 'Degree programmes'}
                </h2>
              )}
            <article id={`programme-${programme.id}`} className="card">
              <div className="card-top">
                <span>{programme.level.toUpperCase()}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>
                <Link href={programmePath(programme.id)}>
                  {programme.title}
                </Link>
              </h3>
              <p>{programme.description}</p>
              <Link
                href={programmePath(programme.id)}
                className="programme-details-link"
              >
                View programme <span aria-hidden="true">↗</span>
              </Link>
              <a
                className="programme-quick-enquiry"
                href="#enquire"
                onClick={() => selectProgramme(programme.id)}
              >
                {catalogue
                  ? 'Enquire about this programme'
                  : 'Explore this pathway'}{' '}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          </Fragment>
        ))}
      </div>
      {visibleProgrammes.length === 0 && (
        <p id="empty" role="status">
          No programmes match your search. Try another subject.
        </p>
      )}
      <p className="programme-note">
        Programme availability and progression depend on entry qualifications
        and awarding-university requirements. Ask admissions for the current
        programme specification.
      </p>
    </section>
  );
}
