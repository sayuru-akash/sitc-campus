'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { navigation, site } from '@/content/site';
import { ButtonLink } from '@/components/ui/button-link';
import logo from '../../public/images/sitc-wordmark.png';
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuTrigger = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="top">
        <a href={site.studentPortal}>Student portal ↗</a>
      </div>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="SITC Campus home">
          <Image
            src={logo}
            alt="SITC Campus"
            width={420}
            height={67}
            sizes="(max-width: 640px) 72vw, (max-width: 1000px) 340px, 420px"
            className="h-auto"
            preload
          />
        </Link>
        <button
          ref={menuTrigger}
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
            if (event.key === 'Escape') {
              setOpen(false);
              menuTrigger.current?.focus();
            }
          }}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                pathname.replace(/\/$/, '') === item.href.replace(/\/$/, '')
                  ? 'page'
                  : item.href === '/academic-programmes/' &&
                      (pathname.startsWith('/program/') ||
                        pathname.startsWith('/program-level/'))
                    ? 'location'
                    : undefined
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink
            small
            href={pathname === '/' ? '#enquire' : '/contact-us/#enquire'}
            onClick={() => setOpen(false)}
          >
            Enquire now ↗
          </ButtonLink>
        </nav>
      </header>
    </>
  );
}
