import { assemble, disassemble, isCompleteHangul } from "./com.js";
import { ALWAYS_CONVERT_KRS, EXCEPT_WORDS } from "./contant.js";
// import { arr } from "./most.js";

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
  A: "ㅁ",
  B: "ㅠ",
  C: "ㅊ",
  D: "ㅇ",
  E: "ㄸ",
  F: "ㄹ",
  G: "ㅎ",
  H: "ㅗ",
  I: "ㅑ",
  J: "ㅓ",
  K: "ㅏ",
  L: "ㅣ",
  M: "ㅡ",
  N: "ㅜ",
  O: "ㅒ",
  P: "ㅖ",
  Q: "ㅃ",
  R: "ㄲ",
  S: "ㄴ",
  T: "ㅆ",
  U: "ㅕ",
  V: "ㅍ",
  W: "ㅉ",
  X: "ㅌ",
  Y: "ㅛ",
  Z: "ㅋ",
};
export const KR_TO_EN: { [idx: string]: string } = {
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
const getIsAlwaysConvertKr = (word: string) =>
  ALWAYS_CONVERT_KRS.indexOf(word) !== -1;
const getIsCompleteKrWord = (word: string) =>
  word.split("").every((spell) => isCompleteHangul(spell.charCodeAt(0)));
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

const enToKr = (word: string) => {
  let convertedWord = "";
  for (const spell of word) {
    convertedWord += EN_TO_KR[spell];
  }
  return assemble(convertedWord.split(""));
};
const krToEn = (word: string) => {
  let convertedWord = "";
  const convertedKrList = disassemble(word);
  for (const spell of convertedKrList) {
    convertedWord += KR_TO_EN[spell];
  }
  return convertedWord;
};

const forgotConvert = (text: string, excepts: string[] = []) => {
  const resultString = text.replace(/[.?!,()]/g, "");
  const words = resultString.split(" ");
  const answer: { [idx: string]: string } = {};
  let list = "";

  for (const word of words) {
    if ([...EXCEPT_WORDS, ...excepts].indexOf(word) !== -1) continue; // 예외단어 제외
    const wordCountry = checkWordLanguage(word);
    if (wordCountry === "mix" || wordCountry === "other") continue; // 한영이외 및 한영조합 제외

    // 영어인 경우
    if (wordCountry === "en") {
      const convertedKr = enToKr(word); // 일단 한국어 변환
      list += " " + convertedKr;
      if (!getIsCompleteKrWord(convertedKr)) continue; // 완성된 한글이 아니면 중단
      answer[word] = convertedKr; // 리턴객체에 삽입
    }

    // 한글인 경우
    if (wordCountry === "kr") {
      if (!getIsAlwaysConvertKr(word) && getIsCompleteKrWord(word)) continue; // 완성된 한글이면 중단
      const kr = krToEn(word); // 영어로 변환
      list += " " + kr;
      answer[word] = kr; // 리턴 객체에 삽입
    }
  }
  // console.log(list);
  // console.log(answer);
  return answer;
};

export default forgotConvert;

// let num = 0;
// const list = [];
// for (let i in arr) {
//   const kr = enToKr(arr[i]);
//   if (kr.split("").every((spell) => isCompleteHangul(spell.charCodeAt(0)))) {
//     console.log(kr, arr[i]);
//     list.push(kr);
//     num++;
//   }
// }

// for (const i of KR_LIST) {
//   forgotConvert(i);
//   console.log(
//     "================================================================"
//   );
// }
