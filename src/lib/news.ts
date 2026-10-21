import { newsArticles } from '@/content/news-articles';
import { newsStories } from '@/content/news';

// WordPress uses lower-case percent escapes; requests may arrive decoded or
// with a different Unicode composition. Match all forms to the original URL.
export function findNewsArticle(slug: string) {
  let normalized: string;
  try {
    normalized = decodeURIComponent(slug).normalize('NFC');
  } catch {
    return null;
  }
  const article = newsArticles.find(
    (a) => decodeURIComponent(a.slug).normalize('NFC') === normalized,
  );
  const story = newsStories.find((s) => s.id === article?.id);
  return article && story ? { article, story } : null;
}
