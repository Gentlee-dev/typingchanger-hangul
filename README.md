# typingchanger-hangul
한영키를 잊었을때를 위한
한글 => 영어, 영어 => 한글 변경
두벌식 기준



## 특징
- 입력값에서 잘못 타이핑된 텍스트 자동 탐색
- 수정값 제안
- 한국어, 영어 동시지원
- 제외할 단어 커스텀 ex) ㅋㅋ,ㅎㅎ

## 설치
npm
```
npm i typingchanger-hangul
```
yarn
```
yarn add typingchanger-hangul
```

## 임포트
commonJS
```
const typingChangerHangul = require('typingchanger-hangul');
```

module
```
import typingChangerHangul from 'typingchanger-hangul';
```

## 사용법
### 구문
```
typingChangerHangul(text,excludeArray); 
```
### 매개변수
#### text - 필수
타입 : string<br>
설명 : 수정할 텍스트가 포함된 문자열입니다.<br>

#### excludeArray - 옵션
타입 : string[]<br>
기본값 : []<br>
설명 : 수정시 제외될 단어들입니다.
기본제공되는 단어들이 있으며
추가로 적용하고자하는 단어를 입력해주시면 됩니다.

## 예제
```
const modifiedText = typingChangerHangul('dkssudgktpdy ㅗㅑ ㅋㅋ lol', ['ㅋㅋ', 'lol']); 
console.log(modifiedText); // { dkssudgktpdy : '안녕하세요', ㅗㅑ : 'hi'}
```

## 원리
1. 입력된 텍스트를 공백 기준으로 split합니다.
2. 한글의 경우 자모음의 조합이 완벽하지 않은 경우 영어로 변환합니다.
3. 영어의 경우 두벌식 한글로 변경했을때 자모음의 조합이 완벽한 경우 한글로 변환합니다.
4. 위 과정에서 한글자 또는 한글영어 조합 또는 제외단어에 포함된 경우 대상에서 제외됩니다.

## 기본 제외 단어 (추가중)
- ㅋㅋ
- ㅎㅎ
- lol

## License
이 프로젝트는 MIT 라이선스입니다. 자유롭게 사용해주세요.

