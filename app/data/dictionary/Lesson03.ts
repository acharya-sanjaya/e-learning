const words = [
  {
    en: "This place / here",
    np: "यो स्थान / यहाँ",
    jp: "ここ",
    kanji: "ここ",
    romaji: "Koko",
  },
  {
    en: "This place (nearby speaker)",
    np: "त्यो स्थान / त्यहाँ",
    jp: "そこ",
    kanji: "そこ",
    romaji: "Soko",
  },
  {
    en: "That place",
    np: "उनी स्थान",
    jp: "あそこ",
    kanji: "あそこ",
    romaji: "Asoko",
  },
  {
    en: "Which place",
    np: "कुन स्थान",
    jp: "どこ",
    kanji: "どこ",
    romaji: "Doko",
  },
  {
    en: "This place / here (polite)",
    np: "यो स्थान / यहाँ (विनम्र)",
    jp: "こちら",
    kanji: "こちら",
    romaji: "Kochira",
  },
  {
    en: "This place (nearby speaker) (polite)",
    np: "त्यो स्थान / त्यहाँ (विनम्र)",
    jp: "そちら",
    kanji: "そちら",
    romaji: "Sochira",
  },
  {
    en: "That place (polite)",
    np: "उनि स्थान (विनम्र)",
    jp: "あちら",
    kanji: "あちら",
    romaji: "Achira",
  },
  {
    en: "Which place (polite)",
    np: "कुन स्थान (विनम्र)",
    jp: "どちら",
    kanji: "どちら",
    romaji: "Dochira",
  },
  {
    en: "Classroom",
    np: "कक्षा",
    jp: "きょうしつ",
    kanji: "教室",
    romaji: "Kyoushitsu",
  },
  {
    en: "Canteen",
    np: "क्यान्टिन",
    jp: "しょくどう",
    kanji: "食堂",
    romaji: "Shokudou",
  },
  {
    en: "Office",
    np: "अफिस",
    jp: "じむしょ",
    kanji: "事務所",
    romaji: "Jimusho",
  },
  {
    en: "Meeting hall",
    np: "मिटिङ हल",
    jp: "かいぎしつ",
    kanji: "会議室",
    romaji: "Kaigishitsu",
  },
  {
    en: "Reception desk",
    np: "स्वागत डेस्क",
    jp: "うけつけ",
    kanji: "受付",
    romaji: "Uketsuke",
  },
  {
    en: "Lobby",
    np: "लबी",
    jp: "ロビー",
    kanji: "ロビー",
    romaji: "Robii",
  },
  {
    en: "Room",
    np: "कोठा",
    jp: "へや",
    kanji: "部屋",
    romaji: "Heya",
  },
  {
    en: "Toilet",
    np: "शौचालय",
    jp: "トイレ / おてあらい",
    kanji: "お手洗い",
    romaji: "Toire / Otearai",
  },
  {
    en: "Stairs",
    np: "सिँढी",
    jp: "かいだん",
    kanji: "階段",
    romaji: "Kaidan",
  },
  {
    en: "Lift",
    np: "लिफ्ट",
    jp: "エレベーター",
    kanji: "エレベーター",
    romaji: "Erebeetaa",
  },
  {
    en: "Escalator",
    np: "इस्केलेटर",
    jp: "エスカレーター",
    kanji: "エスカレーター",
    romaji: "Esukareetaa",
  },
  {
    en: "Vending machine",
    np: "बिक्रि मेसिन",
    jp: "じどうはんばいぎ",
    kanji: "自動販売機",
    romaji: "Jidouhanbaiki",
  },
  {
    en: "Phone",
    np: "फोन",
    jp: "でんわ",
    kanji: "電話",
    romaji: "Denwa",
  },
  {
    en: "Country",
    np: "देश",
    jp: "(お)くに",
    kanji: "(お)国",
    romaji: "O-kuni",
  },
  {
    en: "Company",
    np: "कम्पनी",
    jp: "かいしゃ",
    kanji: "会社",
    romaji: "Kaisha",
  },
  {
    en: "Home",
    np: "घर",
    jp: "うち",
    kanji: "うち",
    romaji: "Uchi",
  },
  {
    en: "Shoes",
    np: "जुत्ता",
    jp: "くつ",
    kanji: "靴",
    romaji: "Kutsu",
  },
  {
    en: "Tie",
    np: "टाई",
    jp: "ネクタイ",
    kanji: "ネクタイ",
    romaji: "Nekutai",
  },
  {
    en: "Wine",
    np: "वाइन",
    jp: "ワイン",
    kanji: "ワイン",
    romaji: "Wain",
  },
  {
    en: "Goods rack (in a supermarket)",
    np: "बस्तु राख्ने र्याक",
    jp: "うりば",
    kanji: "売り場",
    romaji: "Uriba",
  },
  {
    en: "First floor",
    np: "पहिलो तल्ला",
    jp: "ちか",
    kanji: "地下",
    romaji: "Chika",
  },
  {
    en: "Floor",
    np: "तल्ला",
    jp: "~かい / がい",
    kanji: "階",
    romaji: "~kai / gai",
  },
  {
    en: "Which floor?",
    np: "कुन तल्ला?",
    jp: "なんがい",
    kanji: "何階",
    romaji: "Nangai",
  },
  {
    en: "Yen",
    np: "एन्",
    jp: "えん",
    kanji: "円",
    romaji: "en",
  },
  {
    en: "How much?",
    np: "कति?",
    jp: "いくら",
    kanji: "いくら",
    romaji: "Ikura",
  },
  {
    en: "Hundred",
    np: "सय",
    jp: "ひゃく",
    kanji: "百",
    romaji: "Hyaku",
  },
  {
    en: "Thousand",
    np: "हजार",
    jp: "せん",
    kanji: "千",
    romaji: "Sen",
  },
  {
    en: "Ten thousand",
    np: "दश हजार",
    jp: "まん",
    kanji: "万",
    romaji: "Man",
  },
  {
    en: "Sorry",
    np: "माफ गर्नुहोस्",
    jp: "すみません",
    kanji: "すみません",
    romaji: "Sumimasen",
  },
  {
    en: "Thank you",
    np: "धन्यवाद",
    jp: "どうも",
    kanji: "どうも",
    romaji: "Doumo",
  },
  {
    en: "Welcome to the shop",
    np: "पसलमा स्वागत छ",
    jp: "いらっしゃいませ",
    kanji: "いらっしゃいませ",
    romaji: "Irasshaimase",
  },
  {
    en: "Please show me (something)",
    np: "कृपया मलाई देखाउनुहोस्",
    jp: "~ [を] みせてください",
    kanji: "見せてください",
    romaji: "~ o misete kudasai",
  },
  {
    en: "So",
    np: "त्यसैले",
    jp: "じゃ",
    kanji: "じゃ",
    romaji: "Ja",
  },
  {
    en: "Please give me (something)",
    np: "मलाई दिनुस्",
    jp: "~ [を]ください",
    kanji: "ください",
    romaji: "~ o kudasai",
  },
  {
    en: "Italy",
    np: "इटाली",
    jp: "イタリア",
    kanji: "イタリア",
    romaji: "Itaria",
  },
  {
    en: "Swiss / Switzerland",
    np: "स्विट्जरल्यान्ड",
    jp: "スイス",
    kanji: "スイス",
    romaji: "Suisu",
  },
  {
    en: "France",
    np: "फ्रान्स",
    jp: "フランス",
    kanji: "フランス",
    romaji: "Furansu",
  },
  {
    en: "Jakarta",
    np: "जकार्ता",
    jp: "ジャカルタ",
    kanji: "ジャカルタ",
    romaji: "Jakaruta",
  },
  {
    en: "Bangkok",
    np: "बैंकक",
    jp: "バンコク",
    kanji: "バンコク",
    romaji: "Bankoku",
  },
  {
    en: "Berlin",
    np: "बर्लिन",
    jp: "ベルリン",
    kanji: "ベルリン",
    romaji: "Berurin",
  },
  {
    en: "Station in Osaka",
    np: "ओसाका स्टेशन",
    jp: "しんおおさか",
    kanji: "新大坂",
    romaji: "Shin Osaka",
  },
];

export default words;
