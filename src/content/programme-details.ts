import type { ProgrammeId } from './programme-routes';

export type StudyArea = { title: string; description: string };
export type ProgrammeDetail = {
  overview: string;
  audience: string;
  areas: readonly StudyArea[];
  outcomes: readonly string[];
  progression: string;
  related: readonly ProgrammeId[];
  verifiedCurriculum: boolean;
  duration?: string;
  delivery?: string;
  medium?: string;
  schedule?: string;
  intake?: string;
  guide?: string;
  guideLabel?: string;
  durationIso?: string;
  entry?: string;
  qualification?: string;
  awardingBody?: string;
  curriculum?: readonly {
    title: string;
    note?: string;
    modules: readonly { code: string; title: string; credits: number }[];
  }[];
  programmeContact?: { label: string; href: string };
  fees?: {
    standard: number;
    total: number;
    oneTime?: number;
    discountLabel?: string;
    discount?: number;
    registration?: number;
    examination?: { perSubject: number; perSemester: number };
    installments?: readonly number[];
    note?: string;
  };
};
const guide = (name: string) => `/guides/${name}-2026.pdf`;
const standardFees = {
  standard: 48000,
  total: 24000,
  oneTime: 19000,
  installments: [6000, 6000, 6000, 6000],
} as const;
const diploma = {
  verifiedCurriculum: true,
  duration: '6 months',
  durationIso: 'P6M',
  delivery: 'Online via Zoom',
  medium: 'Sinhala',
} as const;
const degreeProgression =
  'Build a foundation for postgraduate study or professional development in your subject. Admission to further qualifications, professional registration and any credit exemptions depend on the receiving institution and its requirements.';

export const programmeDetails: Record<ProgrammeId, ProgrammeDetail> = {
  'psychology-diploma': {
    ...diploma,
    guide: guide('psychology'),
    guideLabel: 'September 2026 programme guide',
    fees: standardFees,
    overview:
      'Understand the relationship between thoughts, feelings and behaviour while exploring the foundations of ethical counselling. The published SITC curriculum moves from the counselling relationship and the human mind to educational, career, child and family contexts. It also introduces assessment, case information and approaches to psychological support. This is an academic introduction; independent clinical practice requires appropriate further training, supervision and professional requirements.',
    audience:
      'School leavers, university students and working adults with an interest in people, wellbeing, education or community support. SITC’s guide includes O/L and A/L learners and several work-experience routes. Admissions can assess your individual background.',
    areas: [
      {
        title: 'The counsellor and ethical practice',
        description:
          'The purpose of counselling, the counsellor’s role, professional ethics and the counselling environment.',
      },
      {
        title: 'Psychology and the human mind',
        description:
          'Origins of psychology and counselling, the human brain, behaviour, rational thinking and psychological theories.',
      },
      {
        title: 'Counselling across life contexts',
        description:
          'Educational, vocational, child and family counselling, including relationships and the needs of different learners.',
      },
      {
        title: 'Assessment and case information',
        description:
          'An introduction to client history, gathering information, assessment and planning psychological support.',
      },
      {
        title: 'Mental health awareness',
        description:
          'Study of mental health conditions, learning differences and the responsibilities and limits of a support role.',
      },
      {
        title: 'Counselling approaches and skills',
        description:
          'Behavioural and psychoanalytic ideas, relaxation approaches, therapeutic techniques and stages of skill development.',
      },
    ],
    outcomes: [
      'Recognise core psychological ideas and ethical boundaries.',
      'Discuss counselling needs across education, work and family settings.',
      'Prepare for further study with a clearer understanding of the field.',
    ],
    progression:
      'Explore the BSc in Psychology & Counselling as a possible next step. SITC’s published guide describes diploma-to-degree progression; eligibility, exemptions and the final awarding arrangements must be confirmed for your intake.',
    related: ['psychology-degree', 'hrm-diploma'],
  },
  'it-diploma': {
    ...diploma,
    guide: guide('it'),
    guideLabel: 'September 2026 programme guide',
    fees: standardFees,
    overview:
      'Build practical confidence with computers and the tools used in digital work. The current SITC guide combines computing fundamentals and office productivity with Python programming, current technology, communication and a capstone project. It is a starting point for learners who want to understand how digital systems work and apply that understanding to everyday tasks.',
    audience:
      'School leavers, university students, people changing careers and professionals who want a stronger foundation in computing. Discuss your prior learning, access to a computer and learning goals with admissions.',
    areas: [
      {
        title: 'Fundamentals of Computers',
        description:
          'ICT concepts, data, operating systems, internet and email, file management, hardware, memory, storage and networks.',
      },
      {
        title: 'Productivity and Collaborative Tools',
        description:
          'Word, Excel, PowerPoint, Access, cloud storage, online collaboration and practical document and spreadsheet tasks.',
      },
      {
        title: 'Current Topics in IT',
        description:
          'Artificial intelligence, IoT, cloud computing, cybersecurity awareness, e-commerce and digital transformation.',
      },
      {
        title: 'Principles of Program Design and Programming',
        description:
          'Flowcharts, pseudocode, Python, control structures, functions, files and introductory database work.',
      },
      {
        title: 'Mathematics and Statistics for Computing',
        description:
          'Logic, number systems, sets, algebra, data representation and introductory statistical methods.',
      },
      {
        title: 'Communication Skills',
        description:
          'Professional email, reports, presentations, teamwork and communication in IT and business settings.',
      },
      {
        title: 'Capstone Project',
        description:
          'Propose and develop a small practical solution or prototype, then present the outcome.',
      },
    ],
    outcomes: [
      'Use everyday digital and productivity tools with greater confidence.',
      'Explain core computing ideas and develop introductory Python solutions.',
      'Connect your learning through a small practical project.',
    ],
    progression:
      'Use this foundation to explore further computing qualifications or strengthen your digital skills at work. Admissions can explain the current computing progression arrangements and the entry requirements for further study.',
    related: ['business-diploma', 'english-diploma'],
  },
  'business-diploma': {
    ...diploma,
    guide: guide('business'),
    guideLabel: 'September 2026 programme guide',
    fees: standardFees,
    overview:
      'Explore how organisations make decisions, manage resources and respond to change. SITC’s published academic profile brings together management, economics, communication, accounting and people management, followed by applied business topics. The combination is useful for understanding the decisions behind day-to-day operations and the development of an enterprise.',
    audience:
      'School leavers, university students, administrative and executive staff, managers, entrepreneurs and people working in the public or private sector. Admissions reviews your qualifications and relevant experience.',
    areas: [
      {
        title: 'Principles of Management',
        description:
          'Planning, organising, leadership and control, and the use of management ideas in organisations.',
      },
      {
        title: 'Economics',
        description:
          'Microeconomics, markets and pricing, alongside macroeconomic topics such as inflation, employment and policy.',
      },
      {
        title: 'Business Communication',
        description:
          'Reports, presentations and digital communication for professional settings.',
      },
      {
        title: 'Mathematics, Statistics and Accounting',
        description:
          'Quantitative business analysis, bookkeeping and the preparation and interpretation of financial information.',
      },
      {
        title: 'People and Information Systems',
        description:
          'Human resource practices and the information systems that support business operations and decisions.',
      },
      {
        title: 'Marketing and Enterprise',
        description:
          'Marketing management, entrepreneurship, SME management and financial markets.',
      },
    ],
    outcomes: [
      'Understand the main functions of a business and how they connect.',
      'Use business language and basic analytical ideas more confidently.',
      'Explore further study or apply foundational knowledge in a workplace or small enterprise.',
    ],
    progression:
      'Consider the BSc in Business Management or discuss a related management pathway. Progression, exemptions and entry points depend on your results and the current degree specification.',
    related: ['business-degree', 'hrm-diploma'],
  },
  'hrm-diploma': {
    ...diploma,
    guide: guide('hrm'),
    guideLabel: 'August 2026 programme guide',
    fees: standardFees,
    overview:
      'Explore the practices that support people throughout their working lives. SITC’s academic profile covers management foundations, workforce planning, job design, recruitment, performance, training, employee wellbeing and employment relations. Administrative and information-management topics connect those practices with the daily work of an organisation.',
    audience:
      'Learners interested in HR, administration or people management, including school leavers, university students and working professionals. Share your educational background and experience with admissions for an individual entry assessment.',
    areas: [
      {
        title: 'Management and HR Foundations',
        description:
          'Management functions, leadership, business context, management thought and the role of human resources.',
      },
      {
        title: 'Workforce Planning and Recruitment',
        description:
          'Job design, job descriptions, workforce demand, attraction, selection, induction and onboarding.',
      },
      {
        title: 'Performance and Development',
        description:
          'Performance appraisal, training needs, employee development, motivation and managing employee movement.',
      },
      {
        title: 'Employee Relations and Wellbeing',
        description:
          'Welfare, grievances, discipline, occupational health, industrial psychology and industrial relations.',
      },
      {
        title: 'Administration and Information',
        description:
          'Communication, accounting fundamentals, organisational behaviour and HR information systems.',
      },
      {
        title: 'Sri Lankan Labour Law',
        description:
          'An introduction to the employment-law topics included in the published course profile.',
      },
    ],
    outcomes: [
      'Understand the employee lifecycle and the contribution of HR.',
      'Recognise practical HR and administrative processes.',
      'Build a foundation for further HR and management study.',
    ],
    progression:
      'Explore the BSc in HRM & Business Strategy or a related business pathway. Confirm current entry requirements, any exemptions and awarding arrangements with admissions.',
    related: ['hrm-degree', 'business-diploma'],
  },
  'english-diploma': {
    ...diploma,
    guide: guide('english'),
    guideLabel: 'June 2026 programme guide',
    fees: {
      standard: 36000,
      total: 18000,
      oneTime: 13000,
      installments: [6000, 6000, 6000],
    },
    overview:
      'Develop English for communication, further study and professional life. The published SITC guide includes language skills, literature, listening and speaking, workplace writing and soft-skill development. The aim is to connect knowledge of grammar and vocabulary with opportunities to use English in practical situations.',
    audience:
      'Learners completing A/L studies, university students, employees, managers and entrepreneurs who want to develop English for academic, workplace and everyday use. Admissions can help assess your starting level.',
    areas: [
      {
        title: 'English Language Skills',
        description:
          'Grammar, vocabulary, word classes, sentence construction and writing foundations.',
      },
      {
        title: 'Literature and Text Analysis',
        description:
          'Introduction to literature, literary forms, selected poetry, prose and drama, and critical appreciation.',
      },
      {
        title: 'Communication Skills',
        description:
          'Listening, speaking, questions, reported speech and practical language use.',
      },
      {
        title: 'Language in a Professional Context',
        description:
          'Business letters, reports, emails, proposals, CVs and professional vocabulary.',
      },
      {
        title: 'Soft Skill Development',
        description:
          'Group discussion, teamwork, interviews, presentations, public speaking and problem solving.',
      },
      {
        title: 'Language in Context and Special Purposes',
        description:
          'Contextual grammar, idioms, academic English, technical English and English for business.',
      },
    ],
    outcomes: [
      'Build confidence in listening, speaking, reading and writing.',
      'Prepare clearer written communication for study and work.',
      'Develop an introduction to literary reading and further English study.',
    ],
    progression:
      'Explore the BA in English as a further academic option. Entry and any credit recognition are assessed against the current degree requirements.',
    related: ['english-degree', 'tamil-diploma'],
  },
  'tamil-diploma': {
    ...diploma,
    medium: 'Tamil with Sinhala explanations',
    schedule: 'Wednesday and Sunday, 8:00 PM to 10:00 PM',
    intake: '26 November 2026, 8:00 PM',
    guide: guide('tamil'),
    guideLabel: 'November 2026 programme guide',
    fees: standardFees,
    overview:
      'Learn Tamil as an additional language through everyday communication. The current SITC guide is designed for Sinhala-speaking beginners and learners with limited prior Tamil. It combines the alphabet and pronunciation with listening, speaking, reading, writing, translation and practical situations in Sri Lanka’s multilingual communities.',
    audience:
      'Beginners and learners with limited Tamil, including school leavers, university students, teachers, public and private-sector employees and business owners. Prior fluency is not expected in the published beginner profile.',
    areas: [
      {
        title: 'Alphabet and Pronunciation',
        description: 'Tamil letters, sounds, pronunciation and handwriting.',
      },
      {
        title: 'Everyday Vocabulary',
        description:
          'Greetings, self-introduction, numbers, family and daily vocabulary.',
      },
      {
        title: 'Grammar Foundations',
        description:
          'Pronouns, nouns, verbs, tense patterns and sentence order.',
      },
      {
        title: 'Listening and Speaking',
        description:
          'Listening strategies, questions and answers, and spoken fluency.',
      },
      {
        title: 'Reading and Writing',
        description: 'Practical texts, short messages and paragraph writing.',
      },
      {
        title: 'Tamil in Everyday Services',
        description:
          'Communication in shopping, travel, work, hospitals, banks and public services.',
      },
      {
        title: 'Translation',
        description:
          'Meaning-based translation of signs, messages and short paragraphs.',
      },
      {
        title: 'Culture and Integrated Practice',
        description:
          'Selected texts, cultural context, presentations and an integrated project.',
      },
    ],
    outcomes: [
      'Use basic Tamil in common social and service situations.',
      'Read and write short practical messages.',
      'Develop cultural awareness alongside your language skills.',
    ],
    progression:
      'Continue developing Tamil through conversation, reading and workplace use. Admissions can advise on suitable further language study; no advanced Tamil qualification is currently listed in this catalogue.',
    related: ['english-diploma', 'english-degree'],
  },
  'psychology-degree': {
    verifiedCurriculum: true,
    guide: guide('psychology-degree'),
    guideLabel: 'October 2026 degree programme guide',
    duration: '3 academic years; 2 years with the published diploma exemption',
    durationIso: 'P3Y',
    delivery:
      'Online via Zoom, with monthly practical sessions after the first 6 months',
    medium: 'Sinhala and English mixed medium',
    intake: '6 December 2026, 8:00 PM (first lecture)',
    schedule:
      'Saturdays and Sundays, 7:00 PM to 10:00 PM (Sri Lanka time). The first lecture is at 8:00 PM on 6 December 2026. One weekend day per month is required for practical sessions after the first 6 months. The guide schedules completion for 24 December 2028, excludes Poya days and public holidays, and provides Zoom recordings when a class is missed.',
    entry:
      'The published diploma-entry route is for holders of a SITC Campus Diploma in Psychology and Counselling, a relevant SLQF Level 3 diploma, or a relevant one-year diploma with 30 credits. The guide describes a one-year exemption from the three-year degree, leaving two academic years of study. Submit your diploma and transcript for SITC to confirm eligibility and the exemption.',
    qualification:
      'Bachelor of Science in Psychology and Counselling (B.Sc. Psychol. & Couns.). The guide describes a 90-credit degree at SLQF Level 5, with 30 credits represented by the eligible diploma-entry stage.',
    awardingBody: 'PSB University (PSBU), as identified in the programme guide',
    programmeContact: {
      label: 'Programme WhatsApp: +94 77 245 2461',
      href: 'https://wa.me/94772452461',
    },
    fees: {
      standard: 398500,
      discount: 50500,
      total: 348000,
      discountLabel: 'Course fee after the published discount',
      registration: 20700,
      installments: Array.from({ length: 24 }, () => 14500),
      examination: { perSubject: 800, perSemester: 2400 },
      note: 'The Skill Development Scholarship plan lists registration separately from the discounted course fee. Examination fees are LKR 800 per subject, with three examinations per semester totalling LKR 2,400. Confirm payment dates and any other applicable charges for your intake before paying.',
    },
    overview:
      'Study human behaviour, psychological development and the principles of ethical counselling through the Bachelor of Science in Psychology and Counselling at SITC Campus. The published programme combines counselling theory and skills with health, educational, social, cognitive and organisational psychology. Psychological research methods and a final research dissertation support an evidence-based approach to the subject. The guide presents a three-year degree with a two-year study route for eligible diploma holders.',
    audience:
      'Diploma holders in psychology and counselling who want to progress to degree-level study, including working learners seeking weekend evening classes. The programme is relevant to interests in community support, student welfare, employee wellbeing and further psychological research.',
    areas: [
      {
        title: 'Year 1: Counselling foundations',
        description:
          'General, child and abnormal psychology alongside counselling theory, ethics, law and techniques. This is the stage represented by the published diploma exemption for eligible entrants.',
      },
      {
        title: 'Year 2: Psychological perspectives',
        description:
          'Health, positive, educational, social, counselling, cognitive and abnormal psychology.',
      },
      {
        title: 'Year 3: Application and research',
        description:
          'Sexual, developmental, organisational, behavioural and cross-cultural psychology, psychological therapies, research methods and a final dissertation.',
      },
    ],
    curriculum: [
      {
        title: 'Year 1, Semesters I & II',
        note: '30 credits. The guide describes a one-year exemption for eligible diploma holders.',
        modules: [
          { code: 'PC1301', title: 'Basic of Counselling', credits: 3 },
          { code: 'PC1502', title: 'General Psychology', credits: 5 },
          {
            code: 'PC1303',
            title: 'Child and Developmental Psychology - I',
            credits: 3,
          },
          { code: 'PC1404', title: 'Abnormal Psychology - I', credits: 4 },
          { code: 'PC1405', title: 'Theories of Counselling', credits: 4 },
          { code: 'PC1306', title: 'Counselling Ethics & Skills', credits: 3 },
          { code: 'PC1307', title: 'Counselling Law', credits: 3 },
          { code: 'PC1508', title: 'Techniques of Counselling', credits: 5 },
        ],
      },
      {
        title: 'Year 2, Semesters I & II',
        note: '30 credits.',
        modules: [
          { code: 'PC2301', title: 'Introduction to Psychology', credits: 3 },
          { code: 'PC2302', title: 'Health Psychology', credits: 3 },
          { code: 'PC2303', title: 'Positive Psychology', credits: 3 },
          { code: 'PC2504', title: 'Educational Psychology', credits: 5 },
          { code: 'PC2305', title: 'Social Psychology', credits: 3 },
          { code: 'PC2306', title: 'Counselling Psychology', credits: 3 },
          { code: 'PC2507', title: 'Cognitive Psychology', credits: 5 },
          { code: 'PC2508', title: 'Abnormal Psychology - II', credits: 5 },
        ],
      },
      {
        title: 'Year 3, Semesters I & II',
        note: '30 credits, including the 6-credit final research dissertation.',
        modules: [
          { code: 'PC3301', title: 'Sexual Psychology', credits: 3 },
          {
            code: 'PC3302',
            title: 'Child and Developmental Psychology - II',
            credits: 3,
          },
          {
            code: 'PC3403',
            title: 'Psychological Research Methods',
            credits: 4,
          },
          { code: 'PC3504', title: 'Organizational Psychology', credits: 5 },
          { code: 'PC3305', title: 'Behavioral Psychology', credits: 3 },
          { code: 'PC3306', title: 'Cross-Cultural Psychology', credits: 3 },
          {
            code: 'PC3307',
            title: 'Disorders and Psychological Therapies',
            credits: 3,
          },
          { code: 'PC3608', title: 'Final Research Dissertation', credits: 6 },
        ],
      },
    ],
    outcomes: [
      'Understand psychological perspectives on development, learning, wellbeing and behaviour.',
      'Develop listening, communication and counselling skills with attention to ethics, privacy and professional boundaries.',
      'Evaluate psychological evidence and develop research skills through research methods and a final dissertation.',
      'Connect academic learning with practical sessions and prepare for further study or relevant support roles.',
    ],
    progression:
      'Explore community and NGO support, student welfare, HR and employee wellbeing, research assistance and supervised counselling-support roles. The guide also outlines internships, placements, specialist development and postgraduate study in Psychology, Counselling, Social Work and related subjects. Further academic and professional routes depend on their entry requirements, relevant experience and supervised training. A degree alone does not establish eligibility to practise as a clinical psychologist or an independently registered counsellor.',
    related: ['psychology-diploma', 'hrm-degree'],
  },
  'hrm-degree': {
    verifiedCurriculum: false,
    overview:
      'Explore the relationship between people management and the direction of an organisation. This pathway connects an interest in recruitment, development and employee relations with wider questions about organisational performance, change and strategy. It suits learners who want to understand both the human and business sides of work.',
    audience:
      'Prospective undergraduates, HR and administrative professionals and learners with relevant diploma study. Ask admissions to assess your qualifications and confirm the awarding arrangements, duration, mode and any advanced entry.',
    areas: [
      {
        title: 'People Management',
        description:
          'Examine recruitment, learning, employee development, reward and performance as connected practices.',
      },
      {
        title: 'Business Strategy',
        description:
          'Consider organisational goals, competitive context, resource choices and strategic decision-making.',
      },
      {
        title: 'Work and Employment Relations',
        description:
          'Explore employee voice, organisational responsibilities and the changing context of employment.',
      },
      {
        title: 'Organisational Behaviour and Change',
        description:
          'Consider leadership, motivation, culture, teamwork and the experience of organisational change.',
      },
      {
        title: 'Evidence and People Decisions',
        description:
          'Explore how research, business information and people data can inform responsible decisions.',
      },
      {
        title: 'Professional Practice',
        description:
          'Develop analytical communication and consider ethical issues in people management.',
      },
    ],
    outcomes: [
      'Connect HR decisions with wider organisational goals.',
      'Evaluate people-management issues using evidence and context.',
      'Develop an informed direction for further professional learning.',
    ],
    progression: degreeProgression,
    related: ['hrm-diploma', 'business-degree'],
  },
  'business-degree': {
    verifiedCurriculum: false,
    overview:
      'Develop a broad academic view of management and business practice. Explore how organisations coordinate people, finance, operations and customers while responding to economic and social change. A management perspective helps connect individual decisions with the performance, responsibilities and longer-term direction of an organisation.',
    audience:
      'Prospective undergraduates, entrepreneurs, working professionals and learners with relevant business or management diplomas. Admissions assesses the route appropriate to your background and confirms the current programme specification.',
    areas: [
      {
        title: 'Management and Organisations',
        description:
          'Explore how organisations are structured, led and managed.',
      },
      {
        title: 'Markets and Customers',
        description:
          'Consider marketing, customer needs and the wider competitive environment.',
      },
      {
        title: 'Finance and Business Analysis',
        description:
          'Build an understanding of financial information, quantitative reasoning and decision-making.',
      },
      {
        title: 'Operations and Enterprise',
        description:
          'Examine the organisation of work, service delivery, enterprise and business development.',
      },
      {
        title: 'Strategy and Responsible Business',
        description:
          'Consider strategic choices, ethics, sustainability and organisational change.',
      },
      {
        title: 'Research and Professional Communication',
        description:
          'Develop critical inquiry, evidence-based argument and communication for business settings.',
      },
    ],
    outcomes: [
      'Understand how the main functions of a business interact.',
      'Examine business problems from more than one perspective.',
      'Build a foundation for professional development, enterprise or further study.',
    ],
    progression: degreeProgression,
    related: ['business-diploma', 'hrm-degree'],
  },
  'english-degree': {
    verifiedCurriculum: false,
    overview:
      'Explore English as language, literature and a means of understanding people and culture. This academic pathway invites close reading, clear writing and thoughtful interpretation. It offers a way to develop an interest in texts and communication while strengthening the habits of research, analysis and independent argument.',
    audience:
      'Prospective undergraduates and learners with a relevant background in English or language study. Admissions must confirm the language expectations, entry route, awarding university, duration and recognition of any previous diploma.',
    areas: [
      {
        title: 'Literary Reading',
        description:
          'Explore ways of reading poetry, prose and drama, with attention to form, language and interpretation.',
      },
      {
        title: 'Language and Communication',
        description:
          'Consider how English is structured and how meaning changes across contexts and audiences.',
      },
      {
        title: 'Texts and Cultural Contexts',
        description:
          'Examine the relationship between writing, history, identity and society.',
      },
      {
        title: 'Critical Approaches',
        description:
          'Compare interpretations and develop reasoned arguments about texts and language.',
      },
      {
        title: 'Academic and Professional Writing',
        description:
          'Develop precise expression, critical essays and communication for different purposes.',
      },
      {
        title: 'Research Skills',
        description:
          'Explore independent inquiry, responsible use of sources and the presentation of an extended argument.',
      },
    ],
    outcomes: [
      'Read and interpret texts with greater depth.',
      'Communicate complex ideas clearly in writing.',
      'Develop research habits that support further study and a range of communication roles.',
    ],
    progression:
      degreeProgression +
      ' Teaching appointments may require additional teaching qualifications or employer-specific requirements.',
    related: ['english-diploma', 'tamil-diploma'],
  },
};
