# pathway reference specification

## Markup and verbatim content

```html
<section id="pathway" class="section pathway"><p class="eyebrow">YOUR JOURNEY, ONE STEP AT A TIME</p><h2>A clear path <em>forward.</em></h2><div class="steps"><article><span>01 / EXPLORE</span><h3>Find your field</h3><p>Choose the subject and qualification level that match your interests.</p></article><article><span>02 / CONNECT</span><h3>Make a plan</h3><p>Confirm your eligibility, teaching medium, schedule and full fee structure.</p></article><article><span>03 / BEGIN</span><h3>Start your next chapter</h3><p>Follow the admissions team's guidance to complete your registration.</p></article></div></section>
```

## Extracted styles

```css
.pathway { text-align: center; }
.steps { text-align: left; display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-top: 50px; }
.steps article { border-top: 1px solid rgb(186, 167, 143); padding-top: 25px; }
.steps span { color: var(--wine); font-size: 10px; letter-spacing: 1.5px; }
.steps h3 { margin: 18px 0px 12px; }
.steps p { color: var(--muted); font-size: 13px; max-width: 280px; }
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
