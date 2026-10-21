import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import './(campus)/inner-pages.css';
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="inner-pages">
        <div className="page-container missing-page">
          <p>404 / PAGE NOT FOUND</p>
          <h1>
            Let’s find your
            <br />
            next step.
          </h1>
          <p>
            This page is not available. Explore the current programmes or
            contact the campus for help.
          </p>
          <div>
            <Link className="button" href="/academic-programmes/">
              Explore programmes ↗
            </Link>
            <Link className="text-link" href="/contact-us/">
              Contact SITC ↗
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter compact />
    </>
  );
}
