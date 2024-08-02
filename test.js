import forgotConvert from "./dist/index.js";

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

test("안녕하세요", forgotConvert("dkssudgktpdy"), {
  dkssudgktpdy: "안녕하세요",
});
test(
  "안녕하세요 저는 이정중입니다",
  forgotConvert("dkssudgktpdy wjsms dlwjdwnddlqslek"),
  {
    dkssudgktpdy: "안녕하세요",
    wjsms: "저는",
    dlwjdwnddlqslek: "이정중입니다",
  }
);
test("my name is gentlee", forgotConvert("ㅡㅛ ㅜ믇 ㅑㄴ ㅎ두싣ㄷ"), {
  ㅡㅛ: "my",
  ㅜ믇: "name",
  ㅑㄴ: "is",
  ㅎ두싣ㄷ: "gentlee",
});
test(
  "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세",
  forgotConvert(
    "ehdgoanfrhk qorentksdl akfmrh ekfgehfhr gksmsladl qhdngktk dnflskfk akstp anrndghk tkacjsfl ghkfurkdtks eogkstkfka eogksdmfh rlfdl qhwjsgktp"
  ),
  {
    ehdgoanfrhk: "동해물과",
    qorentksdl: "백두산이",
    akfmrh: "마르고",
    ekfgehfhr: "닳도록",
    gksmsladl: "하느님이",
    qhdngktk: "보우하사",
    dnflskfk: "우리나라",
    akstp: "만세",
    anrndghk: "무궁화",
    tkacjsfl: "삼천리",
    ghkfurkdtks: "화려강산",
    eogkstkfka: "대한사람",
    eogksdmfh: "대한으로",
    rlfdl: "길이",
    qhwjsgktp: "보전하세",
  }
);

console.log(`총 ${totalTest}개 진행`);
console.log(`${success}개 성공`);
console.log(`${fail}개 실패`);
