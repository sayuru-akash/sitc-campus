import { programmeDetails } from '@/content/programme-details';
import { programmePath, type ProgrammeId } from '@/content/programme-routes';
import { programmes } from '@/content/programmes';
import { contentPageSeo } from '@/lib/content-seo';

// Search titles may expand an abbreviation, while approved programme names stay intact.
const searchNames: Partial<Record<ProgrammeId, string>> = {
  'hrm-diploma': 'Diploma in Human Resource Management & Administration',
};
export function programmeSeo(id: ProgrammeId) {
  const programme = programmes.find((p) => p.id === id)!;
  const detail = programmeDetails[id];
  const title =
    searchNames[id] ??
    (programme.level === 'Diploma'
      ? `Diploma in ${programme.title}`
      : programme.title);
  const description = detail.verifiedCurriculum
    ? `${title} at SITC Campus, Sri Lanka. Explore the six-month online course, study areas, published fees, programme guide and admissions.`
    : `${title} at SITC Campus, Sri Lanka. Explore subject guidance, progression and admissions. Confirm the current course specification with SITC.`;
  const searchTitle = `${title} in Sri Lanka | SITC`;
  const metadata = contentPageSeo({
    title,
    description,
    path: programmePath(id),
  });
  return {
    ...metadata,
    title: { absolute: searchTitle },
    openGraph: { ...metadata.openGraph, title: searchTitle },
    twitter: { ...metadata.twitter, title: searchTitle },
  };
}
