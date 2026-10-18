# SITC Campus

A faithful Next.js App Router and Tailwind CSS recreation of the supplied SITC Campus reference. Uses TypeScript, local fonts, optimized images, and small interactive client components. Most of the page is statically rendered on the server.

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
- `src/app/globals.css`: Tailwind theme, shared components, exact reference measurements, and responsive breakpoints (900px and 640px).
- `public/images/` and `public/fonts/`: original assets served locally.

`ProgrammeSelectionProvider` connects programme cards to the enquiry form, while server-rendered sections are passed as children. The form validates the name and opens a prefilled WhatsApp enquiry. No message is sent automatically, and the site does not store form submissions. There is no backend or database requirement.

## Reference and provenance

The visual reference was inspected in Edge, including desktop, tablet, mobile navigation, filters, search, empty results, FAQs, and programme selection. `docs/research/` contains extracted evidence and source links. `docs/design-references/` contains the original screenshots.

Official branding and Sri Lankan locations were verified against https://sitc.lk/. The UAE office is documented in `docs/research/SOURCES.md` but not added to the two-card reference layout. The certificate-verification link uses the official verification service. Font files come from the reference's DM Sans and Playfair Display Google Fonts stylesheet, with licenses in `public/fonts/`.
