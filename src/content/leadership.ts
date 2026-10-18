export const leadershipLocales = ['en', 'si', 'ta'] as const;
export type LeadershipLocale = (typeof leadershipLocales)[number];
export const leadershipLanguageLabels = {
  en: 'English',
  si: 'සිංහල',
  ta: 'தமிழ்',
} as const;

export interface LeadershipCopy {
  sectionLabel: string;
  heading: string;
  headingEmphasis: string;
  name: string;
  honorific: string;
  personName: string;
  role: string;
  summary: readonly string[];
  biographyLabel: string;
  biography: readonly string[];
  citationsLabel: string;
  researchDate: string;
  messageHeading: string;
  quote: string;
  salutation: string;
  message: readonly string[];
  institution: string;
  country: string;
  portraitAlt: string;
}

export const leadershipResearch = {
  citations: '1,598',
  hIndex: '20',
  i10Index: '33',
  asOf: '2026-10-15',
} as const;

export const leadershipCopy = {
  en: {
    sectionLabel: 'Academic leadership',
    heading: 'Meet our',
    headingEmphasis: 'Vice Chancellor.',
    name: 'Emeritus Professor Upali Samarajeewa',
    honorific: 'Emeritus Professor',
    personName: 'Upali Samarajeewa',
    role: 'Vice Chancellor',
    summary: [
      'Emeritus Professor Upali Samarajeewa brings over five decades of experience in higher education, scientific research and professional service to his leadership of SITC Campus.',
      'A Chemistry graduate and PhD holder in Microbiology from the University of Peradeniya, he has helped shape food science education, served national scientific institutions and contributed to international research and consultancy across 30 countries.',
    ],
    biographyLabel: 'Explore his academic journey',
    biography: [
      'Marking a significant new chapter in the campus’s academic journey, Vice Chancellor Emeritus Professor Upali Samarajeewa is a distinguished senior scholar with over five decades of experience in higher education, scientific research and professional service in Sri Lanka.',
      'He obtained his first Bachelor of Science degree in Chemistry from the University of Peradeniya and later earned a PhD in Microbiology from the same university. He has been elected a Fellow of the International Academy of Food Science and Technology (IAFoST) and holds honorary membership in several leading scientific and professional institutions in Sri Lanka.',
      'He played a pioneering role in establishing the Department of Food Science and Technology at the University of Peradeniya and served as its founding Head. He also made a significant contribution to developing the university’s four-year Food Science and Technology degree programme.',
      'He has served as a member of the University of Peradeniya Council, as a board member of the Industrial Technology Institute (ITI) and the Sri Lanka Standards Institution (SLSI), and as the founding President of the governing body of the Sri Lanka Institute of Food Science and Technology.',
      'His international academic and research appointments include a UNDP Research Fellowship in London, a Fulbright-Hays Senior Research Fellowship and an adjunct professorship in the United States, and a professorship at the University of Wisconsin-River Falls.',
      'Through international consultancy in 30 countries, he has also made extensive contributions to the development of international quality management systems.',
      'His research and scientific contributions have been recognised through numerous awards, including the Most Outstanding Research Contribution to Sri Lankan Science Award, the Institute of Chemistry Gold Medal, the National Award for Agriculture Research, and the Sri Lanka National Science & Technology Award.',
      'As of 15 October 2026, his scientific work had recorded 1,598 Google Scholar citations, an h-index of 20 and an i10-index of 33, reflecting the lasting influence of his research.',
      'Under his leadership, SITC Campus looks forward to further strengthening academic quality, research, quality assurance, international relationships and institutional development.',
      'The academic and non-academic staff, lecturers, students and graduates warmly welcome the Vice Chancellor and extend their sincere best wishes.',
    ],
    citationsLabel: 'Citations',
    researchDate: 'Google Scholar, as of 15 October 2026',
    messageHeading: 'Message from the Vice Chancellor',
    quote:
      'At SITC Campus, we regard your success as our greatest achievement.',
    salutation: 'Dear Students,',
    message: [
      'Education is one of the most powerful forces in shaping not only individual lives but also the future of our society. It opens doors to opportunity, strengthens character and equips us with the knowledge, confidence and wisdom to make a meaningful difference in the world.',
      'It is with great pleasure that I welcome you to SITC Campus, where we believe that true education extends far beyond examinations, classrooms and academic qualifications. Our vision is to nurture knowledgeable, responsible and forward-thinking individuals who are prepared to meet the challenges of an increasingly competitive and interconnected world.',
      'As you embark on your academic journey, I encourage you to embrace every opportunity to learn, question, innovate and grow. Academic excellence is important, but equally valuable are integrity, discipline, critical thinking, leadership and a genuine commitment to lifelong learning. These qualities will distinguish you not only in your chosen professions but also in your contributions to society.',
      'The world around us is evolving rapidly, and the future belongs to those who are willing to adapt, think independently and transform knowledge into meaningful action. I urge each of you to pursue your ambitions with determination, uphold the highest ethical standards and never underestimate your potential to create positive change.',
      'At SITC Campus, we regard your success as our greatest achievement. May your time with us be a period of intellectual discovery, personal development and lasting accomplishment.',
      'I extend my sincere best wishes to every student for a rewarding academic journey and a future filled with purpose, achievement and success.',
    ],
    institution: 'Science and Information Technology Campus (SITC)',
    country: 'Sri Lanka',
    portraitAlt:
      'Emeritus Professor Upali Samarajeewa, Vice Chancellor of SITC Campus, in academic regalia',
  },
  si: {
    sectionLabel: 'අධ්‍යයන නායකත්වය',
    heading: 'ගරු',
    headingEmphasis: 'උපකුලපතිතුමා',
    name: 'සම්මානිත මහාචාර්ය උපාලි සමරජීව මහතා',
    honorific: 'සම්මානිත මහාචාර්ය',
    personName: 'උපාලි සමරජීව මහතා',
    role: 'උපකුලපති',
    summary: [
      'සම්මානිත මහාචාර්ය උපාලි සමරජීව මහතා උසස් අධ්‍යාපනය, විද්‍යාත්මක පර්යේෂණ සහ වෘත්තීය සේවය පිළිබඳ දශක පහකට අධික අත්දැකීම් සමඟ SITC සරසවියේ නායකත්වය දරයි.',
      'පේරාදෙණිය විශ්වවිද්‍යාලයෙන් රසායන විද්‍යාව පිළිබඳ ප්‍රථම උපාධිය සහ ක්ෂුද්‍රජීව විද්‍යාව පිළිබඳ ආචාර්ය උපාධිය හිමිකරගත් එතුමා ආහාර විද්‍යා අධ්‍යාපනය, ජාතික විද්‍යාත්මක ආයතන සහ රටවල් 30ක ජාත්‍යන්තර පර්යේෂණ හා උපදේශන කටයුතු සඳහා සුවිශේෂී දායකත්වයක් ලබාදී ඇත.',
    ],
    biographyLabel: 'එතුමාගේ අධ්‍යයන ගමන්මඟ පිළිබඳ වැඩිදුර කියවන්න',
    biography: [
      'සරසවියේ අධ්‍යයන ගමන්මඟේ සුවිශේෂී නව පරිච්ඡේදයක් සනිටුහන් කරමින්, උපකුලපති, සම්මානිත මහාචාර්ය උපාලි සමරජීව මහතා ශ්‍රී ලංකාවේ උසස් අධ්‍යාපන, විද්‍යාත්මක පර්යේෂණ සහ වෘත්තීය ක්ෂේත්‍රයන්හි දශක පහකට අධික අත්දැකීම් සහිත කීර්තිමත් ජ්‍යෙෂ්ඨ විද්වතෙකි.',
      'පේරාදෙණිය විශ්වවිද්‍යාලයෙන් රසායන විද්‍යාව පිළිබඳ තම ප්‍රථම විද්‍යාවේදි උපාධිය ලබාගත් එතුමා, පසුව පේරාදෙණිය විශ්වවිද්‍යාලයෙන් ක්ෂුද්‍රජීව විද්‍යාව (Microbiology) පිළිබඳ ආචාර්ය උපාධිය (PhD) හිමිකරගෙන ඇත. ඒ මහතා International Academy of Food Science and Technology (IAFoST) හි Fellowවරයෙකු ලෙසද තේරී පත්වී ඇති අතර, ශ්‍රී ලංකාවේ ප්‍රමුඛ විද්‍යාත්මක හා වෘත්තීය ආයතන කිහිපයකම ගෞරවයනීය සාමාජිකත්වය හිමිකරගෙන ඇත.',
      'තවද පේරාදෙණිය විශ්වවිද්‍යාලයේ Food Science and Technology දෙපාර්තමේන්තුව ස්ථාපිත කිරීමේ පුරෝගාමී මෙහෙවර සිදුකරමින් එහි ආරම්භක අංශ ප්‍රධානියා ලෙසද එතුමා කටයුතු කර ඇත. එමෙන්ම පේරාදෙණිය විශ්වවිද්‍යාලයේ Food Science and Technology සිව් අවුරුදු උපාධි වැඩසටහන සංවර්ධනය කිරීමටද එතුමා සුවිශේෂී දායකත්වයක් ලබාදී ඇත.',
      'එතුමා පේරාදෙණිය විශ්වවිද්‍යාල කවුන්සිලයේ සාමාජිකයෙකු ලෙසත් Industrial Technology Institute (ITI) සහ Sri Lanka Standards Institution (SLSI) යන ආයතනවල පාලක මණ්ඩල සාමාජිකයෙකු ලෙසත් Sri Lanka Institute of Food Science and Technology හි පාලක මණ්ඩලයේ ආරම්භක සභාපතිවරයා ලෙසද සේවය කර ඇත.',
      'එතුමා ලන්ඩනයේ UNDP Research අධිසාමාජික ලෙසත්, ඇමරිකා එක්සත් ජනපදයේ Fulbright - Hays Senior Research Fellow සහ අනුබද්ධිත මහාචාර්යවරයෙකු ලෙසත්, University of Wisconsin - River Falls හි මහාචාර්යවරයෙකු ලෙසත් ජාත්‍යන්තර අධ්‍යයන හා පර්යේෂණ කටයුතුවල නිරත වී ඇත.',
      'එමෙන්ම රටවල් 30ක ජාත්‍යන්තර උපදේශන කටයුතු සිදුකරමින් ජාත්‍යන්තර තත්ත්ව කළමනාකරණ පද්ධති සංවර්ධනය සඳහාද පුළුල් දායකත්වයක් ලබාදී ඇත.',
      'එතුමාගේ විශිෂ්ට පර්යේෂණ හා විද්‍යාත්මක දායකත්වය වෙනුවෙන් Most Outstanding Research Contribution to Sri Lankan Science Award, Institute of Chemistry Gold Medal, National Award for Agriculture Research, Sri Lanka National Science & Technology Award ඇතුළු සම්මාන රැසකින් පිදුම් ලබා ඇත.',
      '2026 ඔක්තෝබර් 15 වන දින වන විට එතුමාගේ විද්‍යාත්මක කෘති සඳහා Google Scholar citations 1,598ක්, h-index 20ක් සහ i10-index 33ක් වාර්තා වී තිබීමද එතුමාගේ පර්යේෂණවල දිගුකාලීන බලපෑම පිළිබිඹු කරයි.',
      'සම්මානිත මහාචාර්ය උපාලි සමරජීව මහතාගේ නායකත්වය තුළින් අධ්‍යයන ගුණාත්මකභාවය, පර්යේෂණ, තත්ත්ව සහතිකකරණය, ජාත්‍යන්තර සබඳතා සහ ආයතනික සංවර්ධනය තවදුරටත් ශක්තිමත් කරමින් විද්‍යා හා තොරතුරු තාක්ෂණ සරසවිය තවත් ඉහළ මට්ටමකට ගෙන යාමට අප බලාපොරොත්තු වෙමු.',
      'සරසවියේ අධ්‍යයන හා අනධ්‍යයන කාර්ය මණ්ඩලය, කථිකාචාර්යවරුන්, සිසුන් සහ උපාධිධාරීන් ඇතුළු සියලුම දෙනා නව උපකුලපතිවරයා වෙත උණුසුම් සුබපැතුම් එක්කරමින් ගෞරවයෙන් පිළිගනිමු.',
    ],
    citationsLabel: 'උපුටා දැක්වීම්',
    researchDate: 'Google Scholar, 2026 ඔක්තෝබර් 15 දිනට',
    messageHeading: 'උපකුලපතිතුමාගේ පණිවිඩය',
    quote:
      'SITC සරසවියේදී, ඔබේ සාර්ථකත්වය අපගේ විශිෂ්ටතම ජයග්‍රහණය ලෙස අපි සලකන්නෙමු.',
    salutation: 'ආදරණීය සිසු සිසුවියනි,',
    message: [
      'අධ්‍යාපනය යනු පුද්ගල ජීවිත පමණක් නොව අපගේ සමාජයේ අනාගතයද හැඩගස්වන බලවත්ම සාධකවලින් එකකි. එය අවස්ථා සඳහා දොරටු විවර කරයි, චරිතය ශක්තිමත් කරයි, ලෝකය තුළ අර්ථවත් වෙනසක් ඇති කිරීමට අවශ්‍ය දැනුම, ආත්මවිශ්වාසය සහ ප්‍රඥාව අපට ලබාදෙයි.',
      'සැබෑ අධ්‍යාපනය විභාග, පන්ති කාමර සහ අධ්‍යාපන සුදුසුකම්වලින් ඔබ්බට විහිදෙන බව විශ්වාස කරන SITC සරසවිය වෙත ඔබ පිළිගැනීමට ලැබීම මට මහත් සතුටකි. දිනෙන් දින වඩාත් තරගකාරී සහ එකිනෙකට සම්බන්ධ වන ලෝකයේ අභියෝගවලට මුහුණ දීමට සූදානම්, දැනුමෙන් පිරිපුන්, වගකීම් සහගත සහ ඉදිරි දැක්මක් ඇති පුද්ගලයන් බිහිකිරීම අපගේ දැක්මයි.',
      'ඔබේ අධ්‍යයන ගමන ආරම්භ කරන මේ අවස්ථාවේදී, ඉගෙනීමට, ප්‍රශ්න කිරීමට, නවෝත්පාදනයට සහ වර්ධනයට ලැබෙන සෑම අවස්ථාවක්ම වැළඳගන්නා ලෙස මම ඔබ දිරිමත් කරමි. අධ්‍යයන විශිෂ්ටත්වය වැදගත් වන අතර, අවංකභාවය, විනය, විචාරාත්මක චින්තනය, නායකත්වය සහ ජීවිත කාලය පුරා ඉගෙනීමට ඇති සැබෑ කැපවීමද ඒ හා සමානව වටිනා ගුණාංග වේ. මෙම ගුණාංග ඔබ තෝරාගත් වෘත්තීන්හි පමණක් නොව සමාජයට කරන දායකත්වය තුළද ඔබ කැපී පෙනීමට හේතු වනු ඇත.',
      'අප අවට ලෝකය ඉතා වේගයෙන් වෙනස් වෙමින් පවතින අතර, අනාගතය අයත් වන්නේ වෙනස්කම්වලට හැඩගැසීමට, ස්වාධීනව සිතීමට සහ දැනුම අර්ථවත් ක්‍රියාවන් බවට පරිවර්තනය කිරීමට කැමති අයටය. අධිෂ්ඨානයෙන් ඔබේ අභිලාෂයන් හඹා යන ලෙසත්, උසස්ම ආචාරධර්ම රැකගන්නා ලෙසත්, ධනාත්මක වෙනසක් ඇති කිරීමට ඔබ සතු හැකියාව කිසිවිටෙකත් අවතක්සේරු නොකරන ලෙසත් මම ඔබ සැමගෙන් ඉල්ලා සිටිමි.',
      'SITC සරසවියේදී, ඔබේ සාර්ථකත්වය අපගේ විශිෂ්ටතම ජයග්‍රහණය ලෙස අපි සලකන්නෙමු. ඔබ අප සමඟ ගතකරන කාලය බුද්ධිමය සොයාගැනීම්, පුද්ගල සංවර්ධනය සහ දිගුකාලීන ජයග්‍රහණවලින් පිරි කාලයක් වේවායි ප්‍රාර්ථනා කරමි.',
      'සෑම සිසුවෙකුටම සහ සිසුවියකටම ඵලදායී අධ්‍යයන ගමනක් සහ අරමුණින්, ජයග්‍රහණයෙන් හා සාර්ථකත්වයෙන් පිරි අනාගතයක් සඳහා මාගේ අවංක සුබපැතුම් පිරිනමමි.',
    ],
    institution: 'විද්‍යා හා තොරතුරු තාක්ෂණ සරසවිය (SITC)',
    country: 'ශ්‍රී ලංකාව',
    portraitAlt:
      'අධ්‍යයන නිල ඇඳුමෙන් සැරසුණු SITC සරසවියේ උපකුලපති සම්මානිත මහාචාර්ය උපාලි සමරජීව මහතා',
  },
  ta: {
    sectionLabel: 'கல்விசார் தலைமைத்துவம்',
    heading: 'எங்கள்',
    headingEmphasis: 'துணைவேந்தரை அறிந்துகொள்ளுங்கள்.',
    name: 'தகைசால் பேராசிரியர் உபாலி சமரஜீவ',
    honorific: 'தகைசால் பேராசிரியர்',
    personName: 'உபாலி சமரஜீவ',
    role: 'துணைவேந்தர்',
    summary: [
      'உயர்கல்வி, அறிவியல் ஆராய்ச்சி மற்றும் தொழில்சார் சேவையில் ஐந்து தசாப்தங்களுக்கும் மேலான அனுபவத்துடன், தகைசால் பேராசிரியர் உபாலி சமரஜீவ SITC வளாகத்திற்குத் தலைமை தாங்குகிறார்.',
      'பேராதனைப் பல்கலைக்கழகத்தில் இரசாயனவியலில் இளங்கலைப் பட்டமும் நுண்ணுயிரியலில் கலாநிதிப் பட்டமும் பெற்ற அவர், உணவு அறிவியல் கல்வி, தேசிய அறிவியல் நிறுவனங்கள் மற்றும் 30 நாடுகளில் சர்வதேச ஆராய்ச்சி, ஆலோசனைப் பணிகள் ஆகியவற்றிற்குச் சிறப்பான பங்களிப்பை வழங்கியுள்ளார்.',
    ],
    biographyLabel: 'அவரது கல்விசார் பயணத்தை மேலும் அறியுங்கள்',
    biography: [
      'வளாகத்தின் கல்விசார் பயணத்தில் ஒரு முக்கியமான புதிய அத்தியாயத்தைக் குறிக்கும் வகையில், துணைவேந்தர் தகைசால் பேராசிரியர் உபாலி சமரஜீவ, இலங்கையின் உயர்கல்வி, அறிவியல் ஆராய்ச்சி மற்றும் தொழில்சார் துறைகளில் ஐந்து தசாப்தங்களுக்கும் மேலான அனுபவத்தைக் கொண்ட புகழ்பெற்ற மூத்த அறிஞராகத் திகழ்கிறார்.',
      'பேராதனைப் பல்கலைக்கழகத்தில் இரசாயனவியலில் தனது முதல் விஞ்ஞான இளங்கலைப் பட்டத்தைப் பெற்ற அவர், பின்னர் அதே பல்கலைக்கழகத்தில் நுண்ணுயிரியல் துறையில் கலாநிதிப் பட்டம் (PhD) பெற்றார். International Academy of Food Science and Technology (IAFoST) அமைப்பின் Fellow ஆகத் தேர்ந்தெடுக்கப்பட்டுள்ள அவர், இலங்கையின் பல முன்னணி அறிவியல் மற்றும் தொழில்சார் நிறுவனங்களின் கௌரவ உறுப்பினராகவும் உள்ளார்.',
      'பேராதனைப் பல்கலைக்கழகத்தில் Food Science and Technology துறையை நிறுவுவதில் முன்னோடிப் பங்காற்றிய அவர், அதன் ஆரம்பத் துறைத் தலைவராகவும் பணியாற்றினார். அப்பல்கலைக்கழகத்தின் நான்கு ஆண்டு Food Science and Technology பட்டப்படிப்பை உருவாக்குவதிலும் அவர் சிறப்பான பங்களிப்பை வழங்கியுள்ளார்.',
      'பேராதனைப் பல்கலைக்கழகப் பேரவை உறுப்பினராகவும், Industrial Technology Institute (ITI), Sri Lanka Standards Institution (SLSI) ஆகிய நிறுவனங்களின் நிர்வாக சபை உறுப்பினராகவும், Sri Lanka Institute of Food Science and Technology அமைப்பின் நிர்வாக சபையின் முதல் தலைவராகவும் அவர் பணியாற்றியுள்ளார்.',
      'லண்டனில் UNDP Research Fellow ஆகவும், அமெரிக்காவில் Fulbright-Hays Senior Research Fellow மற்றும் இணைப்பு பேராசிரியராகவும் (Adjunct Professor), University of Wisconsin-River Falls இல் பேராசிரியராகவும் சர்வதேச கல்வி மற்றும் ஆராய்ச்சிப் பணிகளில் அவர் ஈடுபட்டுள்ளார்.',
      'மேலும், 30 நாடுகளில் சர்வதேச ஆலோசனைப் பணிகளை மேற்கொண்டு, சர்வதேச தர முகாமைத்துவ முறைமைகளின் மேம்பாட்டிற்கும் விரிவான பங்களிப்பை வழங்கியுள்ளார்.',
      'அவரது சிறப்பான ஆராய்ச்சி மற்றும் அறிவியல் பங்களிப்புகளுக்காக Most Outstanding Research Contribution to Sri Lankan Science Award, Institute of Chemistry Gold Medal, National Award for Agriculture Research, Sri Lanka National Science & Technology Award உள்ளிட்ட பல விருதுகள் வழங்கப்பட்டுள்ளன.',
      '2026 அக்டோபர் 15 நிலவரப்படி, அவரது அறிவியல் படைப்புகள் Google Scholar இல் 1,598 மேற்கோள்களையும், h-index 20 மற்றும் i10-index 33 ஆகிய அளவுகளையும் பெற்றிருந்தன. இவை அவரது ஆராய்ச்சியின் நீண்டகாலத் தாக்கத்தைப் பிரதிபலிக்கின்றன.',
      'அவரது தலைமைத்துவத்தின் கீழ் கல்வித் தரம், ஆராய்ச்சி, தர உறுதிப்பாடு, சர்வதேச உறவுகள் மற்றும் நிறுவன மேம்பாடு ஆகியவற்றை மேலும் வலுப்படுத்தி, SITC வளாகத்தை உயர்ந்த நிலைக்குக் கொண்டு செல்ல நாங்கள் எதிர்பார்க்கிறோம்.',
      'வளாகத்தின் கல்விசார் மற்றும் கல்விசாரா பணியாளர்கள், விரிவுரையாளர்கள், மாணவர்கள் மற்றும் பட்டதாரிகள் அனைவரும் புதிய துணைவேந்தரை மரியாதையுடன் வரவேற்று, மனமார்ந்த நல்வாழ்த்துகளைத் தெரிவிக்கிறோம்.',
    ],
    citationsLabel: 'மேற்கோள்கள்',
    researchDate: 'Google Scholar, 15 அக்டோபர் 2026 நிலவரப்படி',
    messageHeading: 'துணைவேந்தரின் செய்தி',
    quote:
      'SITC வளாகத்தில், உங்கள் வெற்றியையே எங்களது மிகப்பெரிய சாதனையாகக் கருதுகிறோம்.',
    salutation: 'அன்பான மாணவ மாணவியரே,',
    message: [
      'கல்வி, தனிநபர் வாழ்க்கையை மட்டுமன்றி நமது சமூகத்தின் எதிர்காலத்தையும் வடிவமைக்கும் மிக வலிமையான சக்திகளில் ஒன்றாகும். அது வாய்ப்புகளுக்கான கதவுகளைத் திறந்து, நற்பண்புகளை வலுப்படுத்தி, உலகில் அர்த்தமுள்ள மாற்றத்தை ஏற்படுத்தத் தேவையான அறிவு, தன்னம்பிக்கை மற்றும் ஞானத்தை நமக்கு வழங்குகிறது.',
      'உண்மையான கல்வி என்பது பரீட்சைகள், வகுப்பறைகள் மற்றும் கல்வித் தகைமைகளுக்கு அப்பால் விரிவடைகிறது என்று நம்பும் SITC வளாகத்திற்கு உங்களை வரவேற்பதில் நான் பெருமகிழ்ச்சி அடைகிறேன். மேலும் மேலும் போட்டித்தன்மையும் ஒன்றோடொன்று தொடர்பும் கொண்ட உலகின் சவால்களை எதிர்கொள்ளத் தயாரான, அறிவும் பொறுப்புணர்வும் எதிர்காலச் சிந்தனையும் கொண்ட நபர்களை உருவாக்குவதே எங்களது நோக்கமாகும்.',
      'உங்கள் கல்விப் பயணத்தைத் தொடங்கும் இவ்வேளையில், கற்கவும், கேள்வி எழுப்பவும், புதுமைகளை உருவாக்கவும், வளர்ச்சியடையவும் கிடைக்கும் ஒவ்வொரு வாய்ப்பையும் பயன்படுத்துமாறு உங்களை ஊக்குவிக்கிறேன். கல்விசார் சிறப்புத்தன்மை முக்கியமானது. அதேபோல் நேர்மை, ஒழுக்கம், விமர்சனச் சிந்தனை, தலைமைத்துவம் மற்றும் வாழ்நாள் முழுவதும் கற்பதற்கான உண்மையான அர்ப்பணிப்பும் பெறுமதிமிக்கவை. இந்தப் பண்புகள், நீங்கள் தேர்ந்தெடுக்கும் தொழில்களில் மட்டுமன்றி சமூகத்திற்கு வழங்கும் பங்களிப்பிலும் உங்களைத் தனித்துவமாக விளங்கச் செய்யும்.',
      'நம்மைச் சுற்றியுள்ள உலகம் வேகமாக மாறிக்கொண்டிருக்கிறது. மாற்றத்திற்கேற்பத் தம்மை மாற்றிக்கொள்ளவும், சுயமாகச் சிந்திக்கவும், அறிவை அர்த்தமுள்ள செயலாக மாற்றவும் தயாராக இருப்பவர்களுக்கே எதிர்காலம் உரியது. உறுதியுடன் உங்கள் இலட்சியங்களை நோக்கிச் செல்லுமாறும், உயர்ந்த ஒழுக்கநெறிகளைப் பேணுமாறும், நல்ல மாற்றத்தை ஏற்படுத்தும் உங்கள் திறனை ஒருபோதும் குறைத்து மதிப்பிட வேண்டாம் என்றும் உங்கள் ஒவ்வொருவரையும் கேட்டுக்கொள்கிறேன்.',
      'SITC வளாகத்தில், உங்கள் வெற்றியையே எங்களது மிகப்பெரிய சாதனையாகக் கருதுகிறோம். எங்களுடன் நீங்கள் செலவிடும் காலம் அறிவுசார் கண்டுபிடிப்பு, தனிப்பட்ட வளர்ச்சி மற்றும் நிலையான சாதனைகளால் நிறைந்த காலமாக அமையட்டும்.',
      'பயனுள்ள கல்விப் பயணத்திற்கும், நோக்கம், சாதனை மற்றும் வெற்றி நிறைந்த எதிர்காலத்திற்கும் ஒவ்வொரு மாணவருக்கும் எனது மனமார்ந்த நல்வாழ்த்துகளைத் தெரிவித்துக்கொள்கிறேன்.',
    ],
    institution: 'விஞ்ஞானம் மற்றும் தகவல் தொழில்நுட்ப வளாகம் (SITC)',
    country: 'இலங்கை',
    portraitAlt:
      'கல்விசார் அங்கியில் SITC வளாகத்தின் துணைவேந்தர் தகைசால் பேராசிரியர் உபாலி சமரஜீவ',
  },
} as const satisfies Record<LeadershipLocale, LeadershipCopy>;
