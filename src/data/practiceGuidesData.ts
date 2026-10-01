export interface GuideStep {
  stepNumber: string | number;
  title: string;
  illustrationIcon: string;
  description: string;
  arabic?: string;
  transliteration?: string;
  translation?: string;
  tip?: string;
  warning?: string;
  note?: string;
  extraInfo?: {
    title: string;
    items: string[];
  };
  videoUrl?: string;
  hasPrayerTable?: boolean;
}

export interface PracticeGuide {
  id: 'salah' | 'wudu' | 'ghusl';
  title: string;
  shortDesc: string;
  badge: string;
  icon: string;
  totalSteps: number;
  buttonText: string;
  steps: GuideStep[];
}

export const PRACTICE_GUIDES: Record<'salah' | 'wudu' | 'ghusl', PracticeGuide> = {
  salah: {
    id: 'salah',
    title: 'How To Pray Salah',
    shortDesc: 'Complete step-by-step guide to performing the five daily prayers with proper postures and recitations.',
    badge: 'Complete Guide',
    icon: '🕌',
    totalSteps: 16,
    buttonText: 'Learn Prayer →',
    steps: [
      {
        stepNumber: 'ℹ️',
        title: 'Introduction to Salah',
        illustrationIcon: '🕌',
        description: 'Salah (prayer) is the second pillar of Islam and a direct spiritual connection between the worshipper and Allah Almighty. It is obligatory five times daily upon every sane, mature Muslim.',
        hasPrayerTable: true,
        extraInfo: {
          title: 'Essential Pre-conditions (Shurut) for Salah:',
          items: [
            'Purity (Taharah): The body, clothing, and place of prayer must be free from physical and ritual impurities (Wudu/Ghusl).',
            'Veiling (Satr): Men must cover from the navel down to and including the knees. Women must cover their entire body except face, palms, and feet.',
            'Facing the Qiblah: Positioning oneself towards the Holy Ka\'bah in Makkah.',
            'Prescribed Timing: Ensuring the prayer is offered within its designated Shar\'i window.',
            'Niyyah (Intention): The firm resolution of the heart to pray the specific prayer.',
            'Takbir-e-Tahrimah: Commencing prayer with the utterance of "Allahu Akbar".'
          ]
        },
        note: 'This interactive tutorial covers the foundational 2-Rakat prayer (such as Fajr). The steps and postures form the universal core for 3 and 4 Rakat prayers.'
      },
      {
        stepNumber: 1,
        title: 'Niyyah (Intention) & Takbir',
        illustrationIcon: '🤲',
        description: 'Stand facing the Qiblah with feet a few inches apart. Form the intention in your heart for the specific prayer you are about to perform.',
        arabic: 'اللَّهُ أَكْبَر',
        transliteration: 'Allahu Akbar',
        translation: 'Allah is the Greatest.',
        tip: 'Raise both hands up to earlobes (thumbs touching earlobes for men; up to shoulders for women) with palms facing the Qiblah, then utter "Allahu Akbar".'
      },
      {
        stepNumber: 2,
        title: 'Qiyam (Standing Position) & Thana',
        illustrationIcon: '🧍',
        description: 'Fold your hands below the navel (right hand grasping left wrist for men; hands on chest for women). Keep your gaze focused on the place of prostration (Sajdah).',
        arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ',
        transliteration: 'Subhanak-Allahumma wa bihamdika wa tabarakasmuka wa ta\'ala jadduka wa la ilaha ghayruk.',
        translation: 'Glory be to You, O Allah, and praise be to You. Blessed is Your Name and Exalted is Your Majesty. There is no god worthy of worship except You.',
        note: 'After Thana, recite Ta\'awwuz: "A\'udhu billahi minash-shaytanir-rajeem" and Tasmiyah: "Bismillahir-Rahmanir-Raheem" in a low voice.'
      },
      {
        stepNumber: 3,
        title: 'Recite Surah Al-Fatiha',
        illustrationIcon: '📖',
        description: 'Reciting Surah Al-Fatiha (The Opening Chapter) is obligatory in every Rakat of prayer.',
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        transliteration: 'Alhamdulillahi Rabbil \'alameen. Ar-Rahmanir-Raheem. Maliki Yawmid-Deen. Iyyaka na\'budu wa iyyaka nasta\'een. Ihdinas-siratal-mustaqeem. Siratal-ladhina an\'amta \'alayhim ghayril-maghdubi \'alayhim wa lad-dalleen.',
        translation: 'All praises belong to Allah, Lord of all the worlds. The Most Gracious, Most Merciful. Master of the Day of Judgment. You alone do we worship and You alone do we ask for help. Guide us to the straight path. The path of those You have blessed, not of those who incur anger, nor of those who go astray.',
        tip: 'After concluding Surah Al-Fatiha, recite "Ameen" softly.'
      },
      {
        stepNumber: 4,
        title: 'Recite an Additional Surah',
        illustrationIcon: '📜',
        description: 'In the first two Rakats of prayer, recite an additional Surah or at least three short verses. Here is Surah Al-Ikhlas:',
        arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ',
        transliteration: 'Qul Huwa Allahu Ahad. Allahus-Samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad.',
        translation: 'Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.',
        tip: 'You can recite any Surah you have memorized, such as Al-Ikhlas, Al-Falaq, An-Nas, or Al-Kawthar.'
      },
      {
        stepNumber: 5,
        title: 'Ruku (Bowing Down)',
        illustrationIcon: '🙇',
        description: 'Utter "Allahu Akbar" and bow down smoothly. Grasp your knees firmly with fingers spread apart. Keep your back straight horizontal, head aligned, and eyes fixed at the feet.',
        arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
        transliteration: 'Subhana Rabbiyal \'Azeem',
        translation: 'Glory be to my Magnificent Lord.',
        tip: 'Recite this supplication at least three times calmly while remaining stationary in Ruku.'
      },
      {
        stepNumber: 6,
        title: 'Standing After Ruku (Qawmah)',
        illustrationIcon: '🧍',
        description: 'Rise from Ruku back to an erect standing posture while uttering the Tasmee\':',
        arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ',
        transliteration: 'Sami\' Allahu liman hamidah',
        translation: 'Allah listens to the one who praises Him.',
        note: 'Upon standing completely straight, recite Tahmeed: "Rabbana wa lakal hamd" (O our Lord, all praise is for You). Remain still for at least the time it takes to say Subhanallah.'
      },
      {
        stepNumber: 7,
        title: 'First Sujood (Prostration)',
        illustrationIcon: '🙇‍♂️',
        description: 'Say "Allahu Akbar" and descend into prostration: knees touch the ground first, then hands, then nose, then forehead between the hands. Press the forehead and nose firmly.',
        arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
        transliteration: 'Subhana Rabbiyal A\'la',
        translation: 'Glory be to my Lord, the Most High.',
        tip: 'Recite this at least three times. Keep toes pointed towards Qiblah with soles upright. Forearms should be raised off the floor, arms kept away from ribs (unless praying in congregational row).'
      },
      {
        stepNumber: 8,
        title: 'Sitting Between Prostrations (Jalsah)',
        illustrationIcon: '🧎',
        description: 'Say "Allahu Akbar" and rise from Sajdah into an upright seated posture. Lay your left foot flat beneath you and keep the right foot upright with toes facing Qiblah. Hands rest on thighs near the knees.',
        arabic: 'اللَّهُمَّ اغْفِرْلِي',
        transliteration: 'Allahummaghfir li',
        translation: 'O Allah, forgive me.',
        tip: 'Pause completely in Jalsah until your spine settles before going into the second prostration.'
      },
      {
        stepNumber: 9,
        title: 'Second Sujood (Prostration)',
        illustrationIcon: '🙇‍♂️',
        description: 'Say "Allahu Akbar" and prostrate again in the exact same manner as the first prostration.',
        arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
        transliteration: 'Subhana Rabbiyal A\'la',
        translation: 'Glory be to my Lord, the Most High.',
        note: 'Recite at least three times. This concludes the first complete Rakat of your prayer.'
      },
      {
        stepNumber: 10,
        title: 'Rising for the Second Rakat',
        illustrationIcon: '🧍',
        description: 'Say "Allahu Akbar" and stand up for the second Rakat using the support of your feet and knees without unnecessarily resting hands on the ground.',
        extraInfo: {
          title: 'Second Rakat Sequence:',
          items: [
            'Recite Bismillah and Surah Al-Fatiha',
            'Recite an additional Surah (e.g., Al-Falaq or An-Nas)',
            'Ruku with Subhana Rabbiyal \'Azeem (3 times)',
            'Rise into Qawmah with Sami\' Allahu liman hamidah and Rabbana wa lakal hamd',
            'First Sajdah (3 times Subhana Rabbiyal A\'la)',
            'Sit in Jalsah with Allahummaghfir li',
            'Second Sajdah (3 times Subhana Rabbiyal A\'la)',
            'Remain seated for Qa\'dah (Tashahhud)'
          ]
        },
        tip: 'Do not stand up after the second Sajdah of the second Rakat; instead, remain seated for Tashahhud.'
      },
      {
        stepNumber: 11,
        title: 'Tashahhud (At-Tahiyyat)',
        illustrationIcon: '🧎',
        description: 'Sit in Qa\'dah and recite the At-Tahiyyat supplication. When reaching the Shahadah (testimony of faith), form a circle with thumb and middle finger and raise your index finger at "Ash-hadu an la ilaha" without waving, then lower it at "illallah".',
        arabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
        transliteration: 'At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu \'alayka ayyuhan-Nabiyyu wa rahmatullahi wa barakatuh. As-salamu \'alayna wa \'ala \'ibadillahis-salihin. Ash-hadu an la ilaha illallah wa ash-hadu anna Muhammadan \'abduhu wa rasuluh.',
        translation: 'All verbal, physical, and monetary worships are for Allah Almighty. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I testify that there is none worthy of worship except Allah, and I testify that Muhammad is His servant and Messenger.'
      },
      {
        stepNumber: 12,
        title: 'Durood-e-Ibrahim (Salutations)',
        illustrationIcon: '📿',
        description: 'Following Tashahhud, invoke peace and blessings upon the Beloved Prophet Muhammad ﷺ and Prophet Ibrahim (A.S):',
        arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
        transliteration: 'Allahumma salli \'ala Muhammadin wa \'ala ali Muhammad, kama sallayta \'ala Ibrahima wa \'ala ali Ibrahim, innaka Hamidun Majid. Allahumma barik \'ala Muhammadin wa \'ala ali Muhammad, kama barakta \'ala Ibrahima wa \'ala ali Ibrahim, innaka Hamidun Majid.',
        translation: 'O Allah, bestow Your blessings upon Muhammad and upon the family of Muhammad, as You bestowed blessings upon Ibrahim and upon the family of Ibrahim. Indeed, You are Praiseworthy, Glorious. O Allah, prosper Muhammad and the family of Muhammad, as You prospered Ibrahim and the family of Ibrahim. Indeed, You are Praiseworthy, Glorious.'
      },
      {
        stepNumber: 13,
        title: 'Du\'a-e-Masurah (Supplication Before Salam)',
        illustrationIcon: '🤲',
        description: 'Recite a traditional Quranic or Prophetic supplication before concluding the prayer:',
        arabic: 'اللَّهُمَّ رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ • رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ',
        transliteration: 'Allahumma Rabbi-j\'alni muqimas-salati wa min dhurriyyati, Rabbana wa taqabbal du\'a. Rabbanagh-fir li wa li-walidayya wa lil-mu\'minina yawma yaqumul-hisab.',
        translation: 'O Lord! Make me steadfast in prayer, and also of my offspring; Our Lord! Accept my prayer. Our Lord! Forgive me and my parents and all believers on the Day the reckoning takes place.'
      },
      {
        stepNumber: 14,
        title: 'Tasleem (Exiting the Prayer)',
        illustrationIcon: '🕊️',
        description: 'Turn your face gently to the right shoulder and say: "As-salamu \'alaykum wa rahmatullah" (Peace and mercy of Allah be upon you). Then turn your face to the left shoulder and repeat the same.',
        arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
        transliteration: 'As-salamu \'alaykum wa rahmatullah',
        translation: 'Peace and mercy of Allah be upon you.',
        note: 'With the completion of the second Salam, your prayer is formally concluded.'
      },
      {
        stepNumber: 15,
        title: 'Post-Salah Dhikr & Sunnah Invocations',
        illustrationIcon: '🌟',
        description: 'Remain seated to engage in heartfelt remembrance of Allah (Dhikr) and personal Dua:',
        extraInfo: {
          title: 'Beloved Sunnah Adhkar:',
          items: [
            'Astaghfirullah (3 times) — Seeking forgiveness from Allah',
            'Ayatul Kursi (Surah Al-Baqarah: 255) — For protection and immense reward',
            'Subhanallah (33 times) — Glory be to Allah',
            'Alhamdulillah (33 times) — All praise is due to Allah',
            'Allahu Akbar (34 times) — Allah is the Greatest',
            'Du\'a for academic success, family guidance, and the Ummah'
          ]
        },
        tip: 'Congratulations! You have performed the Salah correctly in accordance with authentic Sunni Hanafi jurisprudence.'
      }
    ]
  },

  wudu: {
    id: 'wudu',
    title: 'How to Perform Wudu',
    shortDesc: 'Step-by-step interactive guide showing you how to perform ablution (wudu) before prayer.',
    badge: '11 Steps',
    icon: '💧',
    totalSteps: 11,
    buttonText: 'Learn Wudu →',
    steps: [
      {
        stepNumber: 1,
        title: 'Intention (Niyyah)',
        illustrationIcon: '💭',
        description: 'Make the intention in your heart to perform Wudu for the sake of ritual purification and obedience to Allah Almighty.',
        tip: 'An intention is the firm resolution of your heart. It is recommended to pronounce it verbally: "I intend to perform Wudu to fulfill a commandment of Allah Almighty and attain purity."'
      },
      {
        stepNumber: 2,
        title: 'Say Bismillah',
        illustrationIcon: '🕌',
        description: 'Begin your ablution with the name of Allah Almighty. This is an emphasized Sunnah that brings immense blessing (Barakah) to your purification.',
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
        transliteration: 'Bismillahir-Rahmanir-Raheem',
        translation: 'In the name of Allah, the Most Gracious, the Most Merciful.',
        tip: 'If performing Wudu inside a combined bathroom/toilet area, pronounce Bismillah before entering or silently within your mind.'
      },
      {
        stepNumber: 3,
        title: 'Wash Both Hands Up to the Wrists',
        illustrationIcon: '🤲',
        description: 'Wash both hands up to the wrists three times, making sure water flows between all fingers. Perform Khilal (interlacing the wet fingers of both hands to ensure water reaches all areas).',
        tip: 'Always start with the right hand, then wash the left hand.'
      },
      {
        stepNumber: 4,
        title: 'Rinse the Mouth (Madmadah)',
        illustrationIcon: '💧',
        description: 'Take water in your right palm and rinse your mouth three times, ensuring water reaches all corners of the mouth up to the throat. Gargle thoroughly if you are not fasting (Sawm).',
        tip: 'Using Miswak (toothstick) before this step carries tremendous spiritual reward and oral hygiene benefit.'
      },
      {
        stepNumber: 5,
        title: 'Clean the Nose (Istinshaq)',
        illustrationIcon: '👃',
        description: 'Sniff water gently into the nostrils three times using the right hand. Clean the nostrils using the left hand, using the little finger to remove any particles.',
        tip: 'Sniff lightly and blow out softly using the left hand.'
      },
      {
        stepNumber: 6,
        title: 'Wash the Entire Face',
        illustrationIcon: '✨',
        description: 'Pour water over the entire face three times, from the top of the forehead (natural hairline) down to below the chin, and horizontally from earlobe to earlobe without leaving a single dry spot.',
        tip: 'Men with beards should pass wet fingers through the beard (Khilal) to reach the roots.'
      },
      {
        stepNumber: 7,
        title: 'Wash Arms Up to and Including Elbows',
        illustrationIcon: '💪',
        description: 'Wash the right forearm from the fingertips up to and past the elbow three times. Then wash the left arm in the exact same manner three times.',
        warning: 'Ensure the elbows are completely wet; leaving even a hair-breadth dry invalidates the Wudu.'
      },
      {
        stepNumber: 8,
        title: 'Wipe the Head (Masah)',
        illustrationIcon: '💆',
        description: 'Moisten your hands with fresh water. Join the tips of the three middle fingers of both hands, place them at the forehead hairline, and wipe backward to the nape of the neck once, then bring the palms back to the front.',
        tip: 'This act is performed only once using clean moisture on the hands.'
      },
      {
        stepNumber: 9,
        title: 'Wipe the Ears and Neck',
        illustrationIcon: '👂',
        description: 'Using the same moisture on your hands, use your index fingers to wipe the inner contours of the ears, your thumbs to wipe behind the ears, and the back of your fingers to wipe the back of your neck.',
        note: 'Do not wipe the throat (front of the neck), as doing so is not from the Sunnah.'
      },
      {
        stepNumber: 10,
        title: 'Wash Both Feet Up to the Ankles',
        illustrationIcon: '🦶',
        description: 'Wash your right foot three times from the toes up to and including the ankle. Perform Khilal between toes using the little finger of the left hand, beginning from the small toe to the big toe. Repeat for the left foot.',
        tip: 'Make sure the heel and Achilles tendon are thoroughly covered with water.'
      },
      {
        stepNumber: 11,
        title: 'Completion Dua & Shahadah',
        illustrationIcon: '🎉',
        description: 'Look towards the sky or stand facing the Qiblah and recite the Kalimah Shahadah and the Sunnah supplication:',
        arabic: 'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ • اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ',
        transliteration: 'Ash-hadu an la ilaha illallahu wahdahu la sharika lah, wa ash-hadu anna Muhammadan \'abduhu wa rasuluh. Allahummaj-\'alni minat-tawwabina waj-\'alni minal-mutatahhireen.',
        translation: 'I bear witness that there is no god worthy of worship except Allah alone without partner, and I bear witness that Muhammad is His servant and Messenger. O Allah, make me of those who repent continually and make me of those who purify themselves.',
        tip: 'Hadith: Whoever performs Wudu thoroughly and recites this Dua, all eight gates of Paradise are opened for him to enter through whichever he wills.'
      }
    ]
  },

  ghusl: {
    id: 'ghusl',
    title: 'How to Perform Ghusl',
    shortDesc: 'A simple guide to performing the full-body ritual bath (ghusl).',
    badge: '12 Steps',
    icon: '🚿',
    totalSteps: 12,
    buttonText: 'Learn Ghusl →',
    steps: [
      {
        stepNumber: 'ℹ️',
        title: 'What is Ghusl & When is it Obligatory?',
        illustrationIcon: '🚿',
        description: 'Ghusl is the complete ritual washing of the entire body with water. It restores the Muslim from major ritual impurity (Janabah) back to pure worship eligibility.',
        extraInfo: {
          title: 'When is Ghusl Compulsory (Fard)?',
          items: [
            'Following marital intimacy / sexual intercourse',
            'Discharge of semen due to desire / orgasm (in sleep or wakefulness)',
            'Following nocturnal emission (wet dream)',
            'At the termination of menstruation (Hayd)',
            'At the termination of post-natal bleeding (Nifas)'
          ]
        },
        note: 'Ghusl is also highly recommended (Sunnah) on Fridays before the Jummah prayer and on the two Eid mornings.'
      },
      {
        stepNumber: 1,
        title: 'Form the Intention (Niyyah)',
        illustrationIcon: '💭',
        description: 'Resolve in your heart to perform Ghusl to eliminate ritual impurity and attain purity for the pleasure of Allah Almighty. No verbal utterance is required inside the bathroom.',
        tip: 'Intend in your heart: "I am performing Ghusl to purify myself from ritual impurity in order to pray."'
      },
      {
        stepNumber: 2,
        title: 'Say Bismillah Before Entering',
        illustrationIcon: '🕌',
        description: 'Say Bismillah before entering the shower or bathroom area to invoke divine blessing upon your purification.',
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
        warning: 'If you are already inside a bathroom that contains a toilet commode, do not pronounce Bismillah with your tongue; intend it in your heart.'
      },
      {
        stepNumber: 3,
        title: 'Wash Hands Up to Wrists',
        illustrationIcon: '🤲',
        description: 'Wash both hands up to the wrists three times, rubbing between the fingers (Khilal) to ensure cleanliness before touching water vessels or body parts.'
      },
      {
        stepNumber: 4,
        title: 'Cleanse Private Parts & Impurities',
        illustrationIcon: '🧼',
        description: 'Using your left hand, wash away any physical filth (Najasah) and cleanse the private parts thoroughly, even if no visible impurity is apparent.',
        note: 'Ensuring personal cleanliness first allows the subsequent water flow to remain completely pure.'
      },
      {
        stepNumber: 5,
        title: 'Perform Full Wudu (Ablution)',
        illustrationIcon: '💧',
        description: 'Perform complete Wudu as done for prayer: rinse mouth and nose deeply (exaggerating if not fasting), wash face, and wash arms up to elbows. You may delay washing feet until the end if water accumulates beneath you.',
        tip: 'Rinsing the entire mouth and sniffing water up into the nasal bone are Fard (obligatory) elements of Ghusl in Hanafi Fiqh.'
      },
      {
        stepNumber: 6,
        title: 'Pour Water Over the Right Shoulder',
        illustrationIcon: '🚿',
        description: 'Pour clean water over your right shoulder and right side of the body three times, rubbing with your hand so the water reaches every contour.',
        tip: 'Beginning with the right side is a blessed Sunnah of Prophet Muhammad ﷺ.'
      },
      {
        stepNumber: 7,
        title: 'Pour Water Over the Left Shoulder',
        illustrationIcon: '🚿',
        description: 'Pour clean water over your left shoulder and left side of the body three times, massaging the torso, ribs, and legs with your hand.'
      },
      {
        stepNumber: 8,
        title: 'Pour Water Over the Head',
        illustrationIcon: '💆',
        description: 'Pour water over your entire head three times, massaging the scalp thoroughly so that water reaches the roots of every individual hair.',
        note: 'For women with braided hair: if water can reach the scalp roots without unbraiding, the braids do not need to be unraveled. However, if hair is tight or gelled and roots remain dry, it must be untied.'
      },
      {
        stepNumber: 9,
        title: 'Wash the Entire Body Without Omission',
        illustrationIcon: '🌊',
        description: 'Flow water over the entire body from head to toe three times. Rub all areas with your hands to guarantee that not even a single hair-breadth remains dry.',
        extraInfo: {
          title: 'Critical Spots Requiring Attention:',
          items: [
            'Inside the ears and folds behind them',
            'Under the armpits and beneath skin folds',
            'Inside the navel cavity (use finger to moisten)',
            'Between fingers, toes, and skin crevices',
            'Beard roots and body hair'
          ]
        },
        warning: 'If even a pinpoint area of the skin or a single hair root remains dry, the Ghusl remains incomplete.'
      },
      {
        stepNumber: 10,
        title: 'Step Away and Wash the Feet',
        illustrationIcon: '🦶',
        description: 'Step slightly away from the wash area to a clean, dry surface and wash both feet thoroughly up to the ankles, right foot first, then left.',
        tip: 'This completes the physical washing routine and ensures no residual soapy runoff stays on the feet.'
      },
      {
        stepNumber: 11,
        title: 'Drying & Modesty Guidelines',
        illustrationIcon: '🔒',
        description: 'Dry your body with a clean towel and dress with dignity. Keep your Satr (private areas) covered and observe modesty at all times.',
        tip: 'Neither speak unnecessary words during Ghusl nor recite holy verses aloud while unclothed.'
      },
      {
        stepNumber: 12,
        title: 'Completion & Shahadah',
        illustrationIcon: '🎉',
        description: 'Once dressed, recite the Kalimah Shahadah:',
        arabic: 'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
        transliteration: 'Ash-hadu an la ilaha illallahu wahdahu la sharika lah, wa ash-hadu anna Muhammadan \'abduhu wa rasuluh.',
        translation: 'I bear witness that there is none worthy of worship except Allah alone without partner, and I bear witness that Muhammad is His servant and Messenger.',
        note: 'Alhamdulillah! You are now in a complete state of ritual purity (Taharah) and fully eligible to pray, touch the Holy Quran, and enter the Masjid.'
      }
    ]
  }
};
