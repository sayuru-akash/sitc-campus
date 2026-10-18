import Image from 'next/image';
import campus from '../../../public/images/campus.jpg';
import { ButtonLink } from '@/components/ui/button-link';
import { Eyebrow } from '@/components/ui/eyebrow';
export function Hero() {
  return <section className="hero" aria-labelledby="hero-heading">
    <div className="hero-copy">
      <Eyebrow>SITC CAMPUS · SRI LANKA</Eyebrow>
      <h1 id="hero-heading">Your ambition.<br />Our commitment.<br /><em>A world of possibility.</em></h1>
      <p className="intro">Take your next step with purpose. Discover education that connects your interests, your potential, and the future you want to create.</p>
      <div className="actions"><ButtonLink href="#programmes">Find your programme <span aria-hidden="true">↗</span></ButtonLink><a className="text-link" href="#enquire">Talk to an advisor →</a></div>
      <p className="sinhala" lang="si">ඔබේ අනාගතයට නව ඇරඹුමක්.</p>
    </div>
    <div className="hero-image">
      <Image src={campus} alt="SITC Campus academic community" fill sizes="(max-width: 640px) 100vw, 50vw" preload />
      <div className="photo-note"><span>KNOWLEDGE. OPPORTUNITY. PROGRESS.</span><strong>Your next chapter<br />starts here.</strong></div>
      <div className="seal" aria-label="SITC, established 2005">SITC<br /><small>EST. 2005</small></div>
    </div>
  </section>;
}
const highlights = [
  ['Since 2005', 'A commitment to education'],
  ['From diploma to degree', 'Explore your next academic step'],
  ['Local roots. Global outlook.', 'Learning beyond boundaries'],
] as const;
export function Highlights() {
  return <section className="ribbon" aria-label="SITC at a glance">{highlights.map(([title,description]) => <div key={title}><b>{title}</b><span>{description}</span></div>)}</section>;
}
