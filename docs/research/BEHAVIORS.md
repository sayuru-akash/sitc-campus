# Observed reference behavior

- Header stays in normal document flow. Navigation uses smooth hash scrolling with 100px scroll padding. No reveal animation or scroll-driven content observed.
- Programme filters are click-driven: All (10), Diploma (6), Degree (4). Search filters the active category. Unmatched query displays the exact empty-state sentence.
- Programme pathway links select the matching interest in the enquiry form and scroll to #enquire.
- Cards move up 4px with a 0.2s transform/shadow transition on hover. Buttons darken and text links become gold.
- FAQs are independent native details/summary controls. Multiple answers may remain expanded.
- Form requires a name, defaults to programme advice and G.C.E. O/L, and composes a WhatsApp enquiry. No form data is persisted. QA must inspect the composed URL without sending a message.
- Mobile navigation toggles at <=640px. Source uses aria-expanded. Menu closes after a navigation selection.
- Layout breakpoints: 900px (2 card columns, narrower gaps); 640px (single column hero/cards/experience/pathway/FAQ/form; 2-column locations). Exact values in reference.css.
- Reference desktop captured at 1440x900, tablet at 768x1024, mobile at 390x844. Reference fonts are DM Sans and Playfair Display, locally downloaded from the source Google Fonts stylesheet.
- Reduced-motion setting disables smooth scrolling and transitions.
