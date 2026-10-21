import type { CampusLocation } from '@/types/content';

export const site = {
  name: 'SITC Campus',
  email: 'info@sitc.lk',
  telephone: '+94 11 453 2139',
  telephoneHref: 'tel:+94114532139',
  whatsapp: '94715258653',
  whatsappLabel: '+94 71 525 8653',
  mainWebsite: 'https://sitc.lk/',
  studentPortal: 'https://portal.sitc.lk/',
  certificateVerification: 'https://verify.sitc.lk/',
  academicPartners: '/academic-direction-partner-institutes/',
  about: '/about-us/',
} as const;

export const navigation = [
  { label: 'Programmes', href: '/academic-programmes/' },
  { label: 'About', href: '/about-us/' },
  { label: 'Partners', href: '/academic-direction-partner-institutes/' },
  { label: 'News', href: '/news/' },
  { label: 'Contact', href: '/contact-us/' },
] as const;

export const locations = [
  {
    id: 'colombo',
    name: 'Colombo, Sri Lanka',
    label: 'Head office',
    locality: 'Colombo',
    country: 'LK',
    address: [
      'World Trade Center, Level 26',
      'East Tower, Colombo 01',
      'Sri Lanka',
    ],
    phones: [
      { label: '+94 11 453 2139', href: 'tel:+94114532139' },
      { label: '+94 11 759 8568', href: 'tel:+94117598568' },
    ],
    mapQuery: 'World Trade Center Colombo Sri Lanka',
  },
  {
    id: 'gampola',
    name: 'Gampola, Sri Lanka',
    label: 'Digital Affairs branch',
    locality: 'Gampola',
    country: 'LK',
    address: ['No. 285, Hospital Road', 'Gampola', 'Sri Lanka'],
    phones: [{ label: '+94 81 313 8993', href: 'tel:+94813138993' }],
    mapQuery: '285 Hospital Road Gampola Sri Lanka',
    appointment: 'https://calendly.com/sitcdigitalaffairbranch/schedule',
  },
  {
    id: 'uae',
    name: 'United Arab Emirates',
    label: 'Overseas branch',
    locality: 'Sharjah',
    country: 'AE',
    address: [
      'Al Majaz 2, Faya Business Park Tower',
      'Level 7, Office 704',
      'Sharjah, UAE',
    ],
    phones: [{ label: '+971 54 774 2498', href: 'tel:+971547742498' }],
    mapQuery: 'Faya Business Park Tower Al Majaz 2 Sharjah UAE',
    appointment: 'https://calendly.com/sitcuae/schedule',
  },
  {
    id: 'malaysia',
    name: 'Kuala Lumpur, Malaysia',
    label: 'Malaysia location',
    locality: 'Kuala Lumpur',
    country: 'MY',
    postalCode: '59200',
    address: [
      'The Gardens North Tower',
      'Mid Valley City',
      '59200 Kuala Lumpur',
      'Malaysia',
    ],
    phones: [],
    mapQuery:
      'The Gardens North Tower Mid Valley City 59200 Kuala Lumpur Malaysia',
  },
] as const satisfies readonly CampusLocation[];

export const supportChannels = [
  {
    label: 'Diploma admissions',
    number: '+94 71 525 8653',
    href: 'https://wa.me/94715258653',
    type: 'WhatsApp',
  },
  {
    label: 'Undergraduate admissions',
    number: '+94 77 216 2461',
    href: 'https://wa.me/94772162461',
    type: 'WhatsApp',
  },
  {
    label: 'Digital Affairs',
    number: '+94 81 316 4986',
    href: 'tel:+94813164986',
    type: 'Telephone',
  },
  {
    label: 'Digital Affairs',
    number: '+94 81 313 7618',
    href: 'tel:+94813137618',
    type: 'Telephone',
  },
] as const;

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/sitc.campus' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/school/sitc-campus/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@sitccampus' },
] as const;

export const footerLinks = {
  explore: [
    { label: 'About SITC', href: site.about },
    { label: 'Vice Chancellor', href: '/#leadership' },
    { label: 'Academic programmes', href: '/academic-programmes/' },
    { label: 'Academic partners', href: site.academicPartners },
    { label: 'News', href: '/news/' },
  ],
  students: [
    { label: 'Student portal', href: site.studentPortal },
    { label: 'Verify a certificate', href: site.certificateVerification },
    { label: 'Enquire about a programme', href: '/contact-us/#enquire' },
    { label: 'Contact SITC', href: '/contact-us/' },
  ],
  legal: [
    { label: 'Privacy policy', href: '/privacy-policy/' },
    { label: 'Refund policy', href: '/refund-policy/' },
    {
      label: 'Terms & conditions',
      href: '/terms-and-conditions/',
    },
  ],
} as const;
