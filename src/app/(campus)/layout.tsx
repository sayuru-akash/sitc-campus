import type { ReactNode } from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import './inner-pages.css';

export default function CampusLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="inner-pages">
        {children}
      </main>
      <SiteFooter compact />
    </>
  );
}
