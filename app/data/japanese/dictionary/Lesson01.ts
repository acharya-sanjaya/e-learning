const words = [
  {
    en: "I",
    np: "म",
    jp: "わたし",
    kanji: "私",
    romaji: "Watashi",
  },
  {
    en: "My",
    np: "मेरो",
    jp: "わたしの",
    kanji: "私の",
    romaji: "Watashi no",
  },
  {
    en: "You",
    np: "तपाईं",
    jp: "あなた",
    kanji: "あなた",
    romaji: "Anata",
  },
  {
    en: "Your",
    np: "तपाईंको",
    jp: "あなたの",
    kanji: "あなたの",
    romaji: "Anata no",
  },
  {
    en: "Person",
    np: "मानिस",
    jp: "ひと",
    kanji: "人",
    romaji: "Hito",
  },
  {
    en: "Person (polite)",
    np: "व्यक्ति",
    jp: "かた",
    kanji: "方",
    romaji: "Kata",
  },
  {
    en: "That person",
    np: "उ",
    jp: "あのひと",
    kanji: "あの人",
    romaji: "Ano hito",
  },
  {
    en: "That person (formal)",
    np: "उहाँ",
    jp: "あのかた",
    kanji: "あの方",
    romaji: "Ano kata",
  },
  {
    en: "Mr./Mrs. (Used after person's name for respect)",
    np: "जी (नामको पछाडि सम्मान जनाउन प्रयोग गरिने)",
    jp: "さん",
    kanji: "さん",
    romaji: "San",
  },
  {
    en: "Dear (used after little girls' name)",
    np: "साना केटीहरुको नाममा माया दर्शाउन प्रयोग गरिने",
    jp: "ちゃん",
    kanji: "ちゃん",
    romaji: "Chan",
  },
  {
    en: "Nationality",
    np: "नागरिक",
    jp: "じん",
    kanji: "人",
    romaji: "Jin",
  },
  {
    en: "American",
    np: "अमेरिकी नागरिक",
    jp: "アメリカじん",
    kanji: "アメリカ人",
    romaji: "Amerika jin",
  },
  {
    en: "Teacher",
    np: "शिक्षक",
    jp: "せんせい",
    kanji: "先生",
    romaji: "Sensei",
  },
  {
    en: "Master",
    np: "प्रशिक्षक",
    jp: "きょうし",
    kanji: "教師",
    romaji: "Kyoushi",
  },
  {
    en: "Student",
    np: "विद्यार्थी",
    jp: "がくせい",
    kanji: "学生",
    romaji: "Gakusei",
  },
  {
    en: "Company employee",
    np: "कम्पनीको कर्मचारी",
    jp: "かいしゃいん",
    kanji: "会社員",
    romaji: "Kaishain",
  },
  {
    en: "Employee of ~",
    np: "~ को कर्मचारी",
    jp: "しゃいん",
    kanji: "社員",
    romaji: "Shain",
  },
  {
    en: "Bank",
    np: "बैंक",
    jp: "ぎんこう",
    kanji: "銀行",
    romaji: "Ginkou",
  },
  {
    en: "Bank employee",
    np: "बैंकको कर्मचारी",
    jp: "ぎんこういん",
    kanji: "銀行員",
    romaji: "Ginkouin",
  },
  {
    en: "Doctor",
    np: "चिकित्सक / डाक्टर",
    jp: "いしゃ",
    kanji: "医者",
    romaji: "Isha",
  },
  {
    en: "Researcher",
    np: "अनुसन्धानकर्ता",
    jp: "けんきゅうしゃ",
    kanji: "研究者",
    romaji: "Kenkyousha",
  },
  {
    en: "Who",
    np: "को",
    jp: "だれ",
    kanji: "誰",
    romaji: "Dare",
  },
  {
    en: "Who (polite)",
    np: "को (आदर)",
    jp: "どなた",
    kanji: "どなた",
    romaji: "Donata",
  },
  {
    en: "Age",
    np: "उमेर",
    jp: "さい",
    kanji: "歳",
    romaji: "Sai",
  },
  {
    en: "How old",
    np: "कति वर्ष",
    jp: "なんさい",
    kanji: "何歳",
    romaji: "Nansai",
  },
  {
    en: "How old (polite)",
    np: "कति वर्ष (आदर)",
    jp: "おいくつ",
    kanji: "おいくつ",
    romaji: "Oikutsu",
  },
  {
    en: "Yes",
    np: "हो",
    jp: "はい",
    kanji: "はい",
    romaji: "Hai",
  },
  {
    en: "No",
    np: "होइन",
    jp: "いいえ",
    kanji: "いいえ",
    romaji: "Iie",
  },
  {
    en: "Greeting at first while meeting",
    np: "पहिलो भेट को नमस्कार",
    jp: "はじめまして",
    kanji: "初めまして",
    romaji: "Hajimemashite",
  },
  {
    en: "Let's begin",
    np: "सुरु गरौं",
    jp: "はじめましょう",
    kanji: "始めましょう",
    romaji: "Hajimemashou",
  },
  {
    en: "From",
    np: "~बाट",
    jp: "~から",
    kanji: "から",
    romaji: "Kara",
  },
  {
    en: "Nice to meet you",
    np: "तपाईंलाई भेटेर खुशी लाग्यो",
    jp: "どうぞよろしくおねがいします",
    kanji: "どうぞよろしくお願いします",
    romaji: "Douzo yoroshiku onegaishimasu",
  },
  {
    en: "Excuse me, but",
    np: "माफ गर्नुहोस्, तर",
    jp: "しつれいですが",
    kanji: "失礼ですが",
    romaji: "Shitsureishi desu ga",
  },
  {
    en: "What is your name? (polite)",
    np: "तपाईंको नाम के हो?",
    jp: "おなまえは？",
    kanji: "お名前は？",
    romaji: "Onamae wa?",
  },
  {
    en: "America",
    np: "अमेरिका",
    jp: "アメリカ",
    kanji: "アメリカ",
    romaji: "Amerika",
  },
  {
    en: "Britain",
    np: "इङ्ग्ल्यान्ड",
    jp: "イギリス",
    kanji: "イギリス",
    romaji: "Igirisu",
  },
  {
    en: "India",
    np: "भारत",
    jp: "インド",
    kanji: "インド",
    romaji: "Indo",
  },
  {
    en: "Indonesia",
    np: "इन्डोनेसिया",
    jp: "インドネシア",
    kanji: "インドネシア",
    romaji: "Indoneshia",
  },
  {
    en: "Thailand",
    np: "थाइल्याण्ड",
    jp: "タイ",
    kanji: "タイ",
    romaji: "Tai",
  },
  {
    en: "Germany",
    np: "जर्मनी",
    jp: "ドイツ",
    kanji: "ドイツ",
    romaji: "Doitsu",
  },
  {
    en: "Japan",
    np: "जापान",
    jp: "にほん",
    kanji: "日本",
    romaji: "Nihon",
  },
  {
    en: "Brazil",
    np: "ब्राजिल",
    jp: "ブラジル",
    kanji: "ブラジル",
    romaji: "Burajiru",
  },
];

export default words;
