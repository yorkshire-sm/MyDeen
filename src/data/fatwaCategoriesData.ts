export interface FatwaCategory {
  id: string;
  title: string;
  count: number;
  url: string;
  categoryGroup?: 'Worship' | 'Transactions & Finance' | 'Social & Family' | 'Belief & Seerah' | 'Ethics & Lifestyle';
  isYouthCommon?: boolean;
  youthTopics?: string;
  icon: string;
}

export const FATWA_CATEGORIES: FatwaCategory[] = [
  {
    id: 'salah',
    title: 'Salah (Daily Prayers)',
    count: 122,
    url: 'https://www.fatwaqa.com/en/fatawa/salah',
    categoryGroup: 'Worship',
    isYouthCommon: true,
    youthTopics: 'University prayer spaces, missed prayers, travel & timings',
    icon: '🕌'
  },
  {
    id: 'purification',
    title: 'Wudu, Ghusl & Impurities',
    count: 23,
    url: 'https://www.fatwaqa.com/en/fatawa/purification-in-islam',
    categoryGroup: 'Worship',
    isYouthCommon: true,
    youthTopics: 'Wiping over socks, wet dreams, skin impurities & hygiene',
    icon: '💧'
  },
  {
    id: 'fasting',
    title: 'Fasting During Study & Exams',
    count: 43,
    url: 'https://www.fatwaqa.com/en/fatawa/fasting',
    categoryGroup: 'Worship',
    isYouthCommon: true,
    youthTopics: 'Ramadan during exams, inhalers, injections & exemptions',
    icon: '🌙'
  },
  {
    id: 'halal-haram',
    title: 'Halal Food, Drink & Lifestyle',
    count: 39,
    url: 'https://www.fatwaqa.com/en/fatawa/halal-haram',
    categoryGroup: 'Ethics & Lifestyle',
    isYouthCommon: true,
    youthTopics: 'Campus cafeteria meat, gelatin, gaming, music & clothes',
    icon: '🍽️'
  },
  {
    id: 'loans-mortgages-gifts-rulings',
    title: 'Student Loans & Financing',
    count: 16,
    url: 'https://www.fatwaqa.com/en/fatawa/loans-mortgages-gifts-rulings',
    categoryGroup: 'Transactions & Finance',
    isYouthCommon: true,
    youthTopics: 'University student loans, credit cards, bank interest & funding',
    icon: '💳'
  },
  {
    id: 'business',
    title: 'Online Business, Crypto & Jobs',
    count: 32,
    url: 'https://www.fatwaqa.com/en/fatawa/business',
    categoryGroup: 'Transactions & Finance',
    isYouthCommon: true,
    youthTopics: 'Freelancing, dropshipping, side gigs, crypto & contracts',
    icon: '💼'
  },
  {
    id: 'ijarah',
    title: 'Workplace & Employment Rights',
    count: 16,
    url: 'https://www.fatwaqa.com/en/fatawa/ijarah',
    categoryGroup: 'Transactions & Finance',
    isYouthCommon: true,
    youthTopics: 'Prayer breaks at work, halal duties, employment contracts',
    icon: '🏢'
  },
  {
    id: 'islamic-marriage',
    title: 'Marriage & Proposals for Students',
    count: 15,
    url: 'https://www.fatwaqa.com/en/fatawa/islamic-marriage',
    categoryGroup: 'Social & Family',
    isYouthCommon: true,
    youthTopics: 'Finding a spouse, university proposals, parental consent',
    icon: '💍'
  },
  {
    id: 'aqaid',
    title: 'Faith, Doubts & Modern Philosophy',
    count: 16,
    url: 'https://www.fatwaqa.com/en/fatawa/aqaid',
    categoryGroup: 'Belief & Seerah',
    isYouthCommon: true,
    youthTopics: 'Resolving intellectual doubts, defending the faith, atheism',
    icon: '🧭'
  },
  {
    id: 'sins',
    title: 'Repentance & Peer Pressure',
    count: 12,
    url: 'https://www.fatwaqa.com/en/fatawa/sins',
    categoryGroup: 'Ethics & Lifestyle',
    isYouthCommon: true,
    youthTopics: 'Overcoming bad habits, peer pressure, digital sins & Tawbah',
    icon: '🛡️'
  },
  {
    id: 'womens-issues',
    title: 'Women’s Campus & Shar’i Inquiries',
    count: 11,
    url: 'https://www.fatwaqa.com/en/fatawa/womens-issues',
    categoryGroup: 'Social & Family',
    isYouthCommon: true,
    youthTopics: 'Hijab in university, prayer timings, sports & modesty',
    icon: '🌸'
  },
  {
    id: 'sunnah-and-manners',
    title: 'Manners & Dealing with Parents',
    count: 8,
    url: 'https://www.fatwaqa.com/en/fatawa/sunnah-and-manners',
    categoryGroup: 'Ethics & Lifestyle',
    isYouthCommon: true,
    youthTopics: 'Respecting parents, living with non-Muslims, social etiquette',
    icon: '🤝'
  },

  // Secondary categories with emojis and contextual topic descriptions
  {
    id: 'quran-hadith',
    title: 'Quran And Hadith',
    count: 12,
    url: 'https://www.fatwaqa.com/en/fatawa/quran-hadith',
    categoryGroup: 'Belief & Seerah',
    youthTopics: 'Recitation rules, touching the Mushaf on phones, authentic Hadith',
    icon: '📖'
  },
  {
    id: 'ahlus-sunnah-practices',
    title: 'Practices of Ahlus Sunnah',
    count: 12,
    url: 'https://www.fatwaqa.com/en/fatawa/ahlus-sunnah-practices',
    categoryGroup: 'Belief & Seerah',
    youthTopics: 'Mawlid, sending peace upon the Prophet ﷺ, authentic traditions',
    icon: '🕌'
  },
  {
    id: 'funeral',
    title: 'Funeral Rites & Janazah',
    count: 22,
    url: 'https://www.fatwaqa.com/en/fatawa/funeral',
    categoryGroup: 'Worship',
    youthTopics: 'Janazah prayer method, condolences, visiting graves, Isaal-e-Sawab',
    icon: '🕊️'
  },
  {
    id: 'zakat-and-ushr',
    title: 'Zakat and Ushr',
    count: 10,
    url: 'https://www.fatwaqa.com/en/fatawa/zakat-and-ushr',
    categoryGroup: 'Worship',
    youthTopics: 'Calculating student savings Zakat, gold jewelry, eligible recipients',
    icon: '💰'
  },
  {
    id: 'hajj-umrah',
    title: 'Hajj and Umrah',
    count: 24,
    url: 'https://www.fatwaqa.com/en/fatawa/hajj-umrah',
    categoryGroup: 'Worship',
    youthTopics: 'Student Umrah trips, Ihram restrictions, Tawaf & Sa\'ee rules',
    icon: '🕋'
  },
  {
    id: 'qurbani-and-aqeeqah',
    title: 'Qurbani and Aqeeqah',
    count: 15,
    url: 'https://www.fatwaqa.com/en/fatawa/qurbani-and-aqeeqah',
    categoryGroup: 'Worship',
    youthTopics: 'Sacrifice obligations, shares, overseas charity Qurbani',
    icon: '🐑'
  },
  {
    id: 'slaughtering-hunting',
    title: 'Slaughtering & Halal Meat Standards',
    count: 1,
    url: 'https://www.fatwaqa.com/en/fatawa/slaughtering-hunting',
    categoryGroup: 'Ethics & Lifestyle',
    youthTopics: 'Zabiha requirements, mechanical slaughter, imported meat verification',
    icon: '🔪'
  },
  {
    id: 'oaths-and-vows',
    title: 'Oaths, Vows & Expiation',
    count: 7,
    url: 'https://www.fatwaqa.com/en/fatawa/oaths-and-vows',
    categoryGroup: 'Social & Family',
    youthTopics: 'Breaking sworn promises, Kaffarah (expiation) rules, valid vows',
    icon: '✋'
  },
  {
    id: 'divorce',
    title: 'Islamic Rulings of Talaaq [Divorce]',
    count: 1,
    url: 'https://www.fatwaqa.com/en/fatawa/divorce',
    categoryGroup: 'Social & Family',
    youthTopics: 'Marital dissolution conditions, reconciliation, legal vs Shar\'i divorce',
    icon: '📜'
  },
  {
    id: 'breastfeeding',
    title: 'Razaat [Fosterage & Mahram Rules]',
    count: 5,
    url: 'https://www.fatwaqa.com/en/fatawa/breastfeeding',
    categoryGroup: 'Social & Family',
    youthTopics: 'Establishment of foster sibling relationships and Mahram status',
    icon: '🍼'
  },
  {
    id: 'iddah',
    title: 'Islamic Rulings of Iddah',
    count: 1,
    url: 'https://www.fatwaqa.com/en/fatawa/iddah',
    categoryGroup: 'Social & Family',
    youthTopics: 'Waiting period obligations, residence rules, mourning guidelines',
    icon: '⏳'
  },
  {
    id: 'partnership',
    title: 'Shirkah [Business Partnerships]',
    count: 3,
    url: 'https://www.fatwaqa.com/en/fatawa/partnership',
    categoryGroup: 'Transactions & Finance',
    youthTopics: 'Co-founding startups, sharing profits vs losses, joint business',
    icon: '👥'
  },
  {
    id: 'mudarabah',
    title: 'Mudarabah [Capital & Effort Partnership]',
    count: 2,
    url: 'https://www.fatwaqa.com/en/fatawa/mudarabah',
    categoryGroup: 'Transactions & Finance',
    youthTopics: 'Investing capital in student ventures, entrepreneurship contracts',
    icon: '🤝'
  },
  {
    id: 'endowments',
    title: 'Waqf [Endowments & Trusts]',
    count: 7,
    url: 'https://www.fatwaqa.com/en/fatawa/endowments',
    categoryGroup: 'Transactions & Finance',
    youthTopics: 'Donating to educational trusts, university prayer hall properties',
    icon: '🏛️'
  },
  {
    id: 'missing-thing',
    title: 'Lost Property (Al-Luqtah)',
    count: 1,
    url: 'https://www.fatwaqa.com/en/fatawa/missing-thing',
    categoryGroup: 'Social & Family',
    youthTopics: 'Finding lost items on campus, reporting belongings, rightful owners',
    icon: '🔍'
  },
  {
    id: 'inheritance',
    title: 'Inheritance & Estate Distribution',
    count: 6,
    url: 'https://www.fatwaqa.com/en/fatawa/inheritance',
    categoryGroup: 'Transactions & Finance',
    youthTopics: 'Islamic wills, division of assets according to the Holy Quran',
    icon: '⚖️'
  },
  {
    id: 'human-rights-in-islam',
    title: 'Huqooq-ul-Ibaad [Rights of Fellow Humans]',
    count: 1,
    url: 'https://www.fatwaqa.com/en/fatawa/human-rights-in-islam',
    categoryGroup: 'Social & Family',
    youthTopics: 'Neighbor rights, non-Muslim classmates, avoiding gossip & harm',
    icon: '🤲'
  },
  {
    id: 'virtues-and-biography',
    title: 'Excellences & Seerat of Prophet Muhammad ﷺ',
    count: 7,
    url: 'https://www.fatwaqa.com/en/fatawa/virtues-and-biography',
    categoryGroup: 'Belief & Seerah',
    youthTopics: 'Prophetic character, historical miracles, loving the Beloved Prophet ﷺ',
    icon: '⭐'
  },
  {
    id: 'economics',
    title: 'Islamic Economics & Banking Fatwas',
    count: 39,
    url: 'https://www.fatwaqa.com/en/fatawa/economics',
    categoryGroup: 'Transactions & Finance',
    youthTopics: 'Islamic banking, stock market investing, pension schemes, interest',
    icon: '📈'
  },
  {
    id: 'sadqa',
    title: 'Sadqa & Voluntary Charity Rulings',
    count: 4,
    url: 'https://www.fatwaqa.com/en/fatawa/sadqa',
    categoryGroup: 'Worship',
    youthTopics: 'Charity in student societies, donating on behalf of deceased, crowdfunding',
    icon: '🎁'
  },
  {
    id: 'mutafariqat',
    title: 'Miscellaneous Contemporary Inquiries',
    count: 5,
    url: 'https://www.fatwaqa.com/en/fatawa/mutafariqat',
    categoryGroup: 'Ethics & Lifestyle',
    youthTopics: 'Digital photography, modern medicine, contemporary lifestyle queries',
    icon: '📋'
  }
];

export const YOUTH_COMMON_CATEGORIES = FATWA_CATEGORIES.filter((c) => c.isYouthCommon);
