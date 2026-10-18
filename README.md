# SITC Campus

A Next.js App Router and Tailwind CSS recreation of the supplied SITC Campus reference, with an expanded contact footer, trilingual branding, and the official campus video. Uses TypeScript, local fonts, optimized images, and small interactive client components. Most of the page is statically rendered on the server.

## Development

Requires Node.js 20.9+ and Bun. Install and run:

```sh
bun install
bun run dev
```

Open http://localhost:3000. Before deployment, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the real public origin.

```sh
bun run lint
bun run typecheck
bun test
bun run build
bun run start
```

## Editing the site

- `src/app/page.tsx`: section order and page assembly.
- `src/components/sections/`: individual page sections.
- `src/content/programmes.ts`: programme titles, descriptions, and qualification levels. Add a record to update both the explorer and the enquiry dropdown.
- `src/content/site.ts`: navigation, locations, admissions contact information, and external links.
- `src/content/faqs.ts`: FAQ questions and answers.
- `src/content/campus-video.ts`: verified YouTube ID, source segment, title, date, and duration.
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

## Campus video

The hero uses SITC General Convocation Trailer, YouTube video `Db7ALM2wM6g`, matching the official site's 77-to-268-second segment. The poster and page content render on the server. The YouTube API loads only after hydration, a short delay, browser idle time, and hero visibility. The player uses the privacy-enhanced host, starts muted and inline, and pauses outside the viewport or in a hidden tab. Reduced-motion and Save-Data preferences prevent automatic loading; the play button remains available. A failed player keeps the original poster and an external watch link.

Video metadata uses the verified public upload date and duration. Google may consider a decorative homepage video ineligible for video-rich results; adding schema does not guarantee video indexing. A production public origin is still required in `NEXT_PUBLIC_SITE_URL`.

The original clone measurement JSON and `scripts/verify-layout.mjs` are archived baseline evidence. They do not assert that the intentionally redesigned header and footer still match the original.

## Vice Chancellor

The leadership feature includes a portrait, a short introduction, an expandable full biography, dated research figures, and the complete welcome message. English, Sinhala, and Tamil content renders on the server. The shared language tabs support arrow keys, Home, and End. Sinhala and Tamil use locally hosted Noto Sans fonts with their licenses included.

The portrait is an exact visual crop of the user-supplied poster, using its original photograph without changing facial features or academic attire. The source and crop coordinates are documented in the component. The English welcome message is preserved as supplied, with Sinhala and Tamil translations. The biography and research figures were supplied by the user; the figures are explicitly dated 15 October 2026 and have not been independently verified. See `docs/research/LEADERSHIP-UPDATE.md` for source and implementation notes.
