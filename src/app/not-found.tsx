import { NotFoundContent } from '@/components/not-found-content';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import './(campus)/inner-pages.css';
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="inner-pages">
        <NotFoundContent />
      </main>
      <SiteFooter compact />
    </>
  );
}
