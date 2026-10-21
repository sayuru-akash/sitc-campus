// Source publication dates are preserved. New stories must include a matching article.
// Export once in date order so the homepage, archive and RSS agree on recency.
const stories = [
  {
    id: 20261019,
    title: 'Tamil diploma: November 2026 intake announced',
    date: '2026-10-19',
    href: 'https://sitc.lk/tamil-diploma-november-2026-intake/',
    image: '/images/inner/news-tamil-2026.jpg',
    imageRatio: 1,
    summary:
      'SITC has announced its November Tamil diploma intake, with six months of online learning for Sinhala-speaking beginners.',
    lang: 'en',
  },
  {
    id: 769,
    title: 'රට යන්න ඉන්න අයට ඉහළම සුදුසුකමක් SITC සරසවියෙන්',
    date: '2023-11-02',
    href: 'https://sitc.lk/%e0%b6%bb%e0%b6%a7-%e0%b6%ba%e0%b6%b1%e0%b7%8a%e0%b6%b1-%e0%b6%89%e0%b6%b1%e0%b7%8a%e0%b6%b1-%e0%b6%85%e0%b6%ba%e0%b6%a7-%e0%b6%89%e0%b7%84%e0%b7%85%e0%b6%b8-%e0%b7%83%e0%b7%94%e0%b6%af%e0%b7%94/',
    image: '/images/inner/news-769.jpg',
    imageRatio: 1,
    summary:
      'An announcement about international qualification pathways for SITC diploma graduates and opportunities for further study.',
    lang: 'si',
  },
  {
    id: 756,
    title:
      'මනෝවිද්‍යා අධ්‍යන අංශයේ විද්‍යාර්ථයින්ට ප්‍රායෝගික මනෝවිද්‍යා වැඩසටහනක්',
    date: '2023-10-22',
    href: 'https://sitc.lk/%e0%b6%b8%e0%b6%b1%e0%b7%9d%e0%b7%80%e0%b7%92%e0%b6%af%e0%b7%8a%e0%b6%ba%e0%b7%8f-%e0%b6%85%e0%b6%b0%e0%b7%8a%e0%b6%ba%e0%b6%b1-%e0%b6%85%e0%b6%82%e0%b7%81%e0%b6%ba%e0%b7%9a/',
    image: '/images/inner/news-756.jpg',
    summary:
      'Psychology students took part in a practical workshop at the Sithniwana mental health rehabilitation and counselling centre in Kalutara.',
    lang: 'si',
  },
  {
    id: 760,
    title: 'වාර්ෂික සිව්වන ඩිප්ලෝමා ප්‍රධානෝත්සවය සාර්ථකව අවසන්',
    date: '2023-09-17',
    href: 'https://sitc.lk/%e0%b7%80%e0%b7%8f%e0%b6%bb%e0%b7%8a%e0%b7%82%e0%b7%92%e0%b6%9a-%e0%b7%83%e0%b7%92%e0%b7%80%e0%b7%8a%e0%b7%80%e0%b6%b1-%e0%b6%a9%e0%b7%92%e0%b6%b4%e0%b7%8a%e0%b6%bd%e0%b7%9d%e0%b6%b8%e0%b7%8f/',
    image: '/images/inner/news-760.jpg',
    summary:
      'SITC celebrated its fourth annual diploma convocation at the Bandaranaike Memorial International Conference Hall in September 2023.',
    lang: 'si',
  },
  {
    id: 763,
    title: 'Malinda Alahakoon Recommends SITC Campus IT Diploma Program',
    date: '2023-08-22',
    href: 'https://sitc.lk/malinda-alahakoon-recommends-sitc-campus-it-diploma-program/',
    image: '/images/inner/news-763.png',
    imageRatio: 833 / 819,
    summary:
      'Technology educator and content creator Malinda Alahakoon shares his recommendation of the SITC Information Technology diploma.',
    lang: 'en',
  },
  {
    id: 766,
    title: 'වාර්ෂික තුන්වන ඩිප්ලෝමා ප්‍රධානෝත්සවය සාර්ථකව අවසන්',
    date: '2023-07-15',
    href: 'https://sitc.lk/%e0%b7%80%e0%b7%8f%e0%b6%bb%e0%b7%8a%e0%b7%82%e0%b7%92%e0%b6%9a-%e0%b6%ad%e0%b7%94%e0%b6%b1%e0%b7%8a%e0%b7%80%e0%b6%b1-%e0%b6%a9%e0%b7%92%e0%b6%b4%e0%b7%8a%e0%b6%bd%e0%b7%9d%e0%b6%b8%e0%b7%8f/',
    image: '/images/inner/news-766.jpg',
    summary:
      'A look back at the third annual diploma convocation, held at BMICH in July 2023.',
    lang: 'si',
  },
  {
    id: 772,
    title: 'කතිකාචාර්‍ය ඉසුරු පෙරේරා මහතා අධ්‍යාපන අධ්‍යක්ශක දූර‍යේ වැඩ භාරගනී',
    date: '2022-10-14',
    href: 'https://sitc.lk/%e0%b6%9a%e0%b6%ad%e0%b7%92%e0%b6%9a%e0%b7%8f%e0%b6%a0%e0%b7%8f%e0%b6%bb%e0%b7%8a%e0%b6%ba-%e0%b6%89%e0%b7%83%e0%b7%94%e0%b6%bb%e0%b7%94-%e0%b6%b4%e0%b7%99%e0%b6%bb%e0%b7%9a%e0%b6%bb%e0%b7%8f/',
    image: '/images/inner/news-772.jpg',
    imageRatio: 1145 / 1536,
    summary:
      'The campus welcomed lecturer Isuru Perera to the role of Director of Education in October 2022.',
    lang: 'si',
  },
] as const;

export const newsStories = [...stories].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const recentNews = newsStories.slice(0, 3);
