import {
  PageIntro,
  PageStructuredData,
  PageCallToAction,
} from '@/components/inner-page';
import { NewsArchive } from '@/components/news-archive';
import { newsStories } from '@/content/news';
import { mainPageSeo } from '@/lib/page-seo';

export const metadata = mainPageSeo('news');

export default function NewsPage() {
  return (
    <>
      <PageStructuredData
        pageKey="news"
        type="CollectionPage"
        additional={[
          {
            '@type': 'ItemList',
            name: 'SITC Campus news archive',
            itemListElement: newsStories.map((story, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: story.title,
              url: story.href,
            })),
          },
        ]}
      />
      <div className="page-container">
        <PageIntro
          title="Campus news"
          breadcrumb="News"
          description="Stories from our academic community."
        />
        <NewsArchive />
      </div>
      <PageCallToAction title="Explore more with SITC." />
    </>
  );
}
