import { assemble } from "./com.js";

console.log(assemble(["ㄱ", "ㅏ", "ㄴ", "ㅏ", "ㄷ", "ㅏ"]));
console.log(assemble(["ㅂ", "ㅣ", "ㅎ", "ㅐ", "ㅇ"]));
console.log(assemble(["ㅆ", "ㅡ", "ㄹ", "ㄷ", "ㅏ"]));
console.log(assemble(["ㅇ", "ㅡ", "ㅣ", "ㅅ", "ㅏ"]));
console.log(assemble(["ㅉ", "ㅏ", "ㄹ", "ㅂ", "ㅇ", "ㅡ", "ㄴ"]));
console.log(assemble(["ㄷ", "ㅏ", "ㄹ", "ㄱ", "ㄱ", "ㅗ", "ㄱ", "ㅣ"]));
console.log(assemble(["ㅇ", "ㅗ", "ㅌ", "ㅏ"]));
console.log(
  assemble([
    "A",
    "B",
    "ㅅ",
    "ㅏ",
    "ㄹ",
    "ㄱ",
    "e",
    "$",
    "@",
    "%",
    "2",
    "3",
    "2",
    "4",
    "s",
    "d",
    "f",
    "ㄲ",
    "ㅣ",
    "ㄹ",
    "ㅋ",
    "ㅏ",
    "ㅋ",
    "ㅋ",
    "ㅋ",
    "ㅋ",
    "ㅋ",
  ])
);
console.log(
  assemble([
    "ㅂ",
    "ㅜ",
    "ㅔ",
    "ㄹ",
    "ㄱ",
    "ㄱ",
    "ㅜ",
    "ㅔ",
    "ㄹ",
    "ㄹ",
    "ㅡ",
    "ㅣ",
    "ㅍ",
    "ㅉ",
    "ㅡ",
    "ㅣ",
    "ㄹ",
    "ㅂ",
    "ㅌ",
    "ㅜ",
    "ㅣ",
    "ㄹ",
    "ㅂ",
  ])
);
console.log(assemble(["ㄱ", "ㅅ"]));
console.log(assemble(["ㅗ", "ㅐ"]));
console.log(assemble(["ㅈ", "ㅅ", "ㅏ"]));
console.log(assemble(["ㄱ", "ㅅ", "ㄱ", "ㅅ"]));
console.log(assemble(["ㅗ", "ㅐ", "ㅗ", "ㅐ"]));
console.log(assemble(["ㅈ", "ㅗ", "ㅗ", "ㅐ"]));
console.log(assemble(["ㅣ", "ㅗ", "ㅐ"]));
console.log(assemble(["ㅃ", "ㅉ", "ㅏ", "ㄸ"]));
console.log(assemble(["ㅒ", "ㅗ", "ㅒ"]));
console.log(assemble(["ㅃ", "ㅞ", "ㄹ", "ㄱ", "ㅅ"]));
console.log(assemble(["ㅃ", "ㅞ", "ㄹ", "ㄱ", "ㅏ"]));
console.log(
  assemble(["ㅃ", "ㄹ", "ㄱ", "ㅞ", "ㄹ", "ㄱ", "ㅞ", "ㄹ", "ㄱ", "ㅂ"])
);
