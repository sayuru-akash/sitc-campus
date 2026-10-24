import type { Programme } from '@/types/content';

export const programmes = [
  {
    id: 'psychology-diploma',
    title: 'Psychology & Counselling',
    level: 'Diploma',
    description:
      'Explore human behaviour, wellbeing and the foundations of counselling.',
  },
  {
    id: 'it-diploma',
    title: 'Information Technology',
    level: 'Diploma',
    description: 'Build a foundation in computing and the digital world.',
  },
  {
    id: 'business-diploma',
    title: 'Business Management',
    level: 'Diploma',
    description:
      'Discover the principles that shape organisations and enterprise.',
  },
  {
    id: 'hrm-diploma',
    title: 'HRM & Administration',
    level: 'Diploma',
    description:
      'Develop your understanding of people, work and organisational practice.',
  },
  {
    id: 'english-diploma',
    title: 'English',
    level: 'Diploma',
    description:
      'Strengthen your language skills for study, work and everyday communication.',
  },
  {
    id: 'tamil-diploma',
    title: 'Tamil',
    level: 'Diploma',
    description:
      'Connect with more people through language and cultural understanding.',
  },
  {
    id: 'psychology-degree',
    title: 'BSc in Psychology & Counselling',
    level: 'Degree',
    description: 'Take the next academic step in psychology and counselling.',
  },
  {
    id: 'hrm-degree',
    title: 'BSc in HRM & Business Strategy',
    level: 'Degree',
    description:
      'Explore people management alongside strategic business thinking.',
  },
  {
    id: 'business-degree',
    title: 'BSc in Business Management',
    level: 'Degree',
    description: 'Develop your knowledge of management and business practice.',
  },
  {
    id: 'english-degree',
    title: 'BA in English',
    level: 'Degree',
    description: 'Explore undergraduate study in English.',
  },
] as const satisfies readonly Programme[];
