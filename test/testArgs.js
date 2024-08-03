import forgotConvert from "../dist/index.js";

export const test1 = [
  "dkssudgktpdy => 안녕하세요",
  forgotConvert("dkssudgktpdy"),
  {
    dkssudgktpdy: "안녕하세요",
  },
];
export const test2 = [
  "dkssudgktpdy wjsms dlwjdwnddlqslek => 안녕하세요 저는 이정중입니다",
  forgotConvert("dkssudgktpdy wjsms dlwjdwnddlqslek"),
  {
    dkssudgktpdy: "안녕하세요",
    wjsms: "저는",
    dlwjdwnddlqslek: "이정중입니다",
  },
];
export const test3 = [
  "ㅡㅛ ㅜ믇 ㅑㄴ ㅎ두싣ㄷ => my name is gentlee",
  forgotConvert("ㅡㅛ ㅜ믇 ㅑㄴ ㅎ두싣ㄷ"),
  {
    ㅡㅛ: "my",
    ㅜ믇: "name",
    ㅑㄴ: "is",
    ㅎ두싣ㄷ: "gentlee",
  },
];
export const test4 = ["30ro => 변환하지 않음", forgotConvert("30ro"), {}];

export const test5 = [
  "애국가",
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
  },
];
export const test6 = [
  "안녕하세요 이정중입니다 dk gksrmf RkajrdjTek => 아 한글 까먹었다",
  forgotConvert("안녕하세요 이정중입니다 dk gksrmf RkajrdjTek"),
  {
    dk: "아",
    gksrmf: "한글",
    RkajrdjTek: "까먹었다",
  },
];
export const test7 = [
  "dltptkddp wpdlfrksms akfTJdwoddl Wkdrn => 이세상에 제일가는 말썽쟁이 짱구",
  forgotConvert("dltptkddp wpdlfrksms akfTJdwoddl Wkdrn"),
  {
    dltptkddp: "이세상에",
    wpdlfrksms: "제일가는",
    akfTJdwoddl: "말썽쟁이",
    Wkdrn: "짱구",
  },
];

const tests = [test1, test2, test3, test4, test5, test6, test7];
export default tests;
