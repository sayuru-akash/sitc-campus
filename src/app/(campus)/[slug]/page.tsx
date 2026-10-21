import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { newsStories } from '@/content/news';
import { newsArticles } from '@/content/news-articles';
import { ContentStructuredData } from '@/components/content-structured-data';
import { contentPageSeo } from '@/lib/content-seo';
import { homepageSeo } from '@/content/seo';
import { programmePath, type ProgrammeId } from '@/content/programme-routes';
import { findNewsArticle } from '@/lib/news';
import {
  newsImageScale,
  isNewsPoster,
  formatNewsDate as dateLabel,
} from '@/lib/news-presentation';

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: decodeURIComponent(article.slug),
  }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = findNewsArticle(slug);
  if (!result) notFound();
  const { story, article } = result;
  return contentPageSeo({
    title: story.title,
    description: story.summary,
    path: new URL(story.href).pathname,
    image: story.image,
    article: {
      published: article.published,
      modified: article.modified,
      lang: story.lang,
    },
  });
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = findNewsArticle(slug);
  if (!result) notFound();
  const { article, story } = result;
  const path = new URL(story.href).pathname;
  const related = newsStories.filter((s) => s.id !== story.id).slice(0, 2);
  return (
    <div className="news-detail">
      <div className="page-container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/news/">News</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Article</span>
        </nav>
        <header className="article-heading">
          <time dateTime={article.published}>{dateLabel(story.date)}</time>
          <h1 lang={story.lang}>{story.title}</h1>
          <p>{story.summary}</p>
        </header>
        <figure
          className={`article-photo${isNewsPoster(story) ? ' contain-photo' : ''}`}
        >
          <Image
            src={story.image}
            alt={story.title}
            fill
            loading="eager"
            fetchPriority="high"
            sizes={`(max-width: 1500px) ${88 * newsImageScale(story, 1.8)}vw, ${1320 * newsImageScale(story, 1.8)}px`}
          />
        </figure>
        <article className="article-reading">
          <p className="article-archive-note">
            {'sourceUrl' in article
              ? 'Campus announcement, based on SITC’s published intake information. Confirm availability and final arrangements with admissions.'
              : 'From the SITC archive. This article preserves the original publication and may describe past offers, roles or events. Contact admissions for current information.'}
          </p>
          <div className="article-original" lang={story.lang}>
            {article.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          {'sourceUrl' in article && (
            <p>
              <a
                className="text-link"
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: SITC’s official announcement ↗
              </a>
            </p>
          )}
          {'programmeId' in article && (
            <p>
              <Link
                className="text-link"
                href={programmePath(article.programmeId as ProgrammeId)}
              >
                Explore the programme and published guide ↗
              </Link>
            </p>
          )}
          {'videoUrl' in article && (
            <a
              className="button article-video-link"
              href={article.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the original recommendation on Facebook ↗
            </a>
          )}
          <div className="article-return">
            <Link className="text-link" href="/news/">
              ← Back to news
            </Link>
            <Link className="text-link" href="/contact-us/">
              Contact SITC ↗
            </Link>
          </div>
        </article>
        <section className="article-related">
          <div className="detail-section-heading">
            <h2>More from SITC</h2>
            <Link className="text-link" href="/news/">
              All stories ↗
            </Link>
          </div>
          <div className="article-related-grid">
            {related.map((s) => (
              <article key={s.id}>
                <Link
                  className="related-news-photo"
                  aria-label={`Read: ${s.title}`}
                  href={new URL(s.href).pathname}
                >
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 88vw, 20vw"
                  />
                </Link>
                <div>
                  <time dateTime={s.date}>{dateLabel(s.date)}</time>
                  <h3 lang={s.lang}>
                    <Link href={new URL(s.href).pathname}>{s.title}</Link>
                  </h3>
                  <p>{s.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      <ContentStructuredData
        path={path}
        lang={story.lang}
        title={story.title}
        description={story.summary}
        breadcrumbs={[
          { name: 'News', path: '/news/' },
          { name: story.title, path },
        ]}
        additional={[
          {
            '@type': 'NewsArticle',
            '@id': `${story.href}#article`,
            headline: story.title,
            description: story.summary,
            datePublished: article.published,
            dateModified: article.modified,
            inLanguage: story.lang,
            image: new URL(story.image, homepageSeo.url).href,
            author: {
              '@id': `${homepageSeo.url}#organization`,
              '@type': 'Organization',
              name: 'SITC Campus',
              url: homepageSeo.url,
            },
            publisher: {
              '@id': `${homepageSeo.url}#organization`,
              '@type': 'Organization',
              name: 'SITC Campus',
              url: homepageSeo.url,
              logo: {
                '@type': 'ImageObject',
                url: new URL('/images/sitc-wordmark.png', homepageSeo.url).href,
              },
            },
            mainEntityOfPage: { '@id': `${story.href}#webpage` },
          },
        ]}
      />
    </div>
  );
}
