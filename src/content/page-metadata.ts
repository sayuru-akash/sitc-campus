// Public page identity captured from sitc.lk on 21 October 2026.
export const mainPageMetadata = {
  about: {
    path: '/about-us/',
    title: 'About Us - SITC Campus Sri Lanka',
    description:
      "Discover the rich history and academic excellence behind SITC Campus, Sri Lanka's premier higher education institute. Learn about our commitment to shaping the future through quality education and innovation.",
  },
  partners: {
    path: '/academic-direction-partner-institutes/',
    title: 'Academic Direction Partner Institutes - SITC Campus Sri Lanka',
    description:
      'Discover SITC Campus academic direction and partner institutes supporting recognised diploma, degree, master’s programmes in Sri Lanka.',
  },
  privacy: {
    path: '/privacy-policy/',
    title: 'Privacy Policy - SITC Campus Sri Lanka',
    description:
      'Your privacy is important to us. Read SITC Campus’s Privacy Policy to understand how we collect, use, and protect your information as you navigate and use our website.',
  },
  refund: {
    path: '/refund-policy/',
    title: 'Refund Policy - SITC Campus Sri Lanka',
    description:
      'Refund Policy Thank you for choosing SITC Campus for your academic journey. We are committed to delivering a high quality learning experience and maintaining transparent policies for all students. Eligibility for Refunds All programme fees, registration fees and administrative charges are generally non refundable once a student has enrolled. However, refunds may be considered under',
  },
  terms: {
    path: '/terms-and-conditions/',
    title: 'Terms and Conditions - SITC Campus Sri Lanka',
    description:
      'Review the Terms and Conditions for using the SITC Campus website. Learn about the guidelines and legal obligations that govern your access to and use of our online resources.',
  },
  news: {
    path: '/news/',
    title: 'News - SITC Campus Sri Lanka',
    description:
      "Read the latest news from SITC Campus, including updates on academic achievements, research breakthroughs, and community initiatives. Stay informed about what's happening on campus.",
  },
  programmes: {
    path: '/academic-programmes/',
    title: 'Academic Programmes - SITC Campus Sri Lanka',
    description:
      'Explore our wide range of academic programmes at SITC Campus, designed to empower students with the knowledge and skills for success. From undergraduate to postgraduate studies, find the perfect course for your future.',
  },
  contact: {
    path: '/contact-us/',
    title: 'Contact Us - SITC Campus Sri Lanka',
    description:
      'Get in touch with SITC Campus for inquiries about our programs, admissions, and support services. Find our contact details here to connect with our dedicated team ready to assist you.',
  },
} as const;
export type MainPageKey = keyof typeof mainPageMetadata;
