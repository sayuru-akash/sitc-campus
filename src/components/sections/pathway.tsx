import { Eyebrow } from '@/components/ui/eyebrow';
const steps = [
  {label:'01 / EXPLORE',title:'Find your field',description:'Choose the subject and qualification level that match your interests.'},
  {label:'02 / CONNECT',title:'Make a plan',description:'Confirm your eligibility, teaching medium, schedule and full fee structure.'},
  {label:'03 / BEGIN',title:'Start your next chapter',description:"Follow the admissions team's guidance to complete your registration."},
] as const;
export function Pathway() {
  return <section id="pathway" className="section pathway" aria-labelledby="pathway-heading"><Eyebrow>YOUR JOURNEY, ONE STEP AT A TIME</Eyebrow><h2 id="pathway-heading">A clear path <em>forward.</em></h2><div className="steps">{steps.map(step=><article key={step.label}><span>{step.label}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></section>;
}
