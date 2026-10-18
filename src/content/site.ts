import type { CampusLocation } from '@/types/content';
export const site = {
  name: 'SITC Campus',
  email: 'info@sitc.lk',
  telephone: '+94 11 453 2139',
  telephoneHref: 'tel:+94114532139',
  whatsapp: '94715258653',
  mainWebsite: 'https://sitc.lk/',
  studentPortal: 'https://portal.sitc.lk/',
  certificateVerification: 'https://verify.sitc.lk/',
  academicPartners: 'https://sitc.lk/academic-direction-partner-institutes/',
  about: 'https://sitc.lk/about-us/',
} as const;
export const navigation = [
  { label: 'Programmes', href: '#programmes' },
  { label: 'Why SITC', href: '#experience' },
  { label: 'Your pathway', href: '#pathway' },
  { label: 'Contact', href: '#contact' },
] as const;
export const locations = [
  {id:'colombo', name:'Colombo', address:['World Trade Center','Level 26, East Tower','Colombo 01, Sri Lanka'], mapQuery:'World Trade Center Colombo'},
  {id:'gampola', name:'Gampola', address:['No. 285, Hospital Road','Gampola','Sri Lanka'], mapQuery:'285 Hospital Road Gampola'},
] as const satisfies readonly CampusLocation[];
