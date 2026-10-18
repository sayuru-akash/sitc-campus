# hero reference specification

## Markup and verbatim content

```html
<section class="hero"><div class="hero-copy"><p class="eyebrow">SITC CAMPUS · SRI LANKA</p><h1>Your ambition.<br>Our commitment.<br><em>A world of possibility.</em></h1><p class="intro">Take your next step with purpose. Discover education that connects your interests, your potential, and the future you want to create.</p><div class="actions"><a class="button" href="#programmes">Find your programme <span>↗</span></a><a class="text-link" href="#enquire">Talk to an advisor →</a></div><p class="sinhala">ඔබේ අනාගතයට නව ඇරඹුමක්.</p></div><div class="hero-image"><img src="assets/campus.jpg" alt="SITC Campus academic community"><div class="photo-note"><span>KNOWLEDGE. OPPORTUNITY. PROGRESS.</span><strong>Your next chapter<br>starts here.</strong></div><div class="seal">SITC<br><small>EST. 2005</small></div></div></section>
```

## Extracted styles

```css
.hero { display: grid; grid-template-columns: 1.05fr 1fr; min-height: 650px; }
.hero-copy { padding: 76px 8% 55px 9.5%; }
.intro { max-width: 460px; color: var(--muted); font-size: 16px; }
.actions { display: flex; align-items: center; gap: 24px; margin-top: 32px; }
.sinhala { margin: 34px 0px 0px; color: var(--muted); font-size: 14px; }
.hero-image { position: relative; overflow: hidden; min-height: 600px; background: rgb(111, 100, 87); }
.hero-image > img { height: 100%; width: 100%; position: absolute; object-fit: cover; object-position: center center; }
.hero-image::after { content: ""; position: absolute; inset: 0px; background: linear-gradient(transparent 35%, rgba(39, 27, 26, 0.8)); }
.photo-note { position: absolute; bottom: 40px; left: 40px; z-index: 1; color: white; }
.photo-note span { font-size: 9px; letter-spacing: 1.8px; }
.photo-note strong { font: 38px / 1.15 "Playfair Display", Georgia, serif; display: block; margin-top: 15px; }
.seal { position: absolute; right: 25px; top: 25px; border: 1px solid rgb(234, 215, 172); border-radius: 50%; height: 90px; width: 90px; display: flex; align-items: center; justify-content: center; flex-direction: column; background: rgba(100, 28, 46, 0.88); color: rgb(241, 221, 185); font-family: Georgia; font-size: 25px; }
.seal small { font: 8px Arial; letter-spacing: 2px; }
@media (min-width: 1500px) {
  main, header, .top, footer { padding-left: max(5%, -720px + 50vw); padding-right: max(5%, -720px + 50vw); }
  .hero-copy { padding-left: 0px; }
}
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
