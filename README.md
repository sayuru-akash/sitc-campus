# SITC Campus

A Next.js App Router and Tailwind CSS recreation of the supplied SITC Campus reference, with an expanded contact footer, trilingual branding, and the official campus video. Uses TypeScript, local fonts, optimized images, and small interactive client components. Most of the page is statically rendered on the server.

## Development

Requires Node.js 20.9+ and Bun. Install and run:

```sh
bun install
bun run dev
```

Open http://localhost:3000. No environment variables are currently required. Canonical and sharing URLs intentionally use `https://sitc.lk/`, including in local previews; edit `src/content/seo.ts` only if the real canonical domain changes.

For public staging, set `PREVENT_INDEXING=true` before building. Vercel preview deployments receive `noindex, nofollow` automatically. Production must use `PREVENT_INDEXING=false` (or leave it unset).

```sh
bun run lint
bun run typecheck
bun test
bun run build
bun run start
```

With the built site running on port 3100, run `python3 scripts/verify-public-migration.py` to check page statuses, metadata, sitemap/feed, legacy media, redirects and internal links.

## Editing the site

- `src/app/page.tsx`: section order and page assembly.
- `src/components/sections/`: individual page sections.
- `src/content/programmes.ts`: programme titles, descriptions, and qualification levels. Add a record to update both the explorer and the enquiry dropdown.
- `src/content/site.ts`: navigation, locations, admissions contact information, and external links.
- `src/content/faqs.ts`: FAQ questions and answers.
- `src/content/campus-video.ts`: verified YouTube ID, source segment, title, date, and duration.
- `src/content/seo.ts`: live homepage title, description, public URL, social preview, and site identity.
- `src/content/leadership.ts`: English, Sinhala, and Tamil profile, biography, welcome message, and dated research figures.
- `src/components/sections/leadership.tsx`: server-rendered Vice Chancellor profile and message, with a small accessible language switcher.
- `src/components/hero-video.tsx`: deferred muted autoplay, poster fallback, playback controls, and off-screen pausing.
- `src/components/structured-data.tsx`: education, address, contact, and video JSON-LD.
- `src/app/globals.css`: Tailwind theme, shared components, exact reference measurements, and responsive breakpoints (900px and 640px).
- `public/images/` and `public/fonts/`: original assets served locally.

`ProgrammeSelectionProvider` connects programme cards to the enquiry form, while server-rendered sections are passed as children. The form validates the name and opens a prefilled WhatsApp enquiry. No message is sent automatically, and the site does not store form submissions. There is no backend or database requirement.

## Reference and provenance

The visual reference was inspected in Edge, including desktop, tablet, mobile navigation, filters, search, empty results, FAQs, and programme selection. `docs/research/` contains extracted evidence and source links. `docs/design-references/` contains the original screenshots.

Official contact details and three official locations were refreshed from https://sitc.lk/ and its contact page. The footer includes Colombo, Gampola, the UAE office in Sharjah, the user-supplied Kuala Lumpur address in Malaysia, all published support numbers, social channels, maps, appointments, and legal links. The header uses the supplied trilingual wordmark. The footer renders that exact image in white using a CSS filter, preserving every glyph. The certificate-verification link uses the official verification service. Font files come from the reference's DM Sans and Playfair Display Google Fonts stylesheet, with licenses in `public/fonts/`.

## Main pages

Eight main pages are implemented under `src/app/(campus)/`: About, Contact, Programmes, Partners, News, Privacy, Refund and Terms. Shared inner-page styles live in `inner-pages.css`; page copy and metadata live in `src/content/{about,partners,news,policies,page-metadata}.ts`. Keep the ten approved programme records as the single source for both homepage and catalogue.

Staff, Events and Uncategorized deliberately return HTTP 410 Gone with helpful navigation. All ten programmes have detail pages and all six existing news articles are local on their original paths. A verified October 2026 Tamil intake announcement is also included. Diploma and undergraduate archives list approved offerings; empty future master’s/doctoral archives remain noindex until populated. Sitemap, robots, RSS and legacy sitemap redirects are implemented. The 65 retained legacy media/PDF URLs are preserved under `public/wp-content/`.

- `src/content/programme-routes.ts`: stable programme slugs and reusable level definitions.
- `src/content/programme-details.ts`: study guides, source-labelled diploma fees, learning themes and progression.
- `public/guides/`: six newer published SITC diploma guides, discovered through its Facebook posts.
- `src/content/news-articles.ts`: article text, source links, slugs and publication metadata.
- `src/components/sections/recent-news.tsx`: homepage feature and two supporting stories after the campus experience section.
- `src/content/news.ts`: date-sorted summaries shared by homepage, news archive and RSS; new stories automatically appear in the three most recent homepage slots. For an intact poster, set `imageRatio` to its source width divided by height. Photo covers omit that field.
- `src/lib/news-presentation.ts`: shared date labels and responsive poster sizing.
- `src/lib/programme-seo.ts`: individual Sri Lanka programme search titles and descriptions, without changing approved programme names.
- `src/lib/site-schema.ts`: consistent organization and website identity embedded on every content page.
- `src/app/sitemap.ts` and `src/app/robots.ts`: canonical indexable routes and crawler guidance.

To add an offering, add the approved record to `programmes.ts`, its stable slug to `programme-routes.ts` and its detail in `programme-details.ts`. Catalogue, enquiry options and sitemap follow those records. Update the approved catalogue-count expectations in the migration checks when changing the list. Extend the qualification type and level classification if introducing a new level. Empty future levels should become indexable only when approved offerings are present.

The four degree pages contain useful original subject guidance, with exploratory themes explicitly distinguished from an official module specification. Exact awarding, entry, duration and fees still need authoritative SITC specifications. Legal pages are plain-language adaptations and need owner review before public publication. No payment backend, invented registration success or automatic external message is implemented. See [detail-page sources, migration map and QA](docs/research/DETAIL-PAGES-MIGRATION.md).

## Campus video

The hero uses SITC General Convocation Trailer, YouTube video `Db7ALM2wM6g`, matching the official site's 77-to-268-second segment. The poster and page content render on the server. The YouTube API loads only after hydration, a short delay, browser idle time, and hero visibility. The player uses the privacy-enhanced host, starts muted and inline, and pauses outside the viewport or in a hidden tab. Reduced-motion and Save-Data preferences prevent automatic loading; the play button remains available. A failed player keeps the original poster and an external watch link.

Video metadata uses the verified public upload date and duration. Google may consider a decorative homepage video ineligible for video-rich results; adding schema does not guarantee video indexing.

## Homepage SEO and migration scope

Homepage metadata preserves the live site's title, description, Open Graph identity, Twitter card, and sharing image as captured on 21 October 2026. The homepage has an explicit self-referencing canonical and indexable robots metadata. Homepage-specific fields live in `src/app/page.tsx`, so future pages and 404s do not inherit the homepage canonical. Structured data combines the existing education/contact/video information with linked WebSite, WebPage, and breadcrumb entities using stable public IDs.

The legacy sharing image and Apple icon URLs still use `/wp-content/uploads/`. Those public assets must remain available when the new homepage launches. Public content routes, sitemap, robots, RSS and the discovered legacy media paths are implemented locally. GA4 is configured as described below. WordPress backend features have not been migrated. A production cutover still needs hosting, public-origin and external-service verification. See `docs/research/SEO-AUDIT-2026-10-21.md` and its URL inventory before choosing the routing or migration approach.

The original clone measurement JSON and `scripts/verify-layout.mjs` are archived baseline evidence. They do not assert that the intentionally redesigned header and footer still match the original.

## Vice Chancellor

The leadership feature includes a portrait, a short introduction, an expandable full biography, dated research figures, and the complete welcome message. English, Sinhala, and Tamil content renders on the server. The shared language tabs support arrow keys, Home, and End. Sinhala uses the complete locally hosted Yaldevi variable font (weights 200-700); Tamil uses Noto Sans Tamil. Both licenses are included.

The portrait is an exact visual crop of the user-supplied poster, using its original photograph without changing facial features or academic attire. The source and crop coordinates are documented in the component. The English welcome message is preserved as supplied, with Sinhala and Tamil translations. The biography and research figures were supplied by the user; the figures are explicitly dated 15 October 2026 and have not been independently verified. See `docs/research/LEADERSHIP-UPDATE.md` for source and implementation notes.

## SEO and performance verification

All 28 indexable pages have production-domain canonical URLs, unique titles and descriptions, sharing metadata and JSON-LD. The original homepage search identity is preserved. Course pages link the current catalogue to their source guides, admissions contacts, refund terms and related pathways. New article dates are source dates, not build dates. No unverified reviews, ratings, accreditation, rankings or expert-review claims are added.

The homepage uses AVIF/WebP image negotiation, deferred video loading once at least half the video is visible, server-rendered recent news and native lazy images. Long off-screen news and translated leadership sections use CSS automatic content visibility, retaining their complete HTML and accessible navigation. Sinhala uses the complete licensed Yaldevi font, with its original OpenType shaping tables, through `next/font/local`. It is the shared fallback for mixed-script text and is explicitly applied with `:lang(si)` to headings, links, paragraphs, tabs and controls. Letter spacing and synthetic italics are removed for Sinhala, and VC body text is 15px. Do not reintroduce per-line glyph subsets: the former introductory subset changed a pre-base vowel's advance to zero and caused overlapping letters. The full face is loaded only when needed, without an external font request.

The source is [Yaldevi from Google Fonts](https://github.com/google/fonts/tree/main/ofl/yaldevi), designed by Mooniak, with its OFL license in `public/fonts/Yaldevi-LICENSE.txt`. The complete upstream variable TTF was converted to WOFF2 without glyph subsetting. Existing font licenses are retained. The original Playfair and DM Sans assets are unchanged. No experimental Next.js CSS flags are enabled.

See `docs/research/SEO-PERFORMANCE-2026-10-22.md` for local Lighthouse results, source evidence and the remaining public-launch checks. A localhost audit cannot verify public search rankings or real-user Core Web Vitals.

## Google Analytics 4

The shared root layout installs measurement ID `G-P3FB2R96T9` for the `sitc.lk` web stream (stream ID `6667835243`). No environment variable or extra package is required. `src/components/google-analytics.tsx` uses `next/script` after hydration; the external Google tag loads asynchronously only on `sitc.lk` and `www.sitc.lk`. Development, Vercel previews, `PREVENT_INDEXING=true` builds, localhost and other staging hosts do not report visits.

GA4 Enhanced Measurement owns pageviews and client-side history changes. Its published configuration was checked on 23 October 2026 with both enabled. Keep those settings enabled and do not add a second manual pageview hook or another copy of this tag. The same stream currently enables automatic scroll, outbound-click, file-download, video and form-interaction measurement.

Custom events cover programme selection, guide clicks, phone/email/WhatsApp contact, student resources, map links, appointment links and valid WhatsApp enquiry handoffs. `enquiry_handoff` records the handoff, without claiming delivery or enrolment. Custom payloads use controlled programme IDs, placement and contact categories; they exclude form text and full link URLs. Add new approved programme slugs in the existing programme source to keep selection reporting aligned. See `docs/research/ANALYTICS-2026-10-23.md` for the event table and verification limits.

## Favicon

`src/app/favicon.ico` is a real multi-resolution ICO using the same SITC crest as `src/app/icon.png`, with 16, 32, 48, 64, 96 and 128px frames. Next.js automatically emits its icon metadata on every route. `/favicon.ico` returns the file directly, replacing the previous redirect; the existing PNG and legacy Apple icon compatibility remain available.
