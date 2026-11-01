<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# SITC Campus — agent guide

Static, content-driven marketing site for SITC Campus Sri Lanka (sitc.lk), migrated off WordPress onto Next.js 16 App Router + React 19 + TypeScript strict. All copy lives in typed content modules under `src/content/`; there is no CMS, backend, or database. The only dynamic behaviour is a handful of small client islands (navigation, programme filtering/search, language switcher, hero video, enquiry form → WhatsApp handoff).

## Commands

Package manager is **Bun**. Run everything from the repo root.

```sh
bun install                # setup
bun run dev                # dev server on http://localhost:3000
bun run build              # production build
bun run start              # serve production build (port 3000)
bun run lint               # eslint --max-warnings=0  (warnings fail CI)
bun run typecheck          # tsc --noEmit
bun test                   # unit tests (bun:test)
bun run format             # prettier --write
bun run format:check       # prettier --check
```

Verification of a production build (read-only, no form submissions):

```sh
PORT=3100 bun run start &
python3 scripts/verify-public-migration.py            # HTTP/metadata/redirect/sitemap audit
node scripts/verify-layout.mjs                        # DOM geometry vs recorded reference measurements
```

**Before considering any change done:** `bun run lint && bun run typecheck && bun test` must all pass. Run the two verifier scripts for anything touching layout, SEO, metadata, redirects, or content that appears in the sitemap.

## Architecture

- `src/app/page.tsx` — homepage; assembles server-rendered sections in order inside a single `ProgrammeSelectionProvider` (client context carrying only the chosen programme).
- `src/app/(campus)/` — route group for all inner pages; shares `SiteHeader`/`SiteFooter` and `inner-pages.css`. Pages: about-us, academic-programmes, `program/[slug]`, `program-level/[level]`, news (+ `[slug]` articles), contact-us, partners, three policy pages.
- `src/app/academic-staff/`, `src/app/events/`, `src/app/category/uncategorized/` — route handlers returning **410 Gone** via `retiredPageResponse()` (`src/lib/retired-page.ts`). Deliberate; do not convert to redirects or block in robots.
- `src/app/sitemap.ts`, `robots.ts`, `feed/` — SEO endpoints; sitemap is empty and robots allow-all when `preventIndexing()` is true.
- `src/components/sections/` — homepage sections (Server Components unless they need state). `src/components/` — header, footer, hero video, programme cards, analytics, structured data.
- `src/content/` — single source of truth for all copy (see recipes below). `src/lib/` — SEO helpers, WhatsApp URL builder, GA4 bootstrap, news lookup.
- Styling: Tailwind 4 theme tokens in `src/app/globals.css` plus hand-written CSS replicating the reference design exactly. Breakpoints: **900px** and **640px**. No component/UI library.
- Fonts: DM Sans, Playfair Display, Yaldevi (Sinhala), Noto Sans Tamil — self-hosted in `public/fonts/` via `next/font/local` (`preload: false` for the two non-Latin fonts). Licenses live beside the files.
- Images: `public/images/` and original-path WordPress media under `public/wp-content/` (paths must not change — they are published URLs).

## Content editing recipes

Content changes should never require touching components. Update the module, then check every surface it feeds (homepage section, catalogue, detail page, dropdown, sitemap, RSS, JSON-LD).

- **Add/change a programme** — add a record to `src/content/programmes.ts`, a slug mapping in `src/content/programme-routes.ts`, and full details in `src/content/programme-details.ts`. One record updates the explorer, catalogue, enquiry dropdown, sitemap and tests. Renaming a slug breaks a published URL: add a permanent redirect in `next.config.ts` and keep the old slug out of the sitemap.
- **Add a news story** — every entry in `src/content/news.ts` needs a matching article (same `id`) in `src/content/news-articles.ts`, exported in date order so homepage, archive and RSS agree.
- **Contacts, nav, locations, socials** — `src/content/site.ts`. **FAQs** — `faqs.ts`. **About** — `about.ts`. **Partners** — `partners.ts`. **Policies** — `policies.ts`. **Vice Chancellor (EN/SI/TA)** — `leadership.ts` (all three locales must stay in sync).
- **SEO titles/descriptions** — `src/content/page-metadata.ts` (inner pages) and `src/content/seo.ts` (homepage/site identity). **Campus video** — `campus-video.ts` (verified YouTube metadata only).
- **Homepage section order** — `src/app/page.tsx`.

## Invariants — never break these

1. **Canonical URLs are pinned to `https://sitc.lk/`** in `src/content/seo.ts`, including local previews, so localhost can never leak into metadata. Only change if the real domain changes.
2. **Published URLs keep working.** `wp-content/*` assets serve from original paths; legacy sitemap/feed/program URLs 301 in `next.config.ts` (`trailingSlash: true` everywhere — keep it).
3. **Retired pages return real 410s** with `noindex, follow` — never redirect them to the homepage or hide them in robots.
4. **Fees and curriculum figures are migration contracts** covered by `tests/migration.test.mjs`. Never edit them editorially; update only from a verified SITC source and record provenance in `docs/research/`.
5. **No backend/forms.** The enquiry composes a `wa.me` URL (`src/lib/enquiry.ts`) and sends nothing automatically; nothing is persisted. QA inspects the composed URL only.
6. **GA4 loads only on production builds served from `sitc.lk`/`www.sitc.lk`** (`src/lib/analytics.ts`, tested in `tests/analytics.test.mjs`) — never on localhost, Vercel previews, or lookalike hosts. One root `config` owns pageviews; no manual `page_view` events.
7. **Indexing control:** `PREVENT_INDEXING=true` or `VERCEL_ENV=preview` → `noindex, nofollow` + empty sitemap. Production must leave it unset/false.
8. **Server-first rendering.** Only add `'use client'` for genuine interactivity; keep sections as Server Components and pass server-rendered children through client providers.
9. **Design fidelity is contractual.** `docs/research/reference*.json` records exact geometry; `scripts/verify-layout.mjs` fails on >0.1px drift. Recapture evidence (and update docs) rather than loosening tolerances.

## Gotchas

- This is Next.js 16 — read `node_modules/next/dist/docs/` before using APIs from memory (see block above).
- Prettier: single quotes, trailing commas. ESLint runs with `--max-warnings=0`.
- The header uses smooth hash scrolling with ~100px scroll padding (`data-scroll-behavior="smooth"` on `<html>`); respect `prefers-reduced-motion`.
- YouTube embed is privacy-enhanced (`youtube-nocookie`), muted-autoplay with poster fallback, pauses off-screen (`src/components/hero-video.tsx`).
- Sinhala/Tamil text in content files is intentional — don't "fix" encoding, punctuation, or shaping. Test files assert Unicode survives the WhatsApp URL encoding.
- Tests import `.ts` sources directly (Bun); keep them dependency-free so they run anywhere.
- When adding routes, remember every page needs its own metadata (use `contentPageSeo()`) so 404s/future routes never inherit the homepage canonical.
- `docs/research/` is evidence, not scratch space — everything there documents provenance or contracts.
