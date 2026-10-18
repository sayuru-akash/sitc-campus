# Vice Chancellor feature

## Content and image sources

- User supplied the Sinhala biography of Emeritus Professor Upali Samarajeewa and the full English welcome message.
- The English message is preserved in full. The profile summary, English biography, and Sinhala/Tamil translations derive from the supplied content.
- Google Scholar figures (1,598 citations, h-index 20, i10-index 33) are user-supplied figures as of 15 October 2026. They are presented with that date and were not independently verified.
- User supplied a 1583 x 2048 poster. Its original photograph is displayed through an overflow-clipped viewport at source coordinates x312, y433, width960, height1124. No generated face or invented signature is used.
- Sinhala and Tamil variable font subsets are from Google Fonts, with Noto Sans OFL licenses alongside the files.

## Structure

`src/content/leadership.ts` holds all copy and dated figures. `src/components/sections/leadership.tsx` renders the profile, full biography disclosure, and letter on the server. `src/components/leadership-languages.tsx` only handles tab selection and keyboard navigation. All three translations are included in the initial rendered document, each marked with its language and connected to an accessible tab.

The feature follows the existing cream, wine, gold, serif-heading design. It sits after the campus experience section and is linked from the footer. On small screens, the portrait, profile, and message stack vertically.

No external translation service is called at runtime. Update the three locale records together when changing approved copy.
