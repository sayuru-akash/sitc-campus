'use client';

import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import {
  leadershipLanguageLabels,
  leadershipLocales,
  type LeadershipLocale,
} from '@/content/leadership';

type Panel = { locale: LeadershipLocale; label: string; content: ReactNode };
export function LeadershipLanguages({ panels }: { panels: readonly Panel[] }) {
  const [active, setActive] = useState<LeadershipLocale>('en');
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  function moveFocus(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % panels.length;
    else if (event.key === 'ArrowLeft')
      next = (index - 1 + panels.length) % panels.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = panels.length - 1;
    else return;
    event.preventDefault();
    setActive(panels[next].locale);
    tabs.current[next]?.focus();
  }
  return (
    <div id="leadership" className="leadership">
      <div className="leadership-toolbar">
        <p lang={active}>
          {panels.find((panel) => panel.locale === active)?.label}
        </p>
        <div
          className="leadership-tabs"
          role="tablist"
          aria-label="Vice Chancellor profile and message language"
        >
          {leadershipLocales.map((locale, index) => (
            <button
              key={locale}
              ref={(element) => {
                tabs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`leadership-tab-${locale}`}
              aria-controls={`leadership-panel-${locale}`}
              aria-selected={active === locale}
              tabIndex={active === locale ? 0 : -1}
              lang={locale}
              onClick={() => setActive(locale)}
              onKeyDown={(event) => moveFocus(event, index)}
            >
              {leadershipLanguageLabels[locale]}
            </button>
          ))}
        </div>
      </div>
      {panels.map((panel) => (
        <div
          key={panel.locale}
          id={`leadership-panel-${panel.locale}`}
          role="tabpanel"
          aria-labelledby={`leadership-tab-${panel.locale}`}
          className="leadership-panel"
          lang={panel.locale}
          hidden={active !== panel.locale}
          tabIndex={0}
        >
          {panel.content}
        </div>
      ))}
    </div>
  );
}
