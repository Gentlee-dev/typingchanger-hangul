const HANGUL_START = 0xac00;
const HANGUL_END = 0xd7a3;
const CHO = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ],
  /* Disassembled 중성(nucleus) */
  JUNG = [
    "ㅏ",
    "ㅐ",
    "ㅑ",
    "ㅒ",
    "ㅓ",
    "ㅔ",
    "ㅕ",
    "ㅖ",
    "ㅗ",
    ["ㅗ", "ㅏ"],
    ["ㅗ", "ㅐ"],
    ["ㅗ", "ㅣ"],
    "ㅛ",
    "ㅜ",
    ["ㅜ", "ㅓ"],
    ["ㅜ", "ㅔ"],
    ["ㅜ", "ㅣ"],
    "ㅠ",
    "ㅡ",
    ["ㅡ", "ㅣ"],
    "ㅣ",
  ],
  /* Desassembled 종성(coda) */
  JONG = [
    "",
    "ㄱ",
    "ㄲ",
    ["ㄱ", "ㅅ"],
    "ㄴ",
    ["ㄴ", "ㅈ"],
    ["ㄴ", "ㅎ"],
    "ㄷ",
    "ㄹ",
    ["ㄹ", "ㄱ"],
    ["ㄹ", "ㅁ"],
    ["ㄹ", "ㅂ"],
    ["ㄹ", "ㅅ"],
    ["ㄹ", "ㅌ"],
    ["ㄹ", "ㅍ"],
    ["ㄹ", "ㅎ"],
    "ㅁ",
    "ㅂ",
    ["ㅂ", "ㅅ"],
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ],
  CONSONANTS = [
    "ㄱ",
    "ㄲ",
    "ㄳ",
    "ㄴ",
    "ㄵ",
    "ㄶ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㄺ",
    "ㄻ",
    "ㄼ",
    "ㄽ",
    "ㄾ",
    "ㄿ",
    "ㅀ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅄ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ],
  /* Assembled 초성 */
  COMPLETE_CHO = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ],
  /* Assembled 중성 */
  COMPLETE_JUNG = [
    "ㅏ",
    "ㅐ",
    "ㅑ",
    "ㅒ",
    "ㅓ",
    "ㅔ",
    "ㅕ",
    "ㅖ",
    "ㅗ",
    "ㅘ",
    "ㅙ",
    "ㅚ",
    "ㅛ",
    "ㅜ",
    "ㅝ",
    "ㅞ",
    "ㅟ",
    "ㅠ",
    "ㅡ",
    "ㅢ",
    "ㅣ",
  ],
  /* Assembled 종성 */
  COMPLETE_JONG = [
    "",
    "ㄱ",
    "ㄲ",
    "ㄳ",
    "ㄴ",
    "ㄵ",
    "ㄶ",
    "ㄷ",
    "ㄹ",
    "ㄺ",
    "ㄻ",
    "ㄼ",
    "ㄽ",
    "ㄾ",
    "ㄿ",
    "ㅀ",
    "ㅁ",
    "ㅂ",
    "ㅄ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];
const isHangul = (uniCode: number) =>
  HANGUL_START <= uniCode && uniCode <= HANGUL_END;
const isCho = (uniCode: number) => typeof CHO_HASH[uniCode] !== "undefined";
const _isJung = (uniCode: number) => typeof JUNG_HASH[uniCode] !== "undefined";
const makeHash = (array: string[]) => {
  var length = array.length,
    hash: { [idx: number]: number } = { 0: 0 };
  for (var i = 0; i < length; i++) {
    if (array[i]) hash[array[i].charCodeAt(0)] = i;
  }
  return hash;
};
const CONSONANTS_HASH = makeHash(CONSONANTS);
const CHO_HASH = makeHash(COMPLETE_CHO);
const JUNG_HASH = makeHash(COMPLETE_JUNG);
const JONG_HASH = makeHash(COMPLETE_JONG);

const _isConsonant = (uniCode: number) => {
  return typeof CONSONANTS_HASH[uniCode] !== "undefined";
};

const disassemble = (string: string) => {
  /* 입력값이 NULL일 경우 에러 발생 */
  if (string === null) {
    throw new Error("Arguments cannot be null");
  }
  /* 입력값이 'object' 타입인 경우 문자열로 병합 */

  let result: (string | string[])[] = [],
    length = string.length,
    cho,
    jung,
    jong,
    code,
    r;
  /* 모든 문자에 대해 확인 */
  for (var i = 0; i < length; i++) {
    let temp: (string | string[])[] = [];

    code = string.charCodeAt(i); //문자를 유니코드값으로 변환해 code에 저장
    /* i번째 문자(code)가 완성된 한글인 경우 */
    if (isHangul(code)) {
      code -= HANGUL_START;
      jong = code % 28;
      jung = ((code - jong) / 28) % 21;
      cho = Math.floor((code - jong) / 28 / 21);
      temp.push(CHO[cho]); // temp 배열에 초성 추가
      /* 중성이 object형인 경우 (2 단일 모음의 조합인 경우) */
      if (typeof JUNG[jung] === "object") {
        temp = temp.concat(JUNG[jung]); // temp에 해당 중성의 모음들 추가
        /* 중성이 단일 모음으로 이루어진 경우 */
      } else {
        temp.push(JUNG[jung]); // temp에 해당 모음 추가
      }
      /* 종성이 있는 경우 */
      if (jong > 0) {
        /* 종성이 object형인 경우 (2 단일 자음의 조합인 경우) */
        if (typeof JONG[jong] === "object") {
          temp = temp.concat(JONG[jong]); // temp에 해당 종성의 자음들 추가
          /* 종성이 단일 자음으로 이루어진 경우 */
        } else {
          temp.push(JONG[jong]); // temp에 해당 자음 추가
        }
      }
      /* i번째 문자(code)가 완성된 한글이 아니면서 CONSONANTS의 멤버일 경우 (자음일 경우)*/
    } else if (_isConsonant(code)) {
      if (isCho(code)) {
        r = CHO[CHO_HASH[code]]; // 초성일 경우 해당 초성을 r에 저장
      } else {
        r = JONG[JONG_HASH[code]]; // 종성일 경우 해당 종성을 r에 저장
      }
      if (typeof r === "string") {
        temp.push(r); // r이 string 형일 경우 temp에 추가
      } else {
        temp = temp.concat(r); // 아닐 경우 temp에 r 배열의 요소들 추가
      }
      /* i번째 문자(code)가 완성된 한글이 아니면서 COMPLETE_JUNG의 멤버일 경우 (중성일 경우) */
    } else if (_isJung(code)) {
      r = JUNG[JUNG_HASH[code]]; // r에 해당 중성 저장
      if (typeof r === "string") {
        temp.push(r); // r이 string 형일 경우 temp에 추가
      } else {
        temp = temp.concat(r); // 아닐 경우 temp에 r 배열의 요소들 추가
      }
      /* i번째 문자(code)가 한글이 아닐 경우 */
    } else {
      temp.push(string.charAt(i)); // temp에 i번째 문자를 추가
    }

    result = result.concat(temp); //grouped가 설정되지 않은 경우 result에 temp의 요소들 추가
  }

  return result;
};

export default disassemble;
