# faq reference specification

## Markup and verbatim content

```html
<section class="section faq"><div><p class="eyebrow">A LITTLE CLARITY</p><h2>Before you<br><em>take the next step.</em></h2></div><div><details><summary>How do I choose the right programme?</summary><p>Tell our admissions team your highest qualification, subject interests and career goals. They can explain the available routes and entry requirements.</p></details><details><summary>Can I study while working?</summary><p>Study modes and class schedules vary by programme. Ask for the current timetable and attendance requirements before registering.</p></details><details><summary>How do I check recognition and awarding details?</summary><p>Request the exact qualification title, awarding institution, applicable recognition documentation and progression conditions for your selected programme.</p></details><details><summary>Where can I get the latest fees and intake dates?</summary><p>Contact admissions using the enquiry form below. The team can provide current fees, payment options and the next available intake.</p></details></div></section>
```

## Extracted styles

```css
.faq { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
details { border-bottom: 1px solid rgb(217, 207, 193); padding: 20px 0px; }
summary { cursor: pointer; font-size: 14px; font-weight: 600; }
details p { font-size: 13px; color: var(--muted); padding-top: 15px; margin-bottom: 0px; }
@media (max-width: 640px) {
  .top { font-size: 9px; }
  .top span { max-width: 210px; }
  header { height: 80px; }
  .brand img { width: 145px; }
  .menu { display: block; background: none; border: 0px; font-size: 24px; color: var(--wine); }
  nav { display: none; position: absolute; top: 117px; left: 0px; right: 0px; background: var(--cream); z-index: 5; padding: 25px; box-shadow: rgba(0, 0, 0, 0.067) 0px 8px 15px; }
  nav.open { display: flex; flex-direction: column; }
  .hero { grid-template-columns: 1fr; }
  .hero-copy { padding: 48px 7%; }
  h1 { font-size: 48px; }
  .intro { font-size: 14px; }
  .actions { flex-direction: row; gap: 17px; align-items: center; }
  .button { padding: 14px 17px; gap: 18px; font-size: 12px; }
  .text-link { font-size: 11px; }
  .hero-image { min-height: 370px; }
  .photo-note { bottom: 25px; left: 25px; }
  .photo-note strong { font-size: 30px; }
  .seal { height: 70px; width: 70px; font-size: 20px; }
  .ribbon { padding: 22px 7%; grid-template-columns: 1fr; gap: 15px; }
  .ribbon div { padding: 0px; border: 0px; }
  .ribbon b { font-size: 14px; }
  .ribbon span { display: none; }
  .section { padding: 60px 7%; }
  .section-head { display: block; }
  .section-head > p { max-width: 100%; }
  .filterbar { flex-direction: column; gap: 5px; padding-bottom: 15px; }
  .filters { gap: 22px; }
  .filters button { font-size: 12px; }
  #search { width: 100%; padding: 10px 0px; }
  .cards { grid-template-columns: 1fr; }
  .card { min-height: 230px; }
  .experience, .student, .faq, .enquire { grid-template-columns: 1fr; gap: 35px; padding: 50px 7%; }
  .steps { grid-template-columns: 1fr; gap: 20px; margin-top: 30px; }
  .steps p { max-width: 100%; }
  .pathway { text-align: left; }
  .student h2 { margin: 0px; }
  .enquire { margin: 0px 4% 55px; }
  .locations { grid-template-columns: 1fr 1fr; gap: 20px; padding-bottom: 50px; }
  .locations > div { grid-column: 1 / -1; }
  .locations h3 { margin-top: 0px; }
  .locations p { font-size: 12px; }
  footer { grid-template-columns: 1fr 1fr; }
  footer > div:last-of-type { grid-column: 1 / -1; }
  .sinhala { margin-top: 25px; }
}
```

## Responsive and interaction contract

See ../reference.css for the exact 900px and 640px media queries and ../BEHAVIORS.md for observed interactions.
