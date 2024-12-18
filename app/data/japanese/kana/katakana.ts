export const gojuon = {
  a: "ア",
  i: "イ",
  u: "ウ",
  e: "エ",
  o: "オ",
  ka: "カ",
  ki: "キ",
  ku: "ク",
  ke: "ケ",
  ko: "コ",
  sa: "サ",
  shi: "シ",
  su: "ス",
  se: "セ",
  so: "ソ",
  ta: "タ",
  chi: "チ",
  tsu: "ツ",
  te: "テ",
  to: "ト",
  na: "ナ",
  ni: "ニ",
  nu: "ヌ",
  ne: "ネ",
  no: "ノ",
  ha: "ハ",
  hi: "ヒ",
  fu: "フ",
  he: "ヘ",
  ho: "ホ",
  ma: "マ",
  mi: "ミ",
  mu: "ム",
  me: "メ",
  mo: "モ",
  ya: "ヤ",
  yu: "ユ",
  yo: "ヨ",
  ra: "ラ",
  ri: "リ",
  ru: "ル",
  re: "レ",
  ro: "ロ",
  wa: "ワ",
  wo: "ヲ",
  n: "ン",
};

export const dakuon = {
  ga: "ガ",
  gi: "ギ",
  gu: "グ",
  ge: "ゲ",
  go: "ゴ",
  ja: "ザ",
  ji: "ジ",
  ju: "ズ",
  je: "ゼ",
  jo: "ゾ",
  da: "ダ",
  zi: "ヂ",
  zu: "ヅ",
  de: "デ",
  do: "ド",
  ba: "バ",
  bi: "ビ",
  bu: "ブ",
  be: "ベ",
  bo: "ボ",
};

export const handakuon = {
  pa: "パ",
  pi: "ピ",
  pu: "プ",
  pe: "ペ",
  po: "ポ",
};

export const yoon = {
  kya: "キャ",
  kyu: "キュ",
  kyo: "キョ",
  sya: "シャ",
  syu: "シュ",
  syo: "ショ",
  tya: "チャ",
  tyu: "チュ",
  tyo: "チョ",
  nya: "ニャ",
  nyu: "ニュ",
  nyo: "ニョ",
  hya: "ヒャ",
  hyu: "ヒュ",
  hyo: "ヒョ",
  mya: "ミャ",
  myu: "ミュ",
  myo: "ミョ",
  rya: "リャ",
  ryu: "リュ",
  ryo: "リョ",
  gya: "ギャ",
  gyu: "ギュ",
  gyo: "ギョ",
  jya: "ジャ",
  jyu: "ジュ",
  jyo: "ジョ",
  bya: "ビャ",
  byu: "ビュ",
  byo: "ビョ",
  pya: "ピャ",
  pyu: "ピュ",
  pyo: "ピョ",
};

export const shokuon = {
  chu: "ッ", // pause
};

const katakana: Record<string, string> = {...gojuon, ...dakuon, ...handakuon, ...yoon, ...shokuon};
export default katakana;
