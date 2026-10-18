# experience reference specification

## Markup and verbatim content

```html
<section id="experience" class="experience"><div class="experience-title"><p class="eyebrow">THE SITC EXPERIENCE</p><h2>Education with<br><em>you at the centre.</em></h2><p>For the school leaver finding a direction. For the professional taking the next step. For everyone ready to keep growing.</p><a class="text-link" href="https://sitc.lk/about-us/">Get to know SITC ↗</a></div><div class="reasons"><article><span>01</span><div><h3>Learn with purpose</h3><p>Explore psychology, technology, business, languages and more, with a focus on knowledge you can carry forward.</p></div></article><article><span>02</span><div><h3>A pathway that fits your goals</h3><p>Discuss diploma, undergraduate and postgraduate options with an advisor who can help you plan your next step.</p></div></article><article><span>03</span><div><h3>Stay connected to your learning</h3><p>Access the SITC student portal and connect with the campus team for academic and administrative support.</p></div></article></div></section>
```

## Extracted styles

```css
.experience { background: var(--wine); color: rgb(255, 246, 232); padding: 90px 7%; display: grid; grid-template-columns: 1fr 1fr; gap: 100px; }
.experience em { color: rgb(214, 187, 145); }
.experience-title > p:not(.eyebrow) { color: rgb(218, 200, 202); max-width: 370px; font-size: 14px; }
.experience-title .text-link { display: inline-block; margin-top: 15px; }
.reasons article { display: flex; gap: 25px; border-bottom: 1px solid rgb(150, 97, 109); padding: 23px 0px; }
.reasons article:first-child { padding-top: 0px; }
.reasons article:last-child { border: 0px; }
.reasons article > span { color: rgb(201, 167, 123); font-family: Georgia; font-size: 23px; }
.reasons h3 { font-size: 18px; margin-bottom: 10px; }
.reasons p { font-size: 13px; color: rgb(218, 200, 202); margin-bottom: 0px; }
@media (max-width: 900px) {
  nav { gap: 17px; }
  .hero-copy { padding: 50px 7%; }
  .hero { min-height: auto; }
  h1 { font-size: 48px; }
  .actions { flex-direction: column; align-items: flex-start; }
  .cards { grid-template-columns: repeat(2, 1fr); }
  .experience { gap: 40px; }
  .hero-image { min-height: 570px; }
  .enquire { gap: 35px; }
}
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
