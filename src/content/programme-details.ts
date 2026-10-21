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
  fees?: {
    standard: number;
    total: number;
    oneTime: number;
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
    verifiedCurriculum: false,
    overview:
      'Take a deeper academic interest in how people think, learn, develop and relate to one another. Psychology and counselling bring together evidence, reflection and ethical responsibility. Degree-level study can help you examine competing explanations of behaviour, evaluate research and consider how psychological knowledge is used in educational, organisational and community settings.',
    audience:
      'Prospective undergraduates and learners with relevant prior study in psychology or counselling. Admissions must confirm the available entry route, awarding university, duration, study mode and any recognition of previous learning for your application.',
    areas: [
      {
        title: 'Behaviour and Development',
        description:
          'Explore cognitive, biological, social and developmental perspectives on human behaviour.',
      },
      {
        title: 'Counselling Theory and Ethics',
        description:
          'Consider counselling relationships, ethical responsibilities, supervision and the limits of a professional role.',
      },
      {
        title: 'Research and Evidence',
        description:
          'Understand research questions, methods, data interpretation and the evaluation of psychological claims.',
      },
      {
        title: 'Wellbeing and Individual Differences',
        description:
          'Explore the relationship between personal circumstances, mental health, learning and wellbeing.',
      },
      {
        title: 'Applied Psychology',
        description:
          'Consider psychological ideas in education, organisations, families and communities.',
      },
      {
        title: 'Academic Inquiry',
        description:
          'Develop critical reading, argument, reflective writing and independent investigation.',
      },
    ],
    outcomes: [
      'Develop a more critical understanding of psychological evidence.',
      'Connect theory with ethical questions in applied settings.',
      'Plan further study with a clear understanding of professional training requirements.',
    ],
    progression:
      degreeProgression +
      ' A degree alone does not establish eligibility to practise as a clinical psychologist or an independently registered counsellor.',
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
