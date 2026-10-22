# SEO, performance and homepage news update

Local implementation begun 22 October 2026; final build verified 23 October 2026. Production preview: http://localhost:3100/. Public canonical identity: https://sitc.lk/.

## Changes

- Homepage news follows the campus experience section and precedes academic leadership. One feature and two supporting stories use the same date-sorted records as the archive and RSS. The view-all link opens `/news/`. Dates are displayed, including older archive dates.
- Added the Tamil diploma November 2026 announcement using SITC's official 19 October post and its published guide. The original announcement artwork is served locally, without altering its content. The article links to its source and the programme page. The supplied Drive link is the same guide already stored as `/guides/tamil-2026.pdf`.
- Six diploma pages show the standard fee with semantic `<s>` markup and a restrained strike-through. The scholarship total is larger and distinct. Amounts are unchanged, including English's separate LKR 36,000 / LKR 18,000 figures.
- Shared footer includes “Developed with ❤️ by Codezela Technologies”, with the company name linked to https://codezela.com/.
- Programme search titles and descriptions include the subject and Sri Lanka naturally. HRM is expanded in the search title. The ten approved programme records, names, levels and descriptions remain unchanged.
- Every content page embeds the same public organization and website identity, alongside its page and relevant course/article schema. Inner pages have breadcrumb trails with two or more items. The homepage omits a redundant one-item trail, following the [Google breadcrumb requirements](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb). Course list entries link directly to canonical detail pages with a named provider. Article language and publisher are explicit. Source modification dates are used for news sitemap entries; build dates are not presented as content updates.
- Course pages include source guides, admissions contacts, related pathways, qualification guidance, and useful fee/duration questions where verified. No synthetic star ratings, fabricated reviews, guaranteed recognition, invented faculty review or number-one ranking claims were added.
- Canonicals, existing homepage metadata, legacy article/course paths, the sharing-image path, sitemap/feed redirects, real 404s and deliberate 410 removals are retained. Preview noindex controls remain in place.

## Source evidence

- [Official Tamil announcement](https://www.facebook.com/sitc.campus/posts/1121031450462286/), published 19 October 2026, inspected in Edge.
- [Published Tamil guide](https://drive.google.com/file/d/1xD6etCu73eBPoJbc4Zv4RuS8ximHmksz/view), same ID as the user-supplied link. Local full PDF retained.
- Artwork source: [official announcement photo](https://web.facebook.com/photo/?fbid=1121032927128805&set=pcb.1121031450462286). The poster's assertions are not independently reclassified as verified accreditation in page copy or structured data.
- Existing programme source records and migration evidence remain in `programme-source-evidence.json` and `DETAIL-PAGES-MIGRATION.md`.
- The announcement poster prints a Gampola street number of 208. The approved location directory retains 285 from the current website. Confirm this source discrepancy before public cutover; the directory was not silently changed.

## Performance work

Production HTML remains statically generated. Recent news adds no client component or external request. Images negotiate AVIF/WebP; the hero poster uses quality 75 instead of 90. Contained news posters request pixels for the visible image rather than the empty frame, with 192px and 480px optimized variants available. Video waits until at least half its container is visible and continues to respect reduced motion, Save-Data, off-screen pausing and hidden tabs. Mobile visitors can read the introductory screen without loading a mostly off-screen YouTube player.

The short Sinhala introduction uses a 15,372-byte subset of the original licensed font. The complete Sinhala and Tamil fonts remain available for news, language tabs, full translations and fallback characters. Automatic CSS content visibility delays work for long off-screen news, leadership and related-story sections, keeping their text and links in server HTML. Original DM Sans and Playfair assets and font-swap behaviour are retained.

Lighthouse exposed missing favicon compatibility, low contrast, small adjacent links, skipped archive heading levels and unnamed related-photo links. Desktop testing also caught the homepage ribbon caption at 4.38:1 contrast; its text was darkened to match the accessible enquiry caption colour. These were repaired in shared components and styles. An experimental CSS-inlining trial and broader font-subsetting trials did not justify their trade-offs and are not part of the final configuration.

## Verification

The flow checked in Edge was homepage → View all news → 2026 filter (one story) → Tamil announcement → programme page → published fee source and preselected enquiry. The expected Tamil programme was selected. The standard amount had computed `line-through` decoration, and no application console errors were captured in that flow. Header and footer credit were read back from the rendered site.

Desktop browser inspection used the existing 1382px viewport. Browser viewport/CDP control was unavailable because the session still referred to an unattached older tab / paused response, so mobile visual evidence comes from Lighthouse's actual 412px browser captures. No terminal browser-interaction script was substituted. Mobile news and fee screenshots were visually inspected: heading hierarchy, intact poster, actual dates, view-all placement, readable Sinhala, fee emphasis and wrapping were checked. The user continued using the Edge preview; that tab was preserved, and temporary DevTools were confirmed closed. No viewport override remained.

The site-wide HTTP check covers 28 indexable pages and two deliberately noindex future levels, all 27 legacy HTML decisions, 66 legacy media files, six current guides, 41 redirects, seven RSS entries, unique titles/descriptions, public sharing images, JSON-LD organization/course identity, internal paths/fragments and genuine 404/410 statuses. It submits no external forms.

Formatting, ESLint, TypeScript, Bun tests and the production build are the code gates. The automated tests protect approved URLs, Unicode route resolution, financial totals, preview indexing controls, newest-first news and unique programme metadata.

Lighthouse 13.5.0 runs against the production server using isolated headless Edge profiles, sequentially, with its default mobile simulation. Desktop uses its desktop preset. The compact results are in `lighthouse-summary-2026-10-22.json`. Scores are local lab measurements, not a claim about deployed PageSpeed or field Core Web Vitals. Real-user INP and a public 75th-percentile CWV pass are not established by this work.

## Recorded lab scores

The complete mobile pass covered all 28 indexable routes. News, the catalogue and the homepage were retested after the final image changes; the homepage was retested again after its desktop caption fix. The compact JSON records the test phase for each retained result.

| Scope | Performance | Accessibility | Best practices | SEO |
| --- | --- | --- | --- | --- |
| Mobile, all 28 routes | 89-97 | 100 | 100 | 100 |
| Mobile homepage | 91 | 100 | 100 | 100 |
| Desktop homepage | 100 | 100 | 96 | 100 |
| Desktop news archive | 100 | 100 | 100 | 100 |
| Desktop psychology diploma | 100 | 100 | 100 | 100 |

The final desktop homepage run reported a Cookie issue inside the requested autoplay `youtube-nocookie.com` iframe. The earlier desktop run had no such issue. The video was retained, and the lower final score is recorded rather than hidden by disabling the embed. This is an external embed/browser behaviour boundary.

## Public-launch boundaries

The local public frontend is implemented. A public cutover still requires hosting/DNS, production-origin redirects and media checks, Search Console sitemap submission and indexing review, and external portal, verification, WhatsApp and booking checks. Tracking services were not activated. No production deployment, external message, payment or form submission was performed.

The four degree pages deliberately distinguish subject guidance from an official specification. SITC must supply or approve their exact awarding arrangements, entry criteria, duration, fees, credits and assessment plans before those details are published. The legal policy adaptations also need owner review. The Vice Chancellor's biography and dated research figures remain user-supplied information, without an invented expert-review claim.

`bun outdated` found no newer Next.js, React or Tailwind release for the installed dependencies. ESLint 10 and TypeScript 7 are available as breaking major upgrades; the existing compatible toolchain is retained. `bun audit` reports one high-severity transitive development-tool advisory in `braces@3.0.3`, through `eslint-config-next` and `fast-glob`. The registry still reports 3.0.3 as latest, and the [reviewed advisory lists no patched version](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). This is not a clean dependency-audit result. That dependency is not imported by application source; this check is not a complete security assessment. Avoid processing untrusted glob patterns in development tooling and revisit when an upstream patch is released.

Search relevance is supported by clear subject pages, reliable source material and working technical SEO. [Google's people-first guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) prioritizes useful, trustworthy information. [Search Essentials](https://developers.google.com/search/docs/essentials) does not guarantee indexing or visibility from compliance. A number-one position cannot be promised by implementation or Lighthouse scores.

## Repeat the local checks

```sh
bun run format:check
bun run lint
bun run typecheck
bun test
bun run build
# Run the built preview in a separate terminal.
bun run start -- --hostname 127.0.0.1 --port 3100
# Then check public routes without submitting forms.
python3 scripts/verify-public-migration.py --report docs/research/local-verification.json
```

The requested production preview is intentionally left running on port 3100. The Edge preview tab is kept as the deliverable. Temporary audit browsers exit after their Lighthouse runs; no user-owned browser session is closed.
