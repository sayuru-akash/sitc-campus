import { Eyebrow } from '@/components/ui/eyebrow';
import { site } from '@/content/site';
const resources = [{label:'Student portal',href:site.studentPortal},{label:'Certificate verification',href:site.certificateVerification},{label:'Academic direction partners',href:site.academicPartners}];
export function StudentResources() {
  return <section className="student" aria-labelledby="student-heading"><div><Eyebrow>ALREADY PART OF SITC?</Eyebrow><h2 id="student-heading">Your campus,<br /><em>one click away.</em></h2></div><div className="student-links">{resources.map(resource=><a key={resource.label} href={resource.href}>{resource.label} <span aria-hidden="true">↗</span></a>)}</div></section>;
}
