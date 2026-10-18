# enquiry reference specification

## Markup and verbatim content

```html
<section id="enquire" class="enquire"><div><p class="eyebrow">LET'S TALK ABOUT YOUR FUTURE</p><h2>Your next step<br>starts with<br><em>a conversation.</em></h2><p>Tell us what you would like to study. Continue on WhatsApp to speak with the SITC admissions team.</p><a href="tel:+94114532139">+94 11 453 2139</a><br><a href="mailto:info@sitc.lk">info@sitc.lk</a></div><form id="enquiry"><label>Your name<input id="name" required="" autocomplete="name" placeholder="Enter your full name"></label><label>I'm interested in<select id="interest"><option>Help me choose a programme</option><option>Psychology &amp; Counselling — Diploma</option><option>Information Technology — Diploma</option><option>Business Management — Diploma</option><option>HRM &amp; Administration — Diploma</option><option>English — Diploma</option><option>Tamil as a Second Language — Diploma</option><option>BSc in Psychology &amp; Counselling — Degree</option><option>BSc in HRM &amp; Business Strategy — Degree</option><option>BSc in Business Management — Degree</option><option>BA in English — Degree</option></select></label><label>Highest qualification<select id="qualification"><option>G.C.E. O/L</option><option>G.C.E. A/L</option><option>Diploma / Higher Diploma</option><option>Bachelor's degree</option><option>Other qualification</option></select></label><label>Anything you would like to ask? <span>(optional)</span><textarea id="message" rows="2" placeholder="Study mode, fees, entry requirements..."></textarea></label><button class="button" type="submit">Continue on WhatsApp ↗</button><p class="form-note">This opens WhatsApp with your enquiry ready to send. Your details are not stored on this website.</p></form></section>
```

## Extracted styles

```css
button, input, select, textarea { font: inherit; }
button, a, input, select, textarea { outline-offset: 5px; }
.card { background: rgb(255, 252, 246); border: 1px solid rgb(226, 219, 208); padding: 28px; position: relative; min-height: 260px; transition: transform 0.2s, box-shadow 0.2s; }
.card:hover { transform: translateY(-4px); box-shadow: rgba(48, 26, 23, 0.063) 0px 12px 25px; }
.enquire { margin: 0px 5% 80px; padding: 65px 6%; background: rgb(238, 229, 216); display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }
.enquire > div > p:not(.eyebrow) { color: var(--muted); font-size: 13px; max-width: 320px; }
.enquire > div > a { font-size: 14px; }
form label { display: block; font-size: 12px; margin-bottom: 20px; font-weight: 600; }
form label span { font-weight: 400; color: var(--muted); }
form input, form select, textarea { display: block; width: 100%; border-width: 0px 0px 1px; border-style: none none solid; border-color: currentcolor currentcolor rgb(185, 170, 153); border-image: none; border-radius: 0px; padding: 12px 0px; background: transparent; color: var(--dark); font-size: 13px; }
form .button { width: 100%; }
.form-note { font-size: 10px; color: var(--muted); margin: 12px 0px 0px; }
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
