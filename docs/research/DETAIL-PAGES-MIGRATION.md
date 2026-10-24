# Programme details, articles and public route migration

This implementation extends the eight main pages with all ten approved programme pages, all six existing news articles, four programme-level routes, a branded 404, sitemap, robots file and RSS feed. Nothing has been deployed.

## Content and sources

The approved programme list is unchanged. Each programme now has a stable `/program/` URL. The five original live course URLs are retained, including the long English URL. The additional five records receive descriptive permanent paths in `src/content/programme-routes.ts`.

Every programme detail has an overview, audience, study areas, learning goals, entry/application guidance, fees/study arrangements, progression, questions, related programmes, and the real WhatsApp enquiry form with its programme preselected. Study areas for all six diplomas are summarised from SITC's own PDFs. Programme guides identify PSB University as the awarding body; the visible wording attributes that to the guide and asks visitors to confirm the award and recognition needed for their purpose. No accreditation guarantees, employment guarantees, automatic exemptions, admission guarantees or invented numerical entry rules were added.

### Current diploma guides

SITC's public Facebook page was read in Edge, including its latest visible Tamil notice and course searches for Diploma, English, Business Management and Degree. The 2026 diploma posts link public Google Drive guides. These six documents were downloaded, read and their fee pages rendered and visually inspected. Source links and exact figures are in [programme-source-evidence.json](programme-source-evidence.json).

| Programme | Published guide intake | Standard fee | After 50% scholarship | One-time option | Instalments |
| --- | --- | --- | --- | --- | --- |
| Psychology & Counselling | September 2026 | LKR 48,000 | LKR 24,000 | LKR 19,000 | 4 × LKR 6,000 |
| Information Technology | September 2026 | LKR 48,000 | LKR 24,000 | LKR 19,000 | 4 × LKR 6,000 |
| Business Management | September 2026 | LKR 48,000 | LKR 24,000 | LKR 19,000 | 4 × LKR 6,000 |
| HRM & Administration | August 2026 | LKR 48,000 | LKR 24,000 | LKR 19,000 | 4 × LKR 6,000 |
| English | June 2026 | LKR 36,000 | LKR 18,000 | LKR 13,000 | 3 × LKR 6,000 |
| Tamil as a Second Language | November 2026 | LKR 48,000 | LKR 24,000 | LKR 19,000 | 4 × LKR 6,000 |

The Tamil post dated 19 October announces 26 November 2026 at 8 PM, six months, Zoom, Sinhala explanations, Wednesday and Sunday classes 8 to 10 PM, and recordings. Only that future intake is displayed as a dated start. Other guides describe past intakes and are labelled with their intake source; the site directs visitors to confirm the next intake and payment terms. No stale countdown or automatic payment link was added.

Important extraction finding: the English PDF text contains an extra obsolete instalment row outside the visible page. The rendered page clearly shows three LKR 6,000 payments, totalling LKR 18,000. The implementation follows the visible document rather than the hidden extraction artefact. All six visible fee pages were checked.

The older five PDFs linked on the current main website remain available at their original `/wp-content/uploads/` paths. Newer guides are separate files under `/guides/`; old links are not silently replaced with different content.

### Degree content boundaries

The four degree titles are the user's approved offerings. On 24 October 2026, the user supplied the 28-page Psychology and Counselling degree guide. Its unchanged PDF is now available at `/guides/psychology-degree-2026.pdf`. The degree page now publishes its diploma-entry route, three-year qualification with a two-year exempted study route, all 24 modules and 90 credits, mixed-medium Zoom teaching and monthly practical sessions, 6 December 2026 intake, and the separate degree fee plan. Source pages and the exact file hash are recorded in `programme-source-evidence.json`. The degree's LKR 50,500 discount is not described as a 50% diploma scholarship; registration and examination charges remain separate. Awarding identity and qualification profile are attributed to the guide, without independently certifying its recognition or ranking claims.

The other three degree pages still provide original subject explanations, clearly labelled exploratory study themes, application guidance and useful questions for admissions. Their exact specifications, awarding arrangements and fees still need authoritative documents. No other programme records or facts were changed by this update.

LPEC was researched as requested for subject context: [Psychology diploma](https://lpec.lk/courses/diploma-in-psychology/), [Business diploma](https://lpec.lk/courses/diploma-in-business-management/), [HR diploma](https://lpec.lk/courses/diploma-in-hr-management/), [English diploma](https://lpec.lk/courses/diploma-in-english/), [Psychology and Counselling degree](https://lpec.lk/courses/bachelor-of-science-in-psychology-counselling-b-sc-psy/) and [Business degree](https://lpec.lk/courses/bachelor-of-business-management/). LPEC prices, qualifications, module credits and admissions rules are not relabelled as SITC facts. The business page itself contains a marketing-focused description under a general business title, another reason not to copy an entire unrelated specification.

### News

All six public WordPress posts are preserved as local article pages on their original URLs, including five Sinhala slugs. Original headlines, publication dates and body text are retained. Decorative Facebook emoji images, wrappers and executable embed HTML were removed. The recommendation article links its genuine Facebook video, rather than loading a tracking-heavy embed on page load. Articles are labelled archival so old offers and appointments are not represented as current announcements. Related story links and the archive now navigate within the site.

The news data is editable in `src/content/news.ts` and `src/content/news-articles.ts`. The article renderer escapes source text, supplies metadata and NewsArticle/breadcrumb schema, and never executes arbitrary imported WordPress markup. Percent-encoded, decoded and canonically equivalent Unicode slugs map to the same article. Unknown or malformed slugs return the normal 404.

## Archives, sitemap and URL continuity

- `/program-level/diploma/`: six diploma offerings, indexable.
- `/program-level/undergraduate/`: four degree offerings, indexable.
- `/program-level/specialized-masters/` and `/program-level/ph-d/`: useful future-facing pages, no current offerings, noindex/follow, excluded from the sitemap. They do not imply that unlisted programmes are available. Populate the data and level classification when future offerings are approved.
- Staff, Events and Uncategorized return genuine 410 responses, including HEAD, with no unrelated redirect. They remain crawlable so removal can be observed.
- The sitemap lists 27 distinct canonical indexable pages: home, eight main pages, ten programmes, six articles and two populated levels. No invented last-modified dates or retired/empty routes appear.
- Legacy sitemap filenames permanently redirect to the new sitemap. News RSS is available at `/feed/`; `/news/feed/` redirects there. `/sitemap.rss` redirects to `/sitemap.xml`.
- Trailing-slash paths are preserved. Slashless pages receive 308 normalization. Unknown paths return a real 404 with useful navigation.
- Public staging retains canonical sitc.lk identities and noindex metadata; its sitemap is empty. Robots allows crawling so noindex can be read.
- All 66 discovered same-origin legacy image/PDF URLs are saved at their original upload paths. See [legacy-asset-manifest.json](legacy-asset-manifest.json). This protects the existing sharing image, Apple icon and old brochure/media links.
- [sitc-migration-map.csv](sitc-migration-map.csv) gives the decision for every one of the 27 previously discovered public HTML URLs.

## Design and fidelity evidence

Two new preview-only concepts were generated with the built-in Image Gen tool and inspected before implementation:

- Programme detail: `/Users/sayuru/.codex/generated_images/01a15082-8d19-7590-a5d0-fcc9da378575/exec-36f109c6-68b6-42c5-8c08-91f2985e0dc6.png`
- News article: `/Users/sayuru/.codex/generated_images/01a15082-8d19-7590-a5d0-fcc9da378575/exec-ecfc1246-3d0c-4460-974c-84db8ed6e67a.png`

Brief: reuse the existing cream, burgundy, gold rules, Playfair/DM Sans design; programme hero with summary rail, contents anchors, numbered study rows, entry/fees, progression, FAQ and related programmes; article headline/date, genuine source photo, readable body, archive note and related stories. Generated imagery is not used in production.

Browser captures live under `/Users/sayuru/.codex/visualizations/2026/10/18/01a15082-8d19-7590-a5d0-fcc9da378575/`, including `programme-detail-desktop.png`, `programme-detail-full.png`, `programme-tamil-mobile.png`, `programme-degree-mobile.png`, `news-sinhala-article-desktop.png`, `news-article-mobile.png` and `programme-level-desktop.png`. The accepted concepts and latest browser renders were inspected with view_image.

| Fidelity point | Result or intentional change |
| --- | --- |
| Layout | Programme introduction beside a burgundy summary, horizontal contents navigation and an open reading layout with admissions rail. |
| Typography | Shared local Playfair and DM Sans. Sinhala uses the local Noto font with a dedicated heading scale and body line height. |
| Palette and borders | Exact existing cream and burgundy tokens, gold dividers, square forms, restrained framing. |
| Copy | Approved programme titles are preserved. Actual guide text and fees replace the concept's sample curriculum and CTAs. |
| Assets | Authentic SITC photographs and original trilingual wordmark replace generated sample imagery and sample logo. |
| Downstream sections | Numbered study areas, entry steps, readable fee comparison, progression, native FAQ disclosures and actual related programmes. |
| Mobile | Columns stack; summary facts use a compact two-column definition list. Anchors wrap without hiding content. |
| News | Original Sinhala titles and archival dates replace the concept's English sample title; original photo dimensions are preserved without cropping poster content. |

Intentional deviations: real source copy, the existing shared header/footer, real images, a programme-specific fee section and the working enquiry form take precedence over fabricated sample content in concept images. No sample certificate programme or unrelated news story was added.

## Checks and remaining external dependencies

Local checks cover formatting, ESLint, TypeScript, unit contracts, production build, all legacy and new route statuses, canonicals, schema, internal links/fragments, legacy media, redirects, feed and sitemap. Edge checks cover mobile, tablet and desktop, all ten preselected programme enquiries, all six article bodies, category counts, fees anchors and disclosures. No enquiry, message or payment was sent.

This completes the public content implementation for the requested scope. It is not a live deployment or an assurance of search ranking. Publishing still requires hosting/domain configuration and a real public-origin check, ownership confirmation of analytics/conversion tags, and the campus's review of adapted policies and unverified degree specifications. Portal and certificate services remain external systems; payment processing and a new admissions backend were not requested or simulated. The public crawl does not substitute for a Search Console/backlink export or a complete WordPress backup.

### Final verification result

The optimized production build passed. The reproducible check `python3 scripts/verify-public-migration.py --report docs/research/local-verification.json` passed against the running production server: 29 HTML pages, all 27 legacy HTML decisions, three retired GET/HEAD contracts, 66 legacy assets, six newer guides, 38 redirects, six RSS items, canonical/OG/Twitter/schema checks, all internal page links and fragments, and four unknown-route 404 cases. The sitemap contains 27 indexable URLs. See [local-verification.json](local-verification.json).

Formatter, ESLint, TypeScript and all ten Bun tests passed (108 assertions). Edge rendered checks passed for every programme and article at 390px and 1440px, with one H1 and no horizontal overflow. All ten detail enquiries initially selected the correct programme. At 768px the category pages had six/four/zero/zero records with the intended index/noindex states; the Tamil detail had no overflow. Native disclosures, catalogue-to-detail links, Sinhala article navigation and fee anchors were checked. No external message or payment was sent.

The concepts and latest completed Edge captures were viewed together in the final fidelity review. Palette, typography, hero/sidebar composition, numbered content, real imagery, approved copy and responsive stacking follow the documented design, with the source-driven deviations listed above. Browser automation then became unresponsive during the final production screenshot pass. A 1024px concept-width recheck and final browser cleanup could not be confirmed after three tool timeouts. The completed rendered checks are from the development build; the optimized production build has the full HTTP verification above. The remaining known QA tab is Edge tab `1695698539`; its closure and final viewport reset could not be verified. User-owned browser activity was not closed.

The production server is intentionally left running at `http://localhost:3100/`. The detached launcher PID is recorded in `/tmp/sitc-campus-3100.pid`, with output in `/tmp/sitc-campus-3100.log`. The listener was verified on loopback port 3100. This keep-running exception was explicitly requested by the user.
