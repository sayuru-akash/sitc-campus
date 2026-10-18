# Header, footer, and video update

Sources refreshed on 2026-10-19:

- https://sitc.lk/
- https://sitc.lk/contact-us/
- https://www.youtube.com/watch?v=Db7ALM2wM6g
- https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=Db7ALM2wM6g&format=json
- https://developers.google.com/youtube/player_parameters
- https://developers.google.com/search/docs/appearance/video

## Contact reconciliation

The official home page lists Colombo at World Trade Center, Level 26, East Tower, Colombo 01, with +94 11 759 8568. The contact page and footer use +94 11 453 2139. Both numbers are retained in the Colombo footer entry.

The Gampola office is No. 285, Hospital Road, with +94 81 313 8993. The separate official support-channel list also publishes +94 81 316 4986 and +94 81 313 7618. All three are preserved with their source roles.

The official site titles its UAE office Dubai but gives its address as Al Majaz 2, Faya Business Park Tower, Level 7, Office 704, Sharjah, UAE. The new footer uses United Arab Emirates and preserves the Sharjah address. Its telephone is +971 54 774 2498. Source appointment links for Gampola and the UAE are retained.

Admissions channels: diploma +94 71 525 8653 (WhatsApp); undergraduate +94 77 216 2461 (WhatsApp). General enquiries: info@sitc.lk and +94 11 453 2139.

Official Facebook, LinkedIn, YouTube, student portal, certificate verification, academic, news, events, and policy links are included. Locations now live inside the footer, avoiding a duplicated location section.

## Branding

The supplied transparent trilingual image is saved unaltered as `public/images/sitc-wordmark.png`, 1697 x 271. Header width is capped at 420px on desktop and adapts to small screens. An attempted image-generated white variant was rejected because it altered fine lettering. The production footer uses the exact original with `filter: brightness(0) invert(1)`, preserving the original alpha and all glyph shapes.

The top location wording was removed at the user's request. The student portal utility link is retained.

## Video and structured metadata

The official site's Elementor hero configuration specifies YouTube video `Db7ALM2wM6g`, starting at 77 seconds and ending at 268. YouTube's oEmbed title is SITC General Convocation Trailer, by SITC Campus. Public player metadata reports upload date 2023-10-04T17:44:09-07:00 and length 278 seconds. These verified values supply the VideoObject metadata.

The local implementation uses the YouTube IFrame API on youtube-nocookie.com, deferred until after the initial render and hero visibility. It starts muted, plays inline, pauses when off-screen or when the document is hidden, and exposes pause/play and sound controls. Reduced motion and Save-Data prevent automatic loading. The local poster remains visible until actual playback begins; load failures retain the poster and watch link.

EducationalOrganization and VideoObject JSON-LD use central contact/video content. Schema does not guarantee video-rich results, particularly because this is a decorative homepage video.

## Verification

- Production build, lint, TypeScript, and existing enquiry tests pass.
- In-app browser: actual embedded video observed playing at time 106.7s, muted=true, paused=false, readyState=4. Clicking Pause changed paused=true; resume restored playback.
- Edge's automated session held the YouTube document response pending, so playback was cross-checked successfully in the in-app browser.
- Responsive header/footer, contact links, mobile menu, off-screen pausing, and metadata are checked before handoff.
- Local preview remains running at http://localhost:3100 as requested.

## User-supplied Malaysia location

Added at the user's direct request: The Gardens North Tower, Mid Valley City, 59200 Kuala Lumpur, Malaysia. The footer and EducationalOrganization address metadata use this exact address, country MY, and postal code 59200. No phone number, appointment link, or office designation has been invented. The Malaysia map link uses the full supplied address.
