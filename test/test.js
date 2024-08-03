import forgotConvert from "../dist/index.js";
import testArgs from "./testArgs.js";

let totalTest = 0;
let success = 0;
let fail = 0;

const test = (testName, funcValue, answer) => {
  totalTest++;
  if (JSON.stringify(funcValue) === JSON.stringify(answer)) {
    console.log(`${testName} ✅`);
    success++;
    return true;
  } else {
    console.log(`${testName} ❌`);
    fail++;
  }
};

for (const testArg of testArgs) {
  test(...testArg);
}

console.log(`
------------ 테스트 결과 ----------------
  `);
console.log(`총 ${totalTest}개 진행`);
console.log(`${success}개 성공`);
console.log(`${fail}개 실패`);
