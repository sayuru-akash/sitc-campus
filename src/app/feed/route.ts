import { newsStories } from '@/content/news';
import { newsArticles } from '@/content/news-articles';
const xml = (s: string) =>
  s.replace(
    /[<>&"']/g,
    (c) =>
      ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&apos;',
      })[c]!,
  );
export const dynamic = 'force-static';
export function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>SITC Campus News</title><link>https://sitc.lk/news/</link><description>News from SITC Campus</description><language>en-lk</language>${newsStories.map((s) => `<item><title>${xml(s.title)}</title><link>${xml(s.href)}</link><guid isPermaLink="true">${xml(s.href)}</guid><pubDate>${new Date(newsArticles.find((a) => a.id === s.id)!.published).toUTCString()}</pubDate><description>${xml(s.summary)}</description></item>`).join('')}</channel></rss>`,
    {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'X-Robots-Tag': 'noindex, follow',
      },
    },
  );
}
