export interface FatwaCategory {
  id: string;
  title: string;
  count: number;
  url: string;
  categoryGroup?: 'Worship' | 'Transactions & Finance' | 'Social & Family' | 'Belief & Seerah' | 'Ethics & Lifestyle';
}

export const FATWA_CATEGORIES: FatwaCategory[] = [
  {
    id: 'quran-hadith',
    title: 'Quran And Hadith',
    count: 12,
    url: 'https://www.fatwaqa.com/en/fatawa/quran-hadith',
    categoryGroup: 'Belief & Seerah'
  },
  {
    id: 'aqaid',
    title: 'Islamic Beliefs',
    count: 16,
    url: 'https://www.fatwaqa.com/en/fatawa/aqaid',
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
    id: 'purification',
    title: 'Wudu, Ghusl and Impurities',
    count: 23,
    url: 'https://www.fatwaqa.com/en/fatawa/purification-in-islam',
    categoryGroup: 'Worship'
  },
  {
    id: 'salah',
    title: 'Salah',
    count: 122,
    url: 'https://www.fatwaqa.com/en/fatawa/salah',
    categoryGroup: 'Worship'
  },
  {
    id: 'funeral',
    title: 'Funeral Rites',
    count: 22,
    url: 'https://www.fatwaqa.com/en/fatawa/funeral',
    categoryGroup: 'Worship'
  },
  {
    id: 'fasting',
    title: 'Islamic Ruling Of Fast',
    count: 43,
    url: 'https://www.fatwaqa.com/en/fatawa/fasting',
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
    title: 'Islamic Rulings Of Slaughtering and Hunting',
    count: 1,
    url: 'https://www.fatwaqa.com/en/fatawa/slaughtering-hunting',
    categoryGroup: 'Ethics & Lifestyle'
  },
  {
    id: 'oaths-and-vows',
    title: 'Islamic Rulings of Oath and Vow',
    count: 7,
    url: 'https://www.fatwaqa.com/en/fatawa/oaths-and-vows',
    categoryGroup: 'Social & Family'
  },
  {
    id: 'islamic-marriage',
    title: 'Islamic Rulings of Nikah [Marriage]',
    count: 15,
    url: 'https://www.fatwaqa.com/en/fatawa/islamic-marriage',
    categoryGroup: 'Social & Family'
  },
  {
    id: 'divorce',
    title: 'Islamic Rulings of Talaaq [Divorce]',
    count: 1,
    url: 'https://www.fatwaqa.com/en/fatawa/divorce',
    categoryGroup: 'Social & Family'
  },
  {
    id: 'breastfeeding',
    title: 'Razaat Ka Bayaan [Fosterage / Breastfeeding]',
    count: 5,
    url: 'https://www.fatwaqa.com/en/fatawa/breastfeeding',
    categoryGroup: 'Social & Family'
  },
  {
    id: 'iddah',
    title: 'Islamic Rulings of Iddah',
    count: 1,
    url: 'https://www.fatwaqa.com/en/fatawa/iddah',
    categoryGroup: 'Social & Family'
  },
  {
    id: 'business',
    title: 'Islamic Rulings of Business',
    count: 32,
    url: 'https://www.fatwaqa.com/en/fatawa/business',
    categoryGroup: 'Transactions & Finance'
  },
  {
    id: 'partnership',
    title: 'Laws of Shirkah - Partnership in Business',
    count: 3,
    url: 'https://www.fatwaqa.com/en/fatawa/partnership',
    categoryGroup: 'Transactions & Finance'
  },
  {
    id: 'mudarabah',
    title: 'Islamic Rulings of Mudarabah [Silent Partnership]',
    count: 2,
    url: 'https://www.fatwaqa.com/en/fatawa/mudarabah',
    categoryGroup: 'Transactions & Finance'
  },
  {
    id: 'ijarah',
    title: 'Islamic Rulings of Employment',
    count: 16,
    url: 'https://www.fatwaqa.com/en/fatawa/ijarah',
    categoryGroup: 'Transactions & Finance'
  },
  {
    id: 'loans-mortgages-gifts-rulings',
    title: 'Loans, Mortgages, And Gifts',
    count: 16,
    url: 'https://www.fatwaqa.com/en/fatawa/loans-mortgages-gifts-rulings',
    categoryGroup: 'Transactions & Finance'
  },
  {
    id: 'endowments',
    title: 'Islamic Rulings of Waqf [Endowments]',
    count: 7,
    url: 'https://www.fatwaqa.com/en/fatawa/endowments',
    categoryGroup: 'Transactions & Finance'
  },
  {
    id: 'missing-thing',
    title: 'Rulings on Lost Property (Al-Luqtah)',
    count: 1,
    url: 'https://www.fatwaqa.com/en/fatawa/missing-thing',
    categoryGroup: 'Social & Family'
  },
  {
    id: 'inheritance',
    title: 'Islamic Rulings of Inheritance',
    count: 6,
    url: 'https://www.fatwaqa.com/en/fatawa/inheritance',
    categoryGroup: 'Transactions & Finance'
  },
  {
    id: 'halal-haram',
    title: 'Halaal & Haraam',
    count: 39,
    url: 'https://www.fatwaqa.com/en/fatawa/halal-haram',
    categoryGroup: 'Ethics & Lifestyle'
  },
  {
    id: 'sunnah-and-manners',
    title: 'Sunnah and Manners',
    count: 8,
    url: 'https://www.fatwaqa.com/en/fatawa/sunnah-and-manners',
    categoryGroup: 'Ethics & Lifestyle'
  },
  {
    id: 'sins',
    title: 'Laws Regarding Sins',
    count: 12,
    url: 'https://www.fatwaqa.com/en/fatawa/sins',
    categoryGroup: 'Ethics & Lifestyle'
  },
  {
    id: 'human-rights-in-islam',
    title: 'Islamic Rulings of Huqooq-ul-Ibaad [Rights of Beings]',
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
    id: 'womens-issues',
    title: 'Women\'s Rulings',
    count: 11,
    url: 'https://www.fatwaqa.com/en/fatawa/womens-issues',
    categoryGroup: 'Social & Family'
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
    title: 'Miscellaneous',
    count: 5,
    url: 'https://www.fatwaqa.com/en/fatawa/mutafariqat',
    categoryGroup: 'Ethics & Lifestyle'
  }
];
