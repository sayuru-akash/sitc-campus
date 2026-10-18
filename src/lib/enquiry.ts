import { site } from '@/content/site';

export interface WhatsAppEnquiry {
  name: string;
  interest: string;
  qualification: string;
  message: string;
}

export function buildWhatsAppEnquiryUrl({
  name,
  interest,
  qualification,
  message,
}: WhatsAppEnquiry): string {
  const lines = [
    'Hello SITC admissions team, I would like to enquire about studying at SITC Campus.',
    '',
    `Name: ${name.trim()}`,
    `Programme: ${interest.trim() || 'Help me choose a programme'}`,
    `Highest qualification: ${qualification.trim()}`,
  ];

  if (message.trim()) lines.push('', `My question: ${message.trim()}`);

  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
}
