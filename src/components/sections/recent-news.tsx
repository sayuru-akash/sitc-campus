import Image from 'next/image';
import Link from 'next/link';
import { recentNews } from '@/content/news';
import {
  newsImageScale,
  isNewsPoster,
  formatNewsDate as dateLabel,
} from '@/lib/news-presentation';
import { Eyebrow } from '@/components/ui/eyebrow';

// Server-rendered, with the same date-sorted source as the news archive and RSS.
export function RecentNews() {
  return (
    <section
      id="latest-news"
      className="section home-news"
      aria-labelledby="news-heading"
    >
      <div className="section-head">
        <div>
          <Eyebrow>NEWS FROM SITC</Eyebrow>
          <h2 id="news-heading">
            Our campus.
            <br />
            <em>The latest stories.</em>
          </h2>
        </div>
        <Link className="text-link home-news-all" href="/news/">
          View all news <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="home-news-layout">
        {recentNews.map((story, index) => (
          <article
            key={story.id}
            className={
              index === 0
                ? 'home-news-story home-news-feature'
                : 'home-news-story'
            }
          >
            <Link
              className={`home-news-photo${isNewsPoster(story) ? ' is-poster' : ''}`}
              href={new URL(story.href).pathname}
              aria-label={`Read: ${story.title}`}
            >
              <Image
                src={story.image}
                alt=""
                fill
                sizes={
                  index === 0
                    ? `(max-width: 760px) ${88 * newsImageScale(story, 1.65)}vw, ${42 * newsImageScale(story, 1.65)}vw`
                    : '(max-width: 760px) 120px, 12vw'
                }
              />
            </Link>
            <div className="home-news-copy">
              <time dateTime={story.date}>{dateLabel(story.date)}</time>
              <h3 lang={story.lang}>
                <Link href={new URL(story.href).pathname}>{story.title}</Link>
              </h3>
              <p>{story.summary}</p>
              <Link className="text-link" href={new URL(story.href).pathname}>
                Read story <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
