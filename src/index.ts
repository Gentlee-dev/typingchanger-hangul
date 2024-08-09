import { assemble, disassemble } from "./com.js";
import {
  ALWAYS_CONVERT_KRS,
  EN_TO_KR,
  EXCEPT_WORDS,
  KR_TO_EN,
} from "./contant.js";

const getIsAlwaysConvertKr = (word: string, alwaysConvertList: string[]) =>
  [...ALWAYS_CONVERT_KRS, ...alwaysConvertList].indexOf(word) !== -1;
const isCompleteKrWord = (word: string) => /^[가-힣]+$/.test(word);
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

const convertWord = (word: string, alwaysConvertList: string[]): string => {
  const wordCountry = checkWordLanguage(word); // 단어의 언어타입

  // 영어인 경우
  if (wordCountry === "en") {
    const convertedKr = enToKr(word); // 일단 한국어 변환

    // 자모음이 완벽한 경우 반환
    if (isCompleteKrWord(convertedKr)) {
      return convertedKr;
    }
  }

  // 한글인 경우
  if (wordCountry === "kr") {
    // 필수번역단어 또는 자모음이 완벽하지 않은 경우 반환
    if (
      getIsAlwaysConvertKr(word, alwaysConvertList) ||
      !isCompleteKrWord(word)
    ) {
      return krToEn(word);
    }
  }

  return "";
};

/**
 * 두벌식 키보드 기준 한<->영 변환 가능한 부분을 찾아 반환해주는 함수
 * @param {string} text 변환될 단어를 찾을 문자열
 * @param {number} excepts 변환하지 않을 string배열, 기본제공된 리스트가 있으며 추가하시고자 하는 단어를 입력해주세요
 * @param {number} alwaysList 무조건 변환할 string배열, 기본제공된 리스트가 있으며 추가하시고자 하는 단어를 입력해주세요
 * @returns 객체를 반환합니다. 변환가능한 단어가 key로, 제안단어가 value로 제공됩니다.
 */
const forgotConvert = (
  text: string,
  excepts: string[] = [],
  alwaysConvertList: string[] = []
) => {
  const resultString = text.replace(/[.?!,()]/g, ""); // 특문 제거
  const words = resultString.split(" ");
  const answer: Record<string, string> = {};

  for (const word of words) {
    if ([...EXCEPT_WORDS, ...excepts].indexOf(word) !== -1) continue; // 예외단어 제외

    const convertedWord = convertWord(word, alwaysConvertList);
    if (convertedWord !== "") answer[word] = convertedWord; // 리턴 객체에 삽입
  }
  return answer;
};

export default forgotConvert;

forgotConvert("dkssud!!!! (akssktj), qksrkdnj. skfkd clsgowlwl dksgdmffo?");
