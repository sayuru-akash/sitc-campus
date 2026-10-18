# Verification

Verified against the supplied reference using the connected Edge browser on 2026-10-19.

## Rendered comparison

| Viewport | Recorded elements | Geometry differences over 0.1px |
| --- | --- | --- |
| Desktop, 1440 x 900 | 52 | 0 |
| Tablet, 768 x 1024 | 52 | 0 |
| Mobile, 390 x 844 | 52 | 0 |

Measured section containers, headers, headings, programme cards, and footer in document coordinates. This verifies recorded layout geometry, not literal pixel equality. Local images use Next.js optimization. Source and local full-page screenshots are in `../design-references/`.

Run `bun scripts/verify-layout.mjs` to compare the recorded JSON evidence. New changes require fresh browser captures.

## Browser checks

- Correct page title and meaningful initial content; no framework error overlay.
- No relevant browser console warnings or errors.
- All images loaded, no mobile horizontal overflow or clipped content.
- All programmes (10), diplomas (6), and degrees (4).
- Degree filter plus Psychology search returns one matching degree.
- Unmatched query displays the empty state; clearing search and filters restores results.
- Programme card selection updates the form's interest field.
- Native FAQ opens and displays the correct answer.
- Mobile menu opens, updates aria-expanded, and closes after navigation.
- Empty and whitespace-only names prevent enquiry submission.
- Valid submission composes the expected WhatsApp URL with programme, qualification, Unicode, and special characters.
- The WhatsApp handoff was intercepted locally during QA and the page reloaded afterward. No enquiry was transmitted.

## Project checks

- `bun run lint`: passes with zero warnings.
- `bun run typecheck`: passes.
- `bun test`: 2 tests pass, 8 assertions.
- `bun run build`: passes; home page statically prerendered.

## Handoff

The user requested that the local production preview remain running at http://localhost:3100. Research and QA tabs are closed; the user's pre-existing tabs are preserved. No public deployment or Git push was performed. Set NEXT_PUBLIC_SITE_URL to the intended public origin before deployment.
