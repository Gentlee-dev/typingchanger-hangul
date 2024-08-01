const EN_TO_KR = {
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
const KR_TO_EN = {
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

const p = "dkssud so dlfmadms h dlwdjwdndldi";

const forgotConvert = (text: string) => {
  const words = text.split(" ");
  console.log(words);
  for (let word of words) {
    if (word.length <= 1) continue;
    console.log(word, word.length);
  }
};

forgotConvert(p);
