# typingchanger-hangul
한영키를 잊었을때를 위한<br>
한글 => 영어, 영어 => 한글 변경<br>
두벌식 기준<br>



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
typingChangerHangul(text,excepts,alwaysConvertList); 
```
### 매개변수
#### text - 필수
타입 : string<br>
설명 : 수정할 텍스트가 포함된 문자열입니다.<br>

#### excepts - 옵션
타입 : string[]<br>
기본값 : []<br>
설명 : 변환시 제외될 단어들입니다.
자모음 조합이 완벽하더라도 변환하고 싶지 않은 영단어 또는 자모음 조합이 완벽하지 않아도 변환하고싶지 않은 한글단어 모음입니다.
기본제공되는 단어들이 있으며
추가로 적용하고자하는 단어를 입력해주시면 됩니다.

#### alwaysConvertList - 옵션
타입 : string[]<br>
기본값 : []<br>
설명 : 항상 변환될 한글단어입니다.
자모음 조합이 완벽하더라도 영어로 변환되어야하는 단어들 모음입니다.
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
4. 위 과정에서 한글영어 조합 또는 한글과 영어 이외의 문자가 들어간 경우 또는 예외단어에 포함된 경우 대상에서 제외됩니다.

## 이슈사항
### 올바른 영단어임에도 변환했을때 자모음 조합이 완벽한 경우 ([위키낱말사전](https://ko.wiktionary.org/wiki/%EB%B6%80%EB%A1%9D:%EC%9E%90%EC%A3%BC_%EC%93%B0%EC%9D%B4%EB%8A%94_%EC%98%81%EC%96%B4_%EB%82%B1%EB%A7%90_3000) 기준 가장 많이 쓰이는 영단어 3,000개중 162개)
#### 5%는 결코 무시 할 수 없는 수치로 판단했습니다.
 - 1. 바뀐 한국어가 별다른 뜻이 없는경우 ex) sorry => 낵교<br>
해결책 : 해당 영단어를 기본 예외리스트에 추가
 - 2. 바뀐 한국어가 뜻이 있는경우 ex) so => 내, did => 양<br>
해결책 : 이슈로 보지 않음 (자동변환이 아닌 수정값 제안 형태이기 때문에 이 라이브러리를 사용하는 개발자 또는 최종 사용자에게 선택권 부여)<br>
<br>
 ※고민 : down => 애주 의 경우 1번인지 2번인지 기준이 모호함<br>
 뜻이 있는 단어이기에 2번으로 분류 할 경우 down이 있을 때마다 제안사항에 포함되기 때문에 1번으로 분류<br>
 단어사전을 참조할 경우 잘 쓰이지 않거나 듣도 보도 못한 단어가 제안사항에 포함 될 수 있음

### 자모음 조합이 완벽한 한글임에도 영어로 변환했을때 의미있는 단어인 경우
- ex) 뭉 => and<br>
해결책 : 해당 단어를 필수 변환 리스트에 추가 (위의 가장 많이 쓰이는 영단어 3,000개중 162개)


## Contributing
이 프로젝트에 기여하고 싶다면, GitHub 저장소에서 issue나 pull request를 제출해주세요.<br>
특히 예외리스트, 필수변환리스트가 아직 많이 부족합니다. 우리함께 만들어나가보아요



## 기본 제외 단어 (추가중)
- ㅋㅋ
- ㅎㅎ
- lol

## License
이 프로젝트는 MIT 라이선스입니다. 자유롭게 사용해주세요.

