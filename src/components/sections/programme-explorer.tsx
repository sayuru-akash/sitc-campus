'use client';

import { useState } from 'react';
import { useProgrammeSelection } from '@/components/programme-selection';
import { Eyebrow } from '@/components/ui/eyebrow';
import { programmes } from '@/content/programmes';

const filters = [
  { value: 'All', label: 'All programmes' },
  { value: 'Diploma', label: 'Diplomas' },
  { value: 'Degree', label: 'Degrees' },
] as const;

type ProgrammeFilter = (typeof filters)[number]['value'];

export function ProgrammeExplorer() {
  const [activeFilter, setActiveFilter] = useState<ProgrammeFilter>('All');
  const [search, setSearch] = useState('');
  const { selectProgramme } = useProgrammeSelection();
  const query = search.trim().toLocaleLowerCase();
  const visibleProgrammes = programmes.filter(
    (programme) =>
      (activeFilter === 'All' || programme.level === activeFilter) &&
      `${programme.title} ${programme.description}`.toLocaleLowerCase().includes(query),
  );

  return (
    <section id="programmes" className="section" aria-labelledby="programmes-heading">
      <div className="section-head">
        <div>
          <Eyebrow>FIND YOUR DIRECTION</Eyebrow>
          <h2 id="programmes-heading">
            Big ambitions.<br />
            <em>The right starting point.</em>
          </h2>
        </div>
        <p>
          Explore a field that inspires you. Our admissions team will help you confirm entry
          requirements, available intakes, fees, and awarding arrangements.
        </p>
      </div>
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
        {visibleProgrammes.map((programme) => (
          <article key={programme.id} className="card">
            <div className="card-top">
              <span>{programme.level.toUpperCase()}</span>
              <span aria-hidden="true">↗</span>
            </div>
            <h3>{programme.title}</h3>
            <p>{programme.description}</p>
            <a href="#enquire" onClick={() => selectProgramme(programme.id)}>
              Explore this pathway <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
      {visibleProgrammes.length === 0 && (
        <p id="empty" role="status">No programmes match your search. Try another subject.</p>
      )}
      <p className="programme-note">
        Programme availability and progression depend on entry qualifications and awarding-university
        requirements. Ask admissions for the current programme specification.
      </p>
    </section>
  );
}
