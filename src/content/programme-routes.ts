import type { ProgrammeLevel } from '@/types/content';

export const programmeSlugs = {
  'psychology-diploma': 'diploma-in-psychology-and-counseling',
  'it-diploma': 'diploma-in-information-technology',
  'business-diploma': 'diploma-in-business-management',
  'hrm-diploma': 'diploma-in-human-resource-management',
  'english-diploma':
    'diploma-in-english-2026-ugc-recognized-university-diploma',
  'tamil-diploma': 'diploma-in-tamil-as-a-second-language',
  'psychology-degree': 'bsc-in-psychology-and-counselling',
  'hrm-degree': 'bsc-in-hrm-and-business-strategy',
  'business-degree': 'bsc-in-business-management',
  'english-degree': 'ba-in-english',
} as const;
export type ProgrammeId = keyof typeof programmeSlugs;
export const programmePath = (id: ProgrammeId) =>
  `/program/${programmeSlugs[id]}/`;
export const programmeLevelPath = (level: ProgrammeLevel) =>
  `/program-level/${level === 'Diploma' ? 'diploma' : 'undergraduate'}/`;

// Add a future level here, then its programme records when an offering is approved.
// Empty levels stay accessible but noindex and outside the sitemap.
export const programmeLevels = [
  {
    slug: 'diploma',
    title: 'Diploma programmes',
    level: 'Diploma',
    intro:
      'Build a foundation in a subject you care about, with diploma pathways across people, business, technology and languages.',
  },
  {
    slug: 'undergraduate',
    title: 'Undergraduate programmes',
    level: 'Degree',
    intro:
      'Take your learning further with degree pathways in psychology, human resources, business and English.',
  },
  {
    slug: 'specialized-masters',
    title: 'Specialized master’s programmes',
    level: null,
    intro:
      'Explore your next academic step with guidance from the SITC admissions team.',
  },
  {
    slug: 'ph-d',
    title: 'Doctoral programmes',
    level: null,
    intro:
      'Discuss your research interests and longer-term academic plans with SITC.',
  },
] as const;
