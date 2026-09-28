import { Center, Zimmedar, Course, EventItem, ActivitySlide, MilestoneActivity, Book } from '../types';

export const SLIDESHOW_ACTIVITIES: ActivitySlide[] = [
  {
    id: 'slide-1',
    title: 'University Campus Halaqas & Student Mentorship',
    tagline: 'Bridging Academic Pursuits with Pure Islamic Character',
    category: 'Higher Education Wing',
    description: 'Weekly interactive study circles across 65+ campuses worldwide, helping Muslim students navigate academic life, peer pressure, and career ethics.',
    stats: '65+ Universities · 4,200+ Regular Students',
    location: 'Global Campus Network',
    imageTheme: 'emerald'
  },
  {
    id: 'slide-2',
    title: 'Youth I\'tikaf Camps & Spiritual Retreats',
    tagline: 'Intensive 10-Day Character Building in the Last Ashra',
    category: 'Spiritual Tarbiyah',
    description: 'Structured youth training camps covering daily Sunnahs, purifying internal spiritual diseases (kibr, hasad, riya), and building lifelong brotherhood.',
    stats: '12,000+ Young Attendees in 2025',
    location: 'Faizan-e-Madina International Centers',
    imageTheme: 'indigo'
  },
  {
    id: 'slide-3',
    title: 'Community Relief, Food Drives & Blood Donations',
    tagline: 'Faith in Action: Serving Humanity for the Pleasure of Allah',
    category: 'FGRF Social Welfare Wing',
    description: 'Youth-led emergency response and community support teams organizing hot meals for unhoused neighbors, tree-planting, and vital donor camps.',
    stats: '85,000+ Meals Distributed · 1,500+ Pints Donated',
    location: 'UK, USA, Pakistan & South Africa',
    imageTheme: 'cyan'
  },
  {
    id: 'slide-4',
    title: 'Sunnah Sports Gala & Healthy Brotherhood',
    tagline: 'Physical Vitality, Respectful Competition & Islamic Adab',
    category: 'Youth Brotherhood Activities',
    description: 'Annual inter-university football, archery, cricket, and hiking tournaments uniting students in an environment free from vulgarity and bad habits.',
    stats: '1,800+ Athletes Participated',
    location: 'London, Birmingham, Karachi & Chicago',
    imageTheme: 'amber'
  },
  {
    id: 'slide-5',
    title: 'International Student Buddy & Travel Support',
    tagline: 'Never Alone in a New Country: Home Away From Home',
    category: 'Global Youth Solidarity',
    description: 'Direct airport pickups, accommodation assistance, halal dining guides, and local Dawateislami center orientation for students traveling abroad.',
    stats: '950+ Incoming Students Assisted Annually',
    location: 'Over 28 Host Nations',
    imageTheme: 'purple'
  }
];

export const MILESTONE_ACTIVITIES: MilestoneActivity[] = [
  {
    id: 'm-1',
    title: 'National University Youth Convention (UK & Europe)',
    status: 'Completed',
    quarter: 'Q4',
    year: 2025,
    category: 'Campus Outreach',
    description: 'Held at Birmingham NEC with 2,500+ university attendees discussing mental resilience, Islamic identity, and AI ethics.',
    impactMetric: '2,500+ attendees · 48 student societies represented'
  },
  {
    id: 'm-2',
    title: 'Launch of LYF (Learn Your Faith) Modular Syllabus',
    status: 'Completed',
    quarter: 'Q1',
    year: 2025,
    category: 'Spiritual Growth',
    description: 'Released a modern, English-first curriculum covering contemporary youth dilemmas, Aqeedah clarity, and Fiqh for professionals.',
    impactMetric: '3,800 youth enrolled in Cohorts 1-4'
  },
  {
    id: 'm-3',
    title: 'Global Campus Ambassador Network Expansion',
    status: 'Ongoing',
    quarter: 'Active',
    year: 2026,
    category: 'Campus Outreach',
    description: 'Recruiting and equipping university leads across North America, UK, Europe, and Asia-Pacific to run on-campus halaqas.',
    impactMetric: '120+ active ambassadors in 18 countries'
  },
  {
    id: 'm-4',
    title: 'Free Youth Quran & Tajweed Online Clinics',
    status: 'Ongoing',
    quarter: 'Continuous',
    year: 2026,
    category: 'Digital & Media',
    description: 'One-on-one pronunciation check-ins with qualified Qaris in collaboration with dawateislami.net/quran portal.',
    impactMetric: '6,200+ students certified in Makharij essentials'
  },
  {
    id: 'm-5',
    title: 'International Student Arrival & Welcome Program',
    status: 'Ongoing',
    quarter: 'Continuous',
    year: 2026,
    category: 'Youth Welfare',
    description: 'Year-round support desk linking youth moving abroad to local Zimmedars, nearest centers, and university buddies.',
    impactMetric: '1,400+ international students accommodated'
  },
  {
    id: 'm-6',
    title: 'Dar-ul-Ifta Ahlesunnat Youth Shar\'i Research Index',
    status: 'Upcoming',
    quarter: 'Q3',
    year: 2026,
    category: 'Spiritual Growth',
    description: 'Comprehensive digital portal of verified verdicts answering modern questions on finance, digital ethics, relationships, and student life.',
    impactMetric: '500+ youth fatwas currently in scholarly review'
  }
];

export const COURSES_DATA: Course[] = [
  // Short Courses
  {
    id: 'c-1',
    title: 'Fiqh of Salah & Purification for Busy Students',
    track: 'Short Courses',
    duration: '4 Weeks (2 hrs/week)',
    schedule: 'Saturdays, 11:00 AM - 1:00 PM GMT',
    language: 'English',
    mode: 'Online (Zoom/LMS)',
    instructor: 'Maulana Hamza Attari (Al-Madinah Degree Graduate)',
    description: 'A practical, zero-ambiguity breakdown of the Fard, Wajib, and Sunnah elements of prayer, wudu invalidators, traveling (Qasr) rules, and catching congregational prayer on campus.',
    syllabus: [
      'Conditions of Salah & common wudu errors',
      'The prayer matrix: Fard, Wajib, Sunnah, and Mustahab acts',
      'Rules of Qada (missed prayers) and calculations',
      'Sujud as-Sahw (prostration of forgetfulness) and campus scenarios'
    ],
    targetAudience: 'University & college students, working youth',
    isPopular: true,
    status: 'Open for Registration'
  },
  {
    id: 'c-2',
    title: 'Halal Career, Income & Islamic Finance Essentials',
    track: 'Short Courses',
    duration: '3 Weeks',
    schedule: 'Sundays, 6:00 PM - 8:00 PM GMT',
    language: 'English',
    mode: 'Online (Zoom/LMS)',
    instructor: 'Mufti Muhammad Bilal Attari (Dar-ul-Ifta Ahlesunnat Specialist)',
    description: 'Navigating student loans, modern corporate contracts, freelancing dilemmas, cryptocurrency ethics, and avoiding hidden Riba in day-to-day transactions.',
    syllabus: [
      'Defining Halal & Haram income in the modern digital age',
      'Student financing, mortgages, and credit card guidelines',
      'Freelancing, AI contracts, drop-shipping and intellectual property',
      'Purifying wealth: Zakat calculation and ethical investing'
    ],
    targetAudience: 'Graduates, freelancers, business and tech students',
    isPopular: false,
    status: 'Starting Soon'
  },
  {
    id: 'c-3',
    title: 'Science of Tajweed & Quranic Phonetics',
    track: 'Short Courses',
    duration: '6 Weeks',
    schedule: 'Tuesdays & Thursdays, 7:00 PM - 8:15 PM GMT',
    language: 'Bilingual',
    mode: 'Online (Zoom/LMS)',
    instructor: 'Qari Abu Bakr Attari (International Qirat Awardee)',
    description: 'Master correct articulation points (Makharij) and attributes (Sifaat) of Arabic letters to recite the Holy Quran with beauty and theological correctness.',
    syllabus: [
      'Throat, tongue, and lip articulation points with diagrams',
      'Rules of Nun Sakinah, Tanween, and Meem Sakinah',
      'Rules of Madd (prolongation) and stops (Waqf)',
      'Practical recitation of Surah Al-Fatiha and Juz Amma'
    ],
    targetAudience: 'All youth wanting to rectify recitation errors',
    isPopular: false,
    status: 'Open for Registration'
  },

  // LYF (Learn Your Faith - English)
  {
    id: 'c-4',
    title: 'LYF Core: Foundations of Islamic Creed & Modern Doubts',
    track: 'LYF (English)',
    duration: '10 Weeks',
    schedule: 'Sundays, 10:30 AM - 1:00 PM GMT',
    language: 'English',
    mode: 'Online (Zoom/LMS)',
    instructor: 'Maulana Imran Attari (Head of English Dept, Dawateislami)',
    description: 'A structured, intellectually rigorous syllabus addressing atheism, scientism, moral relativism, and establishing unshakable confidence in Allah, the Prophethood, and the Unseen.',
    syllabus: [
      'Epistemology in Islam: Reason, revelation, and empirical observation',
      'Attributes of Allah Almighty and refuting pantheism/materialism',
      'Prophethood, miracles, and the preservation of the Holy Quran',
      'The Unseen realm: Barzakh, Day of Judgment, and Divine Decree (Qadr)',
      'Navigating campus social pressures and ideological debates'
    ],
    targetAudience: 'English-speaking university and sixth-form students',
    isPopular: true,
    status: 'Open for Registration'
  },
  {
    id: 'c-5',
    title: 'LYF Spirit: Tazkiyah & Overcoming Modern Addictions',
    track: 'LYF (English)',
    duration: '8 Weeks',
    schedule: 'Wednesdays, 7:30 PM - 9:00 PM GMT',
    language: 'English',
    mode: 'Online (Zoom/LMS)',
    instructor: 'Shaykh Dr. Abdul Wahhab Attari',
    description: 'Practical spiritual psychotherapy derived from Imam Ghazali and Ameer-e-Ahlesunnat on overcoming pornography, dopamine burnout, anger, envy, and pride.',
    syllabus: [
      'The Anatomy of the Nafs: Ammarah, Lawwamah, and Mutma\'innah',
      'Screen addiction, lowering the gaze, and digital detox methods',
      'Inner diseases: Ostentation (Riya), Jealousy (Hasad), and Arrogance (Kibr)',
      'Building sustainable habits: Tahajjud, daily Dhikr, and Muhasabah'
    ],
    targetAudience: 'Youth striving for mental peace and internal purity',
    isPopular: true,
    status: 'Starting Soon'
  },

  // FOA (Faizan-e-Online Academy - Urdu)
  {
    id: 'c-6',
    title: 'FOA: Fard Uloom Course (فرض علوم کورس)',
    track: 'FOA (Urdu)',
    duration: '12 Weeks',
    schedule: 'Fridays & Saturdays, 8:00 PM - 9:30 PM PKT',
    language: 'Urdu',
    mode: 'Online (Zoom/LMS)',
    instructor: 'Maulana Asif Attari Madani (Senior Lecturer, Jamiat-ul-Madina)',
    description: 'ہر مسلمان نوجوان پر دین کی وہ بنیادی معلومات حاصل کرنا فرض عین ہے جس کے بغیر عبادات درست نہیں ہو سکتیں۔ عقائد، طہارت، نماز اور روزمرہ معاملات کی مکمل رہنمائی۔',
    syllabus: [
      'بنیادی اسلامی عقائد اور کفریہ کلمات سے حفاظت',
      'غسل، وضو اور نجاستوں کے احکام و مسائل',
      'نماز کے فرائض، واجبات، مکروہات اور سجدہ سہو',
      'معاملات: غیبت، چغلی، حسد اور گناہوں سے بچنے کی عملی تدابیر'
    ],
    targetAudience: 'Urdu-speaking students and young professionals',
    isPopular: true,
    status: 'Open for Registration'
  },
  {
    id: 'c-7',
    title: 'FOA: Sirat-un-Nabi ﷺ & Seerat-e-Sahaba (سیرت مصطفیٰ و صحابہ)',
    track: 'FOA (Urdu)',
    duration: '8 Weeks',
    schedule: 'Sundays, 4:00 PM - 5:30 PM PKT',
    language: 'Urdu',
    mode: 'Online (Zoom/LMS)',
    instructor: 'Maulana Sajid Attari Madani',
    description: 'حضور خاتم النبیین ﷺ کی پاکیزہ سیرت، نوجوان صحابہ کرام کے ولولہ انگیز واقعات اور عصرِ حاضر میں نوجوانوں کے لیے اسوہ حسنہ پر بصیرت افزا رہنمائی۔',
    syllabus: [
      'ولادت با سعادت سے ہجرت تک کا دلنشین جائزہ',
      'میدانِ عمل میں نوجوان صحابہ کا جرات مندانہ کردار (حضرت علی، حضرت اسامہ، حضرت مصعب)',
      'رحمت للعالمین ﷺ کا اخلاق، شفقت اور تبلیغی حکمت عملی',
      'مغربی معاشرے اور کیمپس لائف میں سنتِ نبوی کا عملی نفاذ'
    ],
    targetAudience: 'Youth desiring deep love and practical adoption of the Sunnah',
    isPopular: false,
    status: 'Open for Registration'
  },

  // Inspirational
  {
    id: 'c-8',
    title: 'The Art of Tazkiyah: Purifying the Heart in a Digital Age',
    track: 'Inspirational',
    duration: '5 Weeks',
    schedule: 'Mondays, 7:00 PM - 8:30 PM GMT',
    language: 'English',
    mode: 'Online (Zoom/LMS)',
    instructor: 'Haji Abdul Habib Attari (Central Executive Shura Member)',
    description: 'Transformative lectures focusing on sincerity (Ikhlas), the reality of death, love of the Prophet ﷺ, and developing a soft, weeping heart for Allah.',
    syllabus: [
      'Why the heart falls spiritually sick and how to diagnose it',
      'The sweet taste of tears shed in solitude for Allah',
      'Company matters: Choosing friends that elevate your Iman',
      'Leaving a lasting legacy: Youth contribution to Islamic revival'
    ],
    targetAudience: 'All young seekers of inspiration and purpose',
    isPopular: true,
    status: 'Starting Soon'
  }
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'ev-1',
    title: 'Annual Youth & Student Convention 2026: Anchored in Faith',
    category: 'University',
    date: '2026-10-18',
    time: '10:00 AM - 6:00 PM',
    location: 'Aston University Hall & Faizan-e-Madina Stechford',
    country: 'United Kingdom',
    city: 'Birmingham',
    speaker: 'Haji Imran Attari & International Scholars',
    description: 'The largest annual gathering of Muslim university students across the UK and Europe. Keynotes on academic excellence, youth leadership, interactive Q&A, and networking lunch.',
    seatsTotal: 1200,
    seatsRegistered: 980,
    isFeatured: true,
    agenda: [
      '10:00 AM - Registration & Welcome Networking',
      '11:00 AM - Keynote: Faith in the Age of Distraction',
      '01:15 PM - Zuhr Prayer & Brotherhood Lunch',
      '02:30 PM - Panel: Navigating Career, Ethics & Social Pressures',
      '04:30 PM - Inspiring Dua & Closing Words'
    ]
  },
  {
    id: 'ev-2',
    title: 'Pre-Exams Spiritual Prep & Mindful Salah Workshop',
    category: 'Youth Circle',
    date: '2026-10-25',
    time: '6:30 PM - 8:30 PM',
    location: 'Faizan-e-Madina Chicago & Live Stream',
    country: 'United States',
    city: 'Chicago, IL',
    speaker: 'Maulana Bilal Attari',
    description: 'Overcoming exam anxiety, perfecting focus in prayer, memorization etiquettes taught by Islamic scholars, and special Duas for academic success.',
    seatsTotal: 300,
    seatsRegistered: 215,
    isFeatured: true,
    agenda: [
      '06:30 PM - Recitation & Hadith on Knowledge',
      '07:00 PM - The Neuroscience & Sunnah of Stress Management',
      '07:45 PM - Collective Dua for Students sitting exams'
    ]
  },
  {
    id: 'ev-3',
    title: 'International Student Welcome & Buddy Orientation',
    category: 'Travel & Retreat',
    date: '2026-11-02',
    time: '2:00 PM - 5:00 PM',
    location: 'Faizan-e-Madina Forest Gate (London)',
    country: 'United Kingdom',
    city: 'London',
    speaker: 'London Youth Coordination Team',
    description: 'Dedicated welcome afternoon for overseas students recently moved to the UK. Get connected with a local buddy, free SIM cards, halal food guide, and study support.',
    seatsTotal: 250,
    seatsRegistered: 190,
    isFeatured: false,
    agenda: [
      '02:00 PM - Welcome Tea & Introductions',
      '02:45 PM - Survival Guide: Transport, Halal Dining & Campus Life',
      '03:45 PM - One-to-One Buddy Pairing Session'
    ]
  },
  {
    id: 'ev-4',
    title: 'Workshop: Digital Adab & Safeguarding the Gaze',
    category: 'Workshop',
    date: '2026-11-12',
    time: '7:00 PM - 9:00 PM',
    location: 'Faizan-e-Madina Karachi & Global Online Stream',
    country: 'Pakistan',
    city: 'Karachi',
    speaker: 'Mufti Ali Asghar Attari (Dar-ul-Ifta Ahlesunnat)',
    description: 'An open, candid session on safeguarding morality in the era of short-form videos, algorithms, artificial intimacy, and social media validation.',
    seatsTotal: 800,
    seatsRegistered: 640,
    isFeatured: false,
    agenda: [
      '07:00 PM - The Psychological Hooks of the Digital Age',
      '07:45 PM - Shar\'i Boundaries of Interaction & Digital Modesty',
      '08:30 PM - Live Anonymous Q&A'
    ]
  },
  {
    id: 'ev-5',
    title: 'European Youth Winter Retreat & Halaqa Camp',
    category: 'Travel & Retreat',
    date: '2026-12-24',
    time: '4 Days (Residential)',
    location: 'Faizan-e-Madina Frankfurt Centre',
    country: 'Germany',
    city: 'Frankfurt',
    speaker: 'European Youth Board Scholars',
    description: 'A transformative 4-day residential winter retreat for young brothers from Germany, France, Italy, Austria, and the Netherlands. Deep study, brotherhood, and outdoor walks.',
    seatsTotal: 180,
    seatsRegistered: 142,
    isFeatured: true,
    agenda: [
      'Day 1 - Arrivals, Tazkiyah of Intentions & Icebreaker',
      'Day 2 - Intensive Fiqh of Modern Living & Tajweed Workshops',
      'Day 3 - Nature Hike, Brotherhood Halaqa & Sunnah Night',
      'Day 4 - Action Plans for Campus Chapters & Final Dua'
    ]
  }
];

export { CENTERS_DATA } from './centersData';

export const ZIMMEDAR_DATA: Zimmedar[] = [
  {
    id: 'zim-uk',
    name: 'Maulana Hamza Attari Madani',
    title: 'UK & Europe Regional Youth Director',
    country: 'United Kingdom',
    region: 'UK & Europe',
    city: 'Birmingham & London',
    email: 'uk.zimmedar@mydeen.net',
    phoneWhatsApp: '+44 7911 204591',
    departmentScope: 'Oversees 48 University ISOC collaborations, 60+ weekly campus halaqas, and annual national student conventions across England, Scotland & Wales.',
    volunteersCount: 48,
    volunteers: [
      { id: 'vol-uk-1', name: 'Zeeshan Ali', role: 'Midlands University Coordinator', university: 'University of Birmingham', city: 'Birmingham', joinedYear: 2022 },
      { id: 'vol-uk-2', name: 'Bilal Farooq', role: 'London Campus Lead', university: 'King\'s College London & UCL', city: 'London', joinedYear: 2023 },
      { id: 'vol-uk-3', name: 'Usman Qadri', role: 'Yorkshire Region Youth Lead', university: 'University of Leeds', city: 'Leeds', joinedYear: 2021 },
      { id: 'vol-uk-4', name: 'Haroon Rashid', role: 'Northwest Student Liaison', university: 'University of Manchester', city: 'Manchester', joinedYear: 2024 },
      { id: 'vol-uk-5', name: 'Sufyan Ahmed', role: 'Scotland Chapters Representative', university: 'University of Glasgow', city: 'Glasgow', joinedYear: 2023 }
    ]
  },
  {
    id: 'zim-usa',
    name: 'Maulana Muhammad Bilal Attari',
    title: 'North America Youth & College Coordinator',
    country: 'United States',
    region: 'North America',
    city: 'Chicago, IL',
    email: 'usa.zimmedar@mydeen.net',
    phoneWhatsApp: '+1 312 804 7792',
    departmentScope: 'Coordinates student initiatives across 32 state universities, online seminars, pre-exam camps, and international student assistance.',
    volunteersCount: 36,
    volunteers: [
      { id: 'vol-us-1', name: 'Zaid Siddiqui', role: 'Midwest Student Lead', university: 'University of Illinois Chicago (UIC)', city: 'Chicago, IL', joinedYear: 2022 },
      { id: 'vol-us-2', name: 'Taha Merchant', role: 'Texas Campus Coordinator', university: 'University of Houston / UT Dallas', city: 'Houston, TX', joinedYear: 2023 },
      { id: 'vol-us-3', name: 'Ali Raza', role: 'East Coast Chapters Lead', university: 'NYU & Rutgers', city: 'New York, NY', joinedYear: 2021 },
      { id: 'vol-us-4', name: 'Owais Khan', role: 'West Coast Liaison', university: 'UC Davis & UC Berkeley', city: 'Sacramento, CA', joinedYear: 2024 }
    ]
  },
  {
    id: 'zim-pk',
    name: 'Maulana Asad Attari Madani',
    title: 'Central Universities & Colleges Wing Head',
    country: 'Pakistan',
    region: 'Pakistan & South Asia',
    city: 'Karachi (Global HQ)',
    email: 'pk.zimmedar@mydeen.net',
    phoneWhatsApp: '+92 300 8251786',
    departmentScope: 'Guides over 350 university and college units across Karachi, Lahore, Islamabad, Faisalabad, Peshawar, and Quetta with weekly Sunnah study groups.',
    volunteersCount: 140,
    volunteers: [
      { id: 'vol-pk-1', name: 'Engr. Saqib Madani', role: 'NED & KU Campus Lead', university: 'NED University & Karachi University', city: 'Karachi', joinedYear: 2020 },
      { id: 'vol-pk-2', name: 'Dr. Faizan Attari', role: 'Medical & Dental Colleges Lead', university: 'Dow University of Health Sciences', city: 'Karachi', joinedYear: 2021 },
      { id: 'vol-pk-3', name: 'Hafiz Umair Qadri', role: 'Punjab Engineering Universities Lead', university: 'UET Lahore & Punjab University', city: 'Lahore', joinedYear: 2022 },
      { id: 'vol-pk-4', name: 'Waleed Khan', role: 'Federal Capital Youth Coordinator', university: 'NUST & FAST Islamabad', city: 'Islamabad', joinedYear: 2023 }
    ]
  },
  {
    id: 'zim-ca',
    name: 'Brother Muhammad Daniyal Attari',
    title: 'Canada Youth & Campus Representative',
    country: 'Canada',
    region: 'North America',
    city: 'Toronto & Mississauga',
    email: 'canada.zimmedar@mydeen.net',
    phoneWhatsApp: '+1 647 982 4491',
    departmentScope: 'Leads student groups across Ontario, Quebec, and Alberta, providing accommodation aid and spiritual mentoring for international students.',
    volunteersCount: 22,
    volunteers: [
      { id: 'vol-ca-1', name: 'Ibrahim Malik', role: 'GTA Universities Lead', university: 'University of Toronto & TMU', city: 'Toronto, ON', joinedYear: 2023 },
      { id: 'vol-ca-2', name: 'Farhan Qureshi', role: 'Peel Region Campus Representative', university: 'McMaster University', city: 'Hamilton/Mississauga', joinedYear: 2022 },
      { id: 'vol-ca-3', name: 'Samiullah Attari', role: 'Western Canada Student Lead', university: 'University of Calgary', city: 'Calgary, AB', joinedYear: 2024 }
    ]
  },
  {
    id: 'zim-de',
    name: 'Brother Tariq Mahmood Attari',
    title: 'Germany & Central Europe Coordinator',
    country: 'Germany',
    region: 'UK & Europe',
    city: 'Frankfurt am Main',
    email: 'germany.zimmedar@mydeen.net',
    phoneWhatsApp: '+49 176 8829 4410',
    departmentScope: 'Assists incoming students with city registrations, student visas, German-English study halaqas, and annual European youth retreats.',
    volunteersCount: 18,
    volunteers: [
      { id: 'vol-de-1', name: 'Amir Sohail', role: 'Frankfurt & Hesse Lead', university: 'Goethe University Frankfurt', city: 'Frankfurt', joinedYear: 2022 },
      { id: 'vol-de-2', name: 'Hamid Raza', role: 'Berlin & Northern Germany Lead', university: 'TU Berlin', city: 'Berlin', joinedYear: 2023 },
      { id: 'vol-de-3', name: 'Mustafa Qadri', role: 'Bavaria Region Coordinator', university: 'LMU Munich', city: 'Munich', joinedYear: 2024 }
    ]
  },
  {
    id: 'zim-it',
    name: 'Brother Muhammad Rizwan Attari',
    title: 'Italy & Southern Europe Youth Lead',
    country: 'Italy',
    region: 'UK & Europe',
    city: 'Brescia & Milan',
    email: 'italy.zimmedar@mydeen.net',
    phoneWhatsApp: '+39 328 410 9982',
    departmentScope: 'Supports Italian-Pakistani youth, organizes Italian language dawah circles, university student networking, and cultural assimilation with faith.',
    volunteersCount: 15,
    volunteers: [
      { id: 'vol-it-1', name: 'Davide Luqman', role: 'Lombardy Student Lead', university: 'Politecnico di Milano', city: 'Milan', joinedYear: 2023 },
      { id: 'vol-it-2', name: 'Kamran Ali', role: 'Brescia Youth Circle Lead', university: 'Università degli Studi di Brescia', city: 'Brescia', joinedYear: 2022 }
    ]
  },
  {
    id: 'zim-sa',
    name: 'Maulana Zubair Attari',
    title: 'South Africa Youth & Student Coordinator',
    country: 'South Africa',
    region: 'Middle East & Africa',
    city: 'Durban',
    email: 'sa.zimmedar@mydeen.net',
    phoneWhatsApp: '+27 82 441 7786',
    departmentScope: 'Drives youth welfare, community kitchen projects, university study groups across UKZN and Wits, and anti-substance abuse campaigns.',
    volunteersCount: 26,
    volunteers: [
      { id: 'vol-sa-1', name: 'Mikaeel Patel', role: 'KwaZulu-Natal Campus Lead', university: 'University of KwaZulu-Natal', city: 'Durban', joinedYear: 2022 },
      { id: 'vol-sa-2', name: 'Junaid Khan', role: 'Gauteng Universities Lead', university: 'University of the Witwatersrand', city: 'Johannesburg', joinedYear: 2023 }
    ]
  },
  {
    id: 'zim-au',
    name: 'Brother Shahzad Ahmad Attari',
    title: 'Australia & New Zealand Youth Lead',
    country: 'Australia',
    region: 'Asia Pacific',
    city: 'Sydney',
    email: 'australia.zimmedar@mydeen.net',
    phoneWhatsApp: '+61 410 992 481',
    departmentScope: 'Operates student arrival buddy networks for Sydney, Melbourne, and Brisbane, linking overseas students with local housing and halal circles.',
    volunteersCount: 19,
    volunteers: [
      { id: 'vol-au-1', name: 'Hassan Bashir', role: 'NSW Universities Lead', university: 'UNSW & University of Sydney', city: 'Sydney', joinedYear: 2023 },
      { id: 'vol-au-2', name: 'Zubair Qasim', role: 'Victoria Campus Lead', university: 'Monash University & RMIT', city: 'Melbourne', joinedYear: 2024 }
    ]
  }
];

export const BOOKS_DATA: Book[] = [
  {
    id: 'b-1',
    title: 'Welcome to Islam',
    author: 'Ameer-e-Ahlesunnat Hazrat Allama Maulana Ilyas Qadri',
    category: 'Islamic Knowledge',
    language: 'English',
    pages: 144,
    description: 'An inspiring and compassionate guide for new Muslims, young seekers, and university students seeking clear answers on Islamic creed, the Five Pillars, and spiritual peace.',
    topics: ['Creed & Tawheed', 'The Beauty of Islam', 'Daily Life & Prayer', 'Clearing Common Doubts'],
    coverColor: 'emerald'
  },
  {
    id: 'b-2',
    title: 'Blessings of Sunnah (Faizan-e-Sunnat)',
    author: 'Ameer-e-Ahlesunnat Hazrat Allama Maulana Ilyas Qadri',
    category: 'Sunnah & Etiquette',
    language: 'Both',
    pages: 360,
    description: 'The monumental daily guide to adopting the blessed Sunnahs of Prophet Muhammad ﷺ in eating, drinking, sleeping, conversational adab, and maintaining clean moral conduct.',
    topics: ['Etiquettes of Eating & Drinking', 'Sunnahs of Sleeping & Waking', 'Etiquettes of Speech', 'Blessings of Durood-o-Salam'],
    coverColor: 'indigo'
  },
  {
    id: 'b-3',
    title: 'Cure for Sins (Batin ki Bimariyan - باطن کی بیماریاں)',
    author: 'Allama Maulana Muhammad Ilyas Attar Qadri',
    category: 'Character & Tazkiyah',
    language: 'Both',
    pages: 220,
    description: 'A critical medical manual for the soul. Breaks down the destructive spiritual illnesses plaguing youth: jealousy, arrogance, ostentation, malice, and provides practical prescriptions for recovery.',
    topics: ['Jealousy (Hasad) & Cure', 'Arrogance (Kibr) & Humility', 'Showing Off (Riya)', 'Controlling the Tongue & Eyes'],
    coverColor: 'purple'
  },
  {
    id: 'b-4',
    title: 'Method of Salah (Namaz ka Tareeqah - نماز کا طریقہ)',
    author: 'Majlis Al-Madinah-tul-Ilmiyyah (Scholarly Board)',
    category: 'Islamic Knowledge',
    language: 'Both',
    pages: 96,
    description: 'Full illustrated and step-by-step authoritative breakdown of how to perform Wudu, Ghusl, Tayammum, and 5 daily prayers according to the authentic Hanafi Fiqh with rulings on missed prayers.',
    topics: ['Step-by-step Wudu with Diagrams', 'The Method of 5 Prayers', 'Sujud as-Sahw', 'Rulings for Travelers (Musafir)'],
    coverColor: 'cyan'
  },
  {
    id: 'b-5',
    title: 'Youth & Character: A Guide for Modern Students',
    author: 'Department of Youth & Universities, Dawateislami',
    category: 'Youth Guidance',
    language: 'English',
    pages: 128,
    description: 'Tailored specifically for teenagers and university students. Discusses exam stress, toxic friendships, modesty in co-ed environments, social media discipline, and respecting parents.',
    topics: ['Choosing True Friends', 'Screen Time & Digital Adab', 'Academic Ambition with Taqwa', 'Respect of Teachers & Parents'],
    coverColor: 'amber'
  },
  {
    id: 'b-6',
    title: 'Laws of Salah (Namaz kay Ahkam)',
    author: 'Ameer-e-Ahlesunnat Hazrat Allama Maulana Ilyas Qadri',
    category: 'Islamic Knowledge',
    language: 'Both',
    pages: 284,
    description: 'An essential reference handbook detailing common mistakes made in prayer, situations invalidating prayer, rulings of Jumu\'ah, Eid prayers, Janazah, and congregational etiquette.',
    topics: ['Things that Invalidate Salah', 'Etiquettes of the Masjid', 'Funeral Prayer (Janazah) Rulings', 'Virtues of Tahajjud'],
    coverColor: 'emerald'
  },
  {
    id: 'b-7',
    title: '40 Hadiths on Knowledge & Character',
    author: 'Compiled by Maktaba-tul-Madina',
    category: 'Youth Guidance',
    language: 'English',
    pages: 80,
    description: 'A curated selection of 40 authentic Hadiths with concise contemporary commentary addressing student diligence, sincerity in study, seeking beneficial knowledge, and helping mankind.',
    topics: ['Virtue of Seeking Knowledge', 'Sincerity in Academic Pursuits', 'Kindness to Living Beings', 'Restraining Anger'],
    coverColor: 'indigo'
  },
  {
    id: 'b-8',
    title: 'Repentance (Tawbah): The Door That Never Closes',
    author: 'Allama Maulana Muhammad Ilyas Attar Qadri',
    category: 'Character & Tazkiyah',
    language: 'Both',
    pages: 112,
    description: 'An emotionally stirring and uplifting work for any young person burdened by guilt or relapse into bad habits. Explains how to make true Tawbah and regain closeness to Allah.',
    topics: ['The 3 Conditions of Sincere Tawbah', 'Overcoming Despair in Allah\'s Mercy', 'Steps to Break Repeat Habits', 'Stories of Transformed Youth'],
    coverColor: 'purple'
  }
];

export const QURAN_SEERAH_HIGHLIGHTS = {
  quranPortalUrl: 'https://www.dawateislami.net/quran',
  seerahPortalUrl: 'https://aboutmuhammad.net',
  featuredVerse: {
    arabic: 'وَقُل رَّبِّ زِدْنِي عِلْمًا',
    translation: '“And say: My Lord, increase me in knowledge.” (Surah Ta-Ha 20:114)',
    reflection: 'The foundation of student life: every lecture, experiment, and book is illuminated when undertaken with the intention of pleasing the Creator and benefiting His creation.'
  },
  youthInSeerah: [
    {
      name: 'Hazrat Ali ibn Abi Talib (رضي الله عنه)',
      ageAtAcceptance: 'Approx. 10 years old',
      lesson: 'Courage & Intellectual Mastery: Slept in the blessed bed of the Prophet ﷺ on the night of Hijrah without fear, and grew to become the gateway of knowledge.'
    },
    {
      name: 'Hazrat Usama bin Zaid (رضي الله عنه)',
      ageAtAcceptance: '18 years old when appointed commander',
      lesson: 'Trust in Youth Leadership: Entrusted by the Prophet ﷺ to lead an army of senior Sahaba, proving that maturity is measured by faith and competence, not merely age.'
    },
    {
      name: 'Hazrat Mus\'ab bin Umayr (رضي الله عنه)',
      ageAtAcceptance: 'Young aristocrat turned ambassador',
      lesson: 'Sacrifice of Wealth for Higher Purpose: Left luxurious garments to become the very first ambassador of Islam sent to Madinah, winning hearts through gentle Quranic recitation.'
    },
    {
      name: 'Hazrat Zayd ibn Thabit (رضي الله عنه)',
      ageAtAcceptance: 'Youth in early twenties',
      lesson: 'Linguistic & Technological Diligence: Mastered languages at the direct request of the Prophet ﷺ and became the chief compiler and scribe of the Holy Quran.'
    }
  ],
  quranFeatures: [
    { title: 'Tafseer Sirat-ul-Jinan', desc: 'Accessible verse-by-verse commentary resolving contemporary questions and moral lessons.' },
    { title: 'Word-by-Word Audio Recitation', desc: 'Repeat-after-Qari functionality for polishing articulation points (Makharij).' },
    { title: 'Search by Topic & Ayat', desc: 'Quickly find Quranic verses on science, character, parents, justice, and repentance.' }
  ]
};

export const SHARI_QUESTION_CATEGORIES = [
  'Campus & Academic Life',
  'Career, Contracts & Crypto',
  'Social Media & Digital Ethics',
  'Prayer, Fasting & Traveling',
  'Marriage, Family & Gender Interaction',
  'Doubts, Ideology & Modern Philosophy'
];
