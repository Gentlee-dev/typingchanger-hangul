import { assemble, disassemble } from "./com.js";
import {
  ALWAYS_CONVERT_KRS,
  EN_TO_KR,
  EXCEPT_WORDS,
  KR_TO_EN,
} from "./contant.js";

const getIsAlwaysConvertKr = (word: string, alwaysConvertList: string[]) =>
  [...ALWAYS_CONVERT_KRS, ...alwaysConvertList].indexOf(word) !== -1;
const getIsCompleteKrWord = (word: string) => /^[가-힣]+$/.test(word);
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

const forgotConvert = (
  text: string,
  excepts: string[] = [],
  alwaysConvertList: string[] = []
) => {
  const resultString = text.replace(/[.?!,()]/g, ""); // 특문 제거
  const words = resultString.split(" ");
  const answer: { [idx: string]: string } = {};

  for (const word of words) {
    if ([...EXCEPT_WORDS, ...excepts].indexOf(word) !== -1) continue; // 예외단어 제외
    const wordCountry = checkWordLanguage(word);
    if (wordCountry === "mix" || wordCountry === "other") continue; // 한영이외 및 한영조합 제외

    // 영어인 경우
    if (wordCountry === "en") {
      const convertedKr = enToKr(word); // 일단 한국어 변환
      if (!getIsCompleteKrWord(convertedKr)) continue; // 완성된 한글이 아니면 중단
      answer[word] = convertedKr; // 리턴객체에 삽입
    }

    // 한글인 경우
    if (wordCountry === "kr") {
      if (
        !getIsAlwaysConvertKr(word, alwaysConvertList) &&
        getIsCompleteKrWord(word)
      )
        continue; // 필수번역단어가 아니거나 완성된 한글이면 중단
      const kr = krToEn(word); // 영어로 변환
      answer[word] = kr; // 리턴 객체에 삽입
    }
  }
  return answer;
};

export default forgotConvert;

forgotConvert("dkssud!!!! (akssktj), qksrkdnj. skfkd clsgowlwl dksgdmffo?");
