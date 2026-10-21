# Main pages implementation

> Extended scope: programme details, all six article routes, archive decisions, sitemap/robots/feed and legacy assets are now implemented. See [Detail pages and migration](DETAIL-PAGES-MIGRATION.md) for current coverage. Statements below about deferred routes describe the earlier main-page stage.

## Delivered scope

Eight main routes now render locally on the existing public paths:

| Page | Route |
| --- | --- |
| About | `/about-us/` |
| Contact | `/contact-us/` |
| Academic programmes | `/academic-programmes/` |
| Academic direction partners | `/academic-direction-partner-institutes/` |
| News archive | `/news/` |
| Privacy policy | `/privacy-policy/` |
| Refund policy | `/refund-policy/` |
| Terms and conditions | `/terms-and-conditions/` |

The ten approved programmes in `src/content/programmes.ts` are unchanged: six diplomas and four degrees. File SHA-1 remains `3baf69b77b5023ebf28a97232fdd2b777552fe8e`. The same records power the homepage, catalogue, search, filters and enquiry dropdown. No other programmes, fees, intake dates or accreditation claims were added.

Shared server components provide the header, footer, page introduction, breadcrumb, policy layout and calls to action. Interactive components are limited to navigation, programme filtering and selection, the enquiry handoff and news filtering. All eight pages are prerendered by Next.js. Original images are served locally through Next Image; fonts remain local.

## Sources and content decisions

Public content was retrieved from the following SITC pages and WordPress public endpoints during this implementation:

- [About SITC](https://sitc.lk/about-us/): establishment year, vision, mission and five institutional values, condensed into readable copy.
- [Contact](https://sitc.lk/contact-us/): Colombo, Gampola and Sharjah addresses, phone numbers, email and social channels. The Kuala Lumpur address was supplied by the user. Existing verified appointment links are retained.
- [Academic direction partners](https://sitc.lk/academic-direction-partner-institutes/): seven partner names, original logos and concise descriptions. These entries do not introduce additional programme offerings.
- [News](https://sitc.lk/news/) and the public posts endpoint: all six published stories, original titles and dates (2022 and 2023), with concise summaries and authentic article images. Article links still open the original live SITC stories. They have not been rebuilt as local article pages.
- [Privacy](https://sitc.lk/privacy-policy/), [Refund](https://sitc.lk/refund-policy/), [Terms](https://sitc.lk/terms-and-conditions/): plain-language adaptations. Refund eligibility, exclusions, non-refundable fees, written withdrawal and 10 to 14 working-day approved processing period are preserved. Privacy explains the actual WhatsApp handoff and third-party services; unused legacy account/comment/payment features are not presented as implemented. The policy wording is adapted, not a verbatim legal migration, and needs the campus owner's review before public publication.

Genuine source assets live in `public/images/inner/`. About uses a campus graduation photograph. Seven partner logos retain their original artwork, with only display sizing and whitespace treatment. Six news images retain their original content. The supplied trilingual wordmark and supplied Vice Chancellor portrait remain intact. No AI-generated people or institutional marks are used in production.

The contact page offers telephone, email, maps, appointments and WhatsApp actions. There is no pretend form-delivery backend. Visitors choose whether to send the prepared WhatsApp message.

## SEO and removed routes

Every main page has its own title, description, canonical public URL, Open Graph and Twitter metadata, one H1, breadcrumb and WebPage structured data. Homepage metadata remains unchanged. Existing public paths and titles are retained. Three descriptions were improved: programmes now describes the approved ten offerings, partners avoids implying unlisted master's programmes, and refund replaces the old truncated 400-character excerpt. Localhost does not appear in public canonical or social identities. The existing preview noindex guard applies to the new pages.

Trailing slashes match the existing WordPress paths. Slashless main-page URLs receive a permanent 308 to their slash version.

`/academic-staff/` and `/events/` return **410 Gone**, including HEAD, with a helpful branded page and no redirect. Both are removed from navigation. There is no equivalent replacement, so redirecting them to an unrelated homepage would be misleading. They remain crawlable and return noindex; do not block these paths in robots.txt. Google's [HTTP status guidance](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes) explains that 4xx responses cause URLs to be removed from indexing over time. This does not promise immediate removal or imply that 410 works faster than 404.

This is a local main-page implementation, not a complete production domain replacement. Course detail URLs, programme-level archives, article routes, feeds, legacy media paths, analytics, robots and a complete sitemap still need the later migration decisions. The existing audit CSV remains the legacy URL inventory. No production site or DNS was changed.

## Design evidence and fidelity ledger

Concepts were inspected before implementation. These were layout studies, not content sources. Six concept files are under `/Users/sayuru/.codex/generated_images/01a15082-8d19-7590-a5d0-fcc9da378575/`:

| Page family | Concept |
| --- | --- |
| About | `exec-f08fba82-e796-46e9-97e6-e5a670a7b21d.png` |
| Contact | `exec-08b3350d-c9e6-44d6-aa9f-40f824196a36.png` |
| Programmes | `exec-2a806735-6d14-4a83-84b8-18a53aa17197.png` |
| Partners | `exec-e47f1924-3256-4e69-b350-986079a9e333.png` |
| News | `exec-0eb1f811-7f00-44fe-8647-b737db037ae3.png` |
| Policy | `exec-4599aae3-c753-48a0-9bc8-e24227d5d291.png` |

Rendered desktop, full-page and mobile evidence uses `main-{about,contact,programmes,partners,news,policy}-{desktop,full,mobile}.png` under `/Users/sayuru/.codex/visualizations/2026/10/18/01a15082-8d19-7590-a5d0-fcc9da378575/`. Privacy and terms also have mobile captures.

| Comparison point | Implemented result |
| --- | --- |
| Shared palette and typography | Cream background, burgundy Playfair headings, local DM Sans body, fine gold rules match the concept direction and existing homepage. |
| About composition | Two-column introduction and authentic graduation photo, vision/mission columns and five ruled values. Real photo replaces concept imagery. |
| Contact hierarchy | Clear introductory column and burgundy admissions panel, followed by four location columns and working contact actions. Invented concept addresses were rejected. |
| Programme browsing | Two-column flat cards on desktop, one column on mobile, qualification groups, search and counts. The ten approved records replace sample concept content. Card title width was corrected after rendered inspection. |
| Partner directory | Seven open ruled rows with original logos, roles and descriptions. Two logo canvases receive display-only whitespace treatment so their artwork is legible. |
| News layout | Featured story followed by a three-column archive, original dates and year filters. Genuine Sinhala titles and original posters replace concept sample text. |
| Policy readability | Desktop contents column and readable article measure, stacking cleanly on mobile. Policy tabs and anchor navigation work. |
| Mobile navigation | Shared header menu is isolated from breadcrumb/social/policy navigation. A rendered heading overlap was found and fixed by scoping the old mobile navigation selector. |

## Verification

- Formatter, ESLint, TypeScript, Bun tests and a production build are the local gates.
- Four Bun tests cover enquiry composition/validation and retirement response contracts (22 assertions).
- Edge rendered checks cover all eight routes at 390px, 768px and 1440px. No horizontal overflow; each has one H1. Header menu closes on Escape and returns focus.
- Programme filters return six diplomas/four degrees; search and empty state work. Selecting a programme fills the real enquiry dropdown and moves to the form. Empty-name submission is blocked by native validation.
- News filters return five 2023 stories and one 2022 story. Policy contents anchors and links between policies work.
- Development warnings for eager news imagery and smooth route scrolling were resolved before the final production build.
- No message, payment, admissions request or email was submitted during checks.
