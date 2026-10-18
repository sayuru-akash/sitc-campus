'use client';
import Image from 'next/image';
import { useState } from 'react';
import { navigation, site } from '@/content/site';
import { ButtonLink } from '@/components/ui/button-link';
import logo from '../../public/images/sitc-wordmark.png';
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="top">
        <a href={site.studentPortal}>Student portal ↗</a>
      </div>
      <header className="site-header">
        <a className="brand" href="#" aria-label="SITC Campus">
          <Image
            src={logo}
            alt="SITC Campus"
            width={420}
            height={67}
            sizes="(max-width: 640px) 72vw, (max-width: 1000px) 340px, 420px"
            className="h-auto"
            preload
          />
        </a>
        <button
          type="button"
          className="menu"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={open ? 'open' : ''}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setOpen(false);
          }}
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <ButtonLink small href="#enquire" onClick={() => setOpen(false)}>
            Enquire now ↗
          </ButtonLink>
        </nav>
      </header>
    </>
  );
}
