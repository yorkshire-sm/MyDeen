export interface FatwaCategory {
  id: string;
  title: string;
  count: number;
  url: string;
  categoryGroup?: 'Worship' | 'Transactions & Finance' | 'Social & Family' | 'Belief & Seerah' | 'Ethics & Lifestyle';
  isYouthCommon?: boolean;
  youthTopics?: string;
  icon?: string;
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

  // Other secondary categories available in expanded view
  {
    id: 'quran-hadith',
    title: 'Quran And Hadith',
    count: 12,
    url: 'https://www.fatwaqa.com/en/fatawa/quran-hadith',
    categoryGroup: 'Belief & Seerah'
  },
  {
    id: 'ahlus-sunnah-practices',
    title: 'Practices of Ahlus Sunnah',
    count: 12,
    url: 'https://www.fatwaqa.com/en/fatawa/ahlus-sunnah-practices',
    categoryGroup: 'Belief & Seerah'
  },
  {
    id: 'funeral',
    title: 'Funeral Rites',
    count: 22,
    url: 'https://www.fatwaqa.com/en/fatawa/funeral',
    categoryGroup: 'Worship'
  },
  {
    id: 'zakat-and-ushr',
    title: 'Zakat and Ushr',
    count: 10,
    url: 'https://www.fatwaqa.com/en/fatawa/zakat-and-ushr',
    categoryGroup: 'Worship'
  },
  {
    id: 'hajj-umrah',
    title: 'Hajj and Umrah',
    count: 24,
    url: 'https://www.fatwaqa.com/en/fatawa/hajj-umrah',
    categoryGroup: 'Worship'
  },
  {
    id: 'qurbani-and-aqeeqah',
    title: 'Qurbani and Aqeeqah',
    count: 15,
    url: 'https://www.fatwaqa.com/en/fatawa/qurbani-and-aqeeqah',
    categoryGroup: 'Worship'
  },
  {
    id: 'slaughtering-hunting',
    title: 'Slaughtering and Hunting',
    count: 1,
    url: 'https://www.fatwaqa.com/en/fatawa/slaughtering-hunting',
    categoryGroup: 'Ethics & Lifestyle'
  },
  {
    id: 'oaths-and-vows',
    title: 'Oaths and Vows',
    count: 7,
    url: 'https://www.fatwaqa.com/en/fatawa/oaths-and-vows',
    categoryGroup: 'Social & Family'
  },
  {
    id: 'divorce',
    title: 'Talaaq [Divorce]',
    count: 1,
    url: 'https://www.fatwaqa.com/en/fatawa/divorce',
    categoryGroup: 'Social & Family'
  },
  {
    id: 'breastfeeding',
    title: 'Razaat [Fosterage]',
    count: 5,
    url: 'https://www.fatwaqa.com/en/fatawa/breastfeeding',
    categoryGroup: 'Social & Family'
  },
  {
    id: 'iddah',
    title: 'Iddah Rulings',
    count: 1,
    url: 'https://www.fatwaqa.com/en/fatawa/iddah',
    categoryGroup: 'Social & Family'
  },
  {
    id: 'partnership',
    title: 'Shirkah [Partnership]',
    count: 3,
    url: 'https://www.fatwaqa.com/en/fatawa/partnership',
    categoryGroup: 'Transactions & Finance'
  },
  {
    id: 'mudarabah',
    title: 'Mudarabah [Silent Partnership]',
    count: 2,
    url: 'https://www.fatwaqa.com/en/fatawa/mudarabah',
    categoryGroup: 'Transactions & Finance'
  },
  {
    id: 'endowments',
    title: 'Waqf [Endowments]',
    count: 7,
    url: 'https://www.fatwaqa.com/en/fatawa/endowments',
    categoryGroup: 'Transactions & Finance'
  },
  {
    id: 'missing-thing',
    title: 'Lost Property (Al-Luqtah)',
    count: 1,
    url: 'https://www.fatwaqa.com/en/fatawa/missing-thing',
    categoryGroup: 'Social & Family'
  },
  {
    id: 'inheritance',
    title: 'Inheritance Rulings',
    count: 6,
    url: 'https://www.fatwaqa.com/en/fatawa/inheritance',
    categoryGroup: 'Transactions & Finance'
  },
  {
    id: 'human-rights-in-islam',
    title: 'Huqooq-ul-Ibaad [Rights of Beings]',
    count: 1,
    url: 'https://www.fatwaqa.com/en/fatawa/human-rights-in-islam',
    categoryGroup: 'Social & Family'
  },
  {
    id: 'virtues-and-biography',
    title: 'Excellences and Seerat',
    count: 7,
    url: 'https://www.fatwaqa.com/en/fatawa/virtues-and-biography',
    categoryGroup: 'Belief & Seerah'
  },
  {
    id: 'economics',
    title: 'Islamic Economics Fatwas',
    count: 39,
    url: 'https://www.fatwaqa.com/en/fatawa/economics',
    categoryGroup: 'Transactions & Finance'
  },
  {
    id: 'sadqa',
    title: 'Sadqa Rulings',
    count: 4,
    url: 'https://www.fatwaqa.com/en/fatawa/sadqa',
    categoryGroup: 'Worship'
  },
  {
    id: 'mutafariqat',
    title: 'Miscellaneous Inquiries',
    count: 5,
    url: 'https://www.fatwaqa.com/en/fatawa/mutafariqat',
    categoryGroup: 'Ethics & Lifestyle'
  }
];

export const YOUTH_COMMON_CATEGORIES = FATWA_CATEGORIES.filter((c) => c.isYouthCommon);
