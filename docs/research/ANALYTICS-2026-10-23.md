# GA4 implementation

Implemented 23 October 2026. Stream name and URL: sitc.lk, https://sitc.lk/. Stream ID: `6667835243`. Measurement ID used for tagging: `G-P3FB2R96T9`. The numeric stream ID is an administrative identifier, not a gtag destination.

## Loading and pageviews

The shared root layout renders one `next/script` initializer using `afterInteractive`, with an asynchronous Google SDK request. The bootstrap checks the exact public hostname before initializing the data layer, setting up the property, or requesting Google. It is idempotent. It queues early events while the SDK downloads.

The build gate excludes development, Vercel previews and `PREVENT_INDEXING=true`. The runtime gate allows only `sitc.lk` and `www.sitc.lk`, preserving localhost and staging traffic outside this reporting stream. No package or secret/API credential is required.

The [published Google tag](https://www.googletagmanager.com/gtag/js?id=G-P3FB2R96T9) was fetched successfully on 23 October 2026. Its configuration reported `vtp_enablePageView: true` and `vtp_enableHistoryEvents: true`. Automatic scroll, download, outbound click, form and video measurement were also enabled. This verifies the published tag configuration rather than the private Analytics admin interface.

GA4 owns initial and history-based pageviews. There is no competing manual `page_view` effect. This follows [Next.js analytics guidance](https://nextjs.org/docs/app/guides/third-party-libraries#tracking-pageviews) and [Google's SPA guidance](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications). Preserve Enhanced Measurement history settings when editing the property.

## Custom event catalogue

| Event | Trigger | Parameters |
| --- | --- | --- |
| `contact_click` | Phone, email or WhatsApp link | `contact_method`, `placement` |
| `select_content` | Approved programme detail link | `content_type=programme`, `content_id`, `placement` |
| `programme_guide_click` | One of the six current local guides | `programme_id`, `placement` |
| `student_resource_click` | Student portal or certificate verification | `resource`, `placement` |
| `appointment_click` | Calendly link | `placement` |
| `location_map_click` | Campus map link | `placement` |
| `enquiry_handoff` | Validated enquiry prepares and opens WhatsApp | `programme_id`, `contact_method=whatsapp`, `placement=enquiry_form` |

Links use one delegated passive capture listener in the root, including client navigation. No event waits or callbacks delay navigation. Enquiry tracking runs after form validation and does not include the name, qualification, question or generated WhatsApp URL. An unknown programme is reported as `undecided`. Other custom events also use controlled IDs/categories rather than arbitrary link labels or destination query strings. Google owns its automatic enhanced events; `programme_guide_click` adds programme context without manually duplicating its `file_download` event.

`enquiry_handoff` is deliberately not called a completed registration, accepted application or delivered message. No revenue or fabricated conversion value is assigned. Analytics admins can use this event as a key event and register event-scoped dimensions such as `programme_id`, `placement`, `contact_method` and `resource` when configuring business reporting. No private admin settings were changed by this code task.

## Verification

- Production bootstrap executed in isolated unit fixtures for both supported hosts. It initializes exactly once, uses the supplied measurement ID and queues a click before the SDK arrives.
- Localhost, loopback, staging, Vercel and lookalike hostname fixtures load no Google SDK and create no data layer. Build environment exclusions are tested separately.
- Contact fixtures with names/messages in URL queries return only the controlled contact method and placement. Unknown programme input cannot become an arbitrary reporting value.
- The real enquiry event helper was exercised against the queued bootstrap and becomes inert when the fixture hostname changes to localhost.
- Formatting, ESLint, TypeScript, all 17 tests (213 assertions) and the production build passed.
- The HTTP migration check passed again for 30 HTML pages, 28 indexable routes, sharing metadata, structured data, legacy assets, guides and redirects. The initializer is present exactly once in each indexable page's built payload.
- Edge preview reloaded successfully with no captured application warnings/errors; the remaining logger warnings belonged to an installed browser extension. The local preview remains on port 3100.

No production deployment or real-user collection was performed. Live collection and Realtime/DebugView delivery can be confirmed once this build serves the public domain. Local tests intentionally do not send fake visits or enquiry events to the production property. The earlier Lighthouse report predates this analytics change and is not a measurement of the production Google SDK overhead.
