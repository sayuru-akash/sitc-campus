'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { newsStories } from '@/content/news';
import {
  newsImageScale,
  isNewsPoster,
  formatNewsDate,
} from '@/lib/news-presentation';

const years = [...new Set(newsStories.map((story) => story.date.slice(0, 4)))];
export function NewsArchive() {
  const [year, setYear] = useState('all');
  const stories = newsStories.filter(
    (story) => year === 'all' || story.date.startsWith(year),
  );
  return (
    <>
      <div
        className="news-filters"
        role="group"
        aria-label="Filter news by publication year"
      >
        {['all', ...years].map((item) => (
          <button
            type="button"
            key={item}
            aria-pressed={year === item}
            onClick={() => setYear(item)}
          >
            {item === 'all' ? 'All stories' : `${item} archive`}
          </button>
        ))}
      </div>
      <div className="news-grid" aria-live="polite">
        {stories.map((story, index) => (
          <article
            className={
              year === 'all' && index === 0
                ? 'news-story featured-story'
                : 'news-story'
            }
            key={story.id}
          >
            <Link
              className={`news-photo${isNewsPoster(story) ? ' poster-photo' : ''}`}
              href={new URL(story.href).pathname}
              aria-label={`Read story: ${story.title}`}
            >
              <Image
                src={story.image}
                alt=""
                fill
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                sizes={
                  year === 'all' && index === 0
                    ? `(max-width: 760px) ${88 * newsImageScale(story, 1.5)}vw, ${52 * newsImageScale(story, 1.5)}vw`
                    : `(max-width: 640px) ${88 * newsImageScale(story, 1.5)}vw, (max-width: 1000px) ${43 * newsImageScale(story, 1.5)}vw, ${28 * newsImageScale(story, 1.5)}vw`
                }
              />
            </Link>
            <div className="news-story-copy">
              <time dateTime={story.date}>{formatNewsDate(story.date)}</time>
              <h2 lang={story.lang}>
                <Link href={new URL(story.href).pathname}>{story.title}</Link>
              </h2>
              <p>{story.summary}</p>
              <Link className="text-link" href={new URL(story.href).pathname}>
                Read story <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <p className="archive-note">
        Campus announcements and archive stories, newest first, with their
        original publication dates.
      </p>
    </>
  );
}
