export type PolicySection = {
  id: string;
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
};
export type Policy = {
  title: string;
  intro: string;
  sections: readonly PolicySection[];
};

// Plain-language policies based on the published SITC policies and this site's
// actual WhatsApp handoff. No payment or admissions system is implemented here.
export const policies = {
  privacy: {
    title: 'Privacy policy',
    intro: 'How information is handled when you explore SITC and get in touch.',
    sections: [
      {
        id: 'information',
        title: 'Information you share',
        paragraphs: [
          'When you contact SITC, the campus may receive your name, contact details, message and any attachments you provide.',
        ],
      },
      {
        id: 'enquiries',
        title: 'Website enquiries',
        paragraphs: [
          'The enquiry form prepares a WhatsApp message. Entries are not stored by this website. You choose whether to send the message in WhatsApp.',
        ],
      },
      {
        id: 'use',
        title: 'How information is used',
        paragraphs: [
          'SITC uses information to answer enquiries, support students, communicate about services, improve its website and prevent misuse.',
        ],
      },
      {
        id: 'technical',
        title: 'Technical information',
        paragraphs: [
          'Hosting services may process IP addresses, browser details, timestamps and referring pages to operate and protect the website.',
        ],
      },
      {
        id: 'services',
        title: 'Cookies and other services',
        paragraphs: [
          'YouTube, WhatsApp, maps, appointment services and student portals have their own privacy practices. Third-party services may use cookies. Manage cookies through your browser.',
        ],
      },
      {
        id: 'rights',
        title: 'Your information rights',
        paragraphs: [
          'Where applicable, you may request access, correction, erasure, restriction, objection or transfer of your data, and exercise CCPA rights. Contact SITC to make a request; the published response period is one month.',
        ],
      },
      {
        id: 'children',
        title: 'Children’s privacy',
        paragraphs: [
          'SITC does not knowingly collect personal information from children under 13. Parents or guardians should contact the campus about any concern.',
        ],
      },
      {
        id: 'updates',
        title: 'Policy updates',
        paragraphs: [
          'Changes are published on this page. Contact info@sitc.lk for privacy questions.',
        ],
      },
    ],
  },
  refund: {
    title: 'Refund policy',
    intro:
      'Clear information about withdrawals, eligibility and refund requests.',
    sections: [
      {
        id: 'eligibility',
        title: 'Eligibility',
        paragraphs: [
          'Programme payments are generally non-refundable after enrolment. Administration may consider requests before a programme begins, campus cancellations, duplicate payments or accidental overpayments.',
        ],
      },
      {
        id: 'exclusions',
        title: 'When refunds are not available',
        items: [
          'A change of mind after classes begin, non-attendance or incomplete coursework.',
          'Dismissal for academic dishonesty or disciplinary reasons.',
          'Cases where learning materials, digital resources or access credentials have already been supplied.',
        ],
      },
      {
        id: 'request',
        title: 'How to request a refund',
        paragraphs: [
          'Write to the administration office or info@sitc.lk. Each application is assessed individually. Approved payments return through the original payment method.',
        ],
      },
      {
        id: 'processing',
        title: 'Processing time',
        paragraphs: [
          'Approved refunds are processed within 10 to 14 working days. Your bank or payment provider may take longer to show the credit.',
        ],
      },
      {
        id: 'fees',
        title: 'Non-refundable fees',
        items: [
          'Registration and examination fees.',
          'Assessment and administration charges.',
          'External awarding-body or third-party certification payments.',
        ],
      },
      {
        id: 'withdrawal',
        title: 'Programme withdrawal',
        paragraphs: [
          'Notify SITC in writing. The date of your written notice is used when evaluating withdrawal and refund eligibility.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms and conditions',
    intro: 'The terms for using the SITC Campus website and its information.',
    sections: [
      {
        id: 'use',
        title: 'Using this website',
        paragraphs: [
          'Using this website means accepting these terms. If you disagree, discontinue use. These terms relate to the website; confirm programme requirements with admissions.',
        ],
      },
      {
        id: 'ownership',
        title: 'Content and ownership',
        paragraphs: [
          'SITC and its licensors retain intellectual property rights. Personal viewing is permitted; unauthorised republication, commercial licensing, copying or redistribution is prohibited.',
        ],
      },
      {
        id: 'linking',
        title: 'Links and branding',
        paragraphs: [
          'Links must not mislead visitors or imply an endorsement. Obtain permission before using SITC artwork or framing pages in a way that changes their presentation.',
        ],
      },
      {
        id: 'third-parties',
        title: 'Third-party services',
        paragraphs: [
          'Other websites and services have separate terms and privacy policies. SITC does not control their content. Read the privacy policy for cookie information.',
        ],
      },
      {
        id: 'content',
        title: 'Information and availability',
        paragraphs: [
          'Website information may change. Completeness, accuracy and continuous availability are not guaranteed. Contact SITC to report an unsuitable link or request clarification.',
        ],
      },
      {
        id: 'liability',
        title: 'Liability',
        paragraphs: [
          'Exclusions apply only where law permits. They do not remove liability for fraud, death or personal injury, or other liabilities that cannot lawfully be excluded.',
        ],
      },
      {
        id: 'changes',
        title: 'Changes and questions',
        paragraphs: [
          'SITC may revise these terms and request removal of links. Continued use follows the updated terms. Direct questions to info@sitc.lk.',
        ],
      },
    ],
  },
} as const satisfies Record<string, Policy>;
