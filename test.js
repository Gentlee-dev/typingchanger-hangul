let totalTest = 0;
let success = 0;
let fail = 0;

const test = (testName, func, value) => {
  totalTest++;
  if (func() === value) {
    console.log(`${testName} ✅`);
    success++;
    return true;
  } else {
    console.log(`${testName} ❌`);
    fail++;
  }
};

console.log(`총 ${totalTest}개 진행`);
console.log(`${totalTest}개 성공`);
console.log(`${totalTest}개 실패`);
