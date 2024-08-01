export const EN_TO_KR: { [idx: string]: string } = {
  a: "ㅁ",
  b: "ㅠ",
  c: "ㅊ",
  d: "ㅇ",
  e: "ㄷ",
  f: "ㄹ",
  g: "ㅎ",
  h: "ㅗ",
  i: "ㅑ",
  j: "ㅓ",
  k: "ㅏ",
  l: "ㅣ",
  m: "ㅡ",
  n: "ㅜ",
  o: "ㅐ",
  p: "ㅔ",
  q: "ㅂ",
  r: "ㄱ",
  s: "ㄴ",
  t: "ㅅ",
  u: "ㅕ",
  v: "ㅍ",
  w: "ㅈ",
  x: "ㅌ",
  y: "ㅛ",
  z: "ㅋ",
  E: "ㄸ",
  O: "ㅒ",
  P: "ㅖ",
  Q: "ㅃ",
  R: "ㄲ",
  T: "ㅆ",
  W: "ㅉ",
};
export const KR_TO_EN = {
  ㅁ: "a",
  ㅠ: "b",
  ㅊ: "c",
  ㅇ: "d",
  ㄷ: "e",
  ㄹ: "f",
  ㅎ: "g",
  ㅗ: "h",
  ㅑ: "i",
  ㅓ: "j",
  ㅏ: "k",
  ㅣ: "l",
  ㅡ: "m",
  ㅜ: "n",
  ㅐ: "o",
  ㅔ: "p",
  ㅂ: "q",
  ㄱ: "r",
  ㄴ: "s",
  ㅅ: "t",
  ㅕ: "u",
  ㅍ: "v",
  ㅈ: "w",
  ㅌ: "x",
  ㅛ: "y",
  ㅋ: "z",
  ㄸ: "E",
  ㅒ: "O",
  ㅖ: "P",
  ㅃ: "Q",
  ㄲ: "R",
  ㅆ: "T",
  ㅉ: "W",
};
const EXCEPT_WORDS = ["ㅋㅋ", "ㅎㅎ", "lol"];
const isExceptWord = (word: string) => EXCEPT_WORDS.indexOf(word) !== -1;
const checkWordLanguage = (word: string) => {
  const koreanRegex = /^[가-힣ㄱ-ㅎㅏ-ㅣ]+$/;
  const englishRegex = /^[a-zA-Z]+$/;
  const mixedRegex = /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z]+$/;

  if (koreanRegex.test(word)) {
    return "kr";
  }
  if (englishRegex.test(word)) {
    return "en";
  }
  if (mixedRegex.test(word)) {
    return "mix";
  }
  return "other";
};

const p = "dkssud so dlfmadms dlwjdwnddldi lol";

const forgotConvert = (text: string) => {
  const words = text.split(" ");
  const answer: { [idx: string]: string } = {};
  for (const word of words) {
    if (isExceptWord(word)) continue;
    const wordCountry = checkWordLanguage(word);
    if (wordCountry === "mix" || wordCountry === "other") continue;
  }
  console.log(answer);
  return answer;
};

forgotConvert(p);
