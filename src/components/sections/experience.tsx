import { Eyebrow } from '@/components/ui/eyebrow';
import { site } from '@/content/site';
const reasons = [
  {title:'Learn with purpose', description:'Explore psychology, technology, business, languages and more, with a focus on knowledge you can carry forward.'},
  {title:'A pathway that fits your goals', description:'Discuss diploma, undergraduate and postgraduate options with an advisor who can help you plan your next step.'},
  {title:'Stay connected to your learning', description:'Access the SITC student portal and connect with the campus team for academic and administrative support.'},
] as const;
export function Experience() {
  return <section id="experience" className="experience" aria-labelledby="experience-heading">
    <div className="experience-title"><Eyebrow>THE SITC EXPERIENCE</Eyebrow><h2 id="experience-heading">Education with<br /><em>you at the centre.</em></h2><p>For the school leaver finding a direction. For the professional taking the next step. For everyone ready to keep growing.</p><a className="text-link" href={site.about}>Get to know SITC ↗</a></div>
    <div className="reasons">{reasons.map((reason,index) => <article key={reason.title}><span>{String(index+1).padStart(2,'0')}</span><div><h3>{reason.title}</h3><p>{reason.description}</p></div></article>)}</div>
  </section>;
}
