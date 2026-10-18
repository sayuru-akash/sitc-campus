# programmes reference specification

## Markup and verbatim content

```html
<section id="programmes" class="section"><div class="section-head"><div><p class="eyebrow">FIND YOUR DIRECTION</p><h2>Big ambitions.<br><em>The right starting point.</em></h2></div><p>Explore a field that inspires you. Our admissions team will help you confirm entry requirements, available intakes, fees, and awarding arrangements.</p></div><div class="filterbar"><div class="filters" aria-label="Programme level"><button class="active" data-filter="All">All programmes</button><button data-filter="Diploma">Diplomas</button><button data-filter="Degree">Degrees</button></div><input id="search" aria-label="Search programmes" placeholder="Search your interest ↗"></div><div id="cards" class="cards"><article class="card"><div class="card-top"><span>DIPLOMA</span><span>↗</span></div><h3>Psychology &amp; Counselling</h3><p>Explore human behaviour, wellbeing and the foundations of counselling.</p><a href="#enquire" data-title="Psychology &amp; Counselling — Diploma">Explore this pathway <span>→</span></a></article><article class="card"><div class="card-top"><span>DIPLOMA</span><span>↗</span></div><h3>Information Technology</h3><p>Build a foundation in computing and the digital world.</p><a href="#enquire" data-title="Information Technology — Diploma">Explore this pathway <span>→</span></a></article><article class="card"><div class="card-top"><span>DIPLOMA</span><span>↗</span></div><h3>Business Management</h3><p>Discover the principles that shape organisations and enterprise.</p><a href="#enquire" data-title="Business Management — Diploma">Explore this pathway <span>→</span></a></article><article class="card"><div class="card-top"><span>DIPLOMA</span><span>↗</span></div><h3>HRM &amp; Administration</h3><p>Develop your understanding of people, work and organisational practice.</p><a href="#enquire" data-title="HRM &amp; Administration — Diploma">Explore this pathway <span>→</span></a></article><article class="card"><div class="card-top"><span>DIPLOMA</span><span>↗</span></div><h3>English</h3><p>Strengthen your language skills for study, work and everyday communication.</p><a href="#enquire" data-title="English — Diploma">Explore this pathway <span>→</span></a></article><article class="card"><div class="card-top"><span>DIPLOMA</span><span>↗</span></div><h3>Tamil as a Second Language</h3><p>Connect with more people through language and cultural understanding.</p><a href="#enquire" data-title="Tamil as a Second Language — Diploma">Explore this pathway <span>→</span></a></article><article class="card"><div class="card-top"><span>DEGREE</span><span>↗</span></div><h3>BSc in Psychology &amp; Counselling</h3><p>Take the next academic step in psychology and counselling.</p><a href="#enquire" data-title="BSc in Psychology &amp; Counselling — Degree">Explore this pathway <span>→</span></a></article><article class="card"><div class="card-top"><span>DEGREE</span><span>↗</span></div><h3>BSc in HRM &amp; Business Strategy</h3><p>Explore people management alongside strategic business thinking.</p><a href="#enquire" data-title="BSc in HRM &amp; Business Strategy — Degree">Explore this pathway <span>→</span></a></article><article class="card"><div class="card-top"><span>DEGREE</span><span>↗</span></div><h3>BSc in Business Management</h3><p>Develop your knowledge of management and business practice.</p><a href="#enquire" data-title="BSc in Business Management — Degree">Explore this pathway <span>→</span></a></article><article class="card"><div class="card-top"><span>DEGREE</span><span>↗</span></div><h3>BA in English</h3><p>Explore undergraduate study in English.</p><a href="#enquire" data-title="BA in English — Degree">Explore this pathway <span>→</span></a></article></div><p id="empty" hidden="">No programmes match your search. Try another subject.</p><p class="programme-note">Programme availability and progression depend on entry qualifications and awarding-university requirements. Ask admissions for the current programme specification.</p></section>
```

## Extracted styles

```css
.section { padding: 95px 6%; }
.section-head { display: flex; justify-content: space-between; gap: 50px; align-items: flex-end; margin-bottom: 35px; }
.section-head > p { max-width: 350px; color: var(--muted); font-size: 13px; }
.filterbar { display: flex; justify-content: space-between; border-bottom: 1px solid rgb(217, 207, 193); margin: 20px 0px 30px; gap: 20px; }
.filters { display: flex; gap: 25px; }
.filters button { background: none; border-width: 0px 0px 2px; border-style: none none solid; border-color: currentcolor currentcolor transparent; border-image: none; padding: 15px 0px; color: var(--muted); font-size: 13px; }
.filters button.active { color: var(--wine); border-color: var(--wine); }
#search { background: none; border: 0px; width: 230px; font-size: 13px; }
.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.card { background: rgb(255, 252, 246); border: 1px solid rgb(226, 219, 208); padding: 28px; position: relative; min-height: 260px; transition: transform 0.2s, box-shadow 0.2s; }
.card:hover { transform: translateY(-4px); box-shadow: rgba(48, 26, 23, 0.063) 0px 12px 25px; }
.card .card-top { display: flex; justify-content: space-between; color: var(--wine); font-size: 10px; letter-spacing: 1.3px; margin-bottom: 30px; }
.card h3 { font: 25px / 1.25 "Playfair Display", Georgia, serif; max-width: 260px; }
.card p { color: var(--muted); font-size: 12px; margin-bottom: 25px; }
.card a { font-size: 12px; font-weight: 600; display: flex; justify-content: space-between; }
.programme-note { font-size: 11px; color: var(--muted); margin: 24px 0px 0px; }
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
