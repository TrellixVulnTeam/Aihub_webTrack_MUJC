# Week1 Day4 Running JS

## Javascript 엔진
자바스크립트 엔진은 자바스크립트 코드를 읽어 실행하는 프로그램<br>
작성한 js코드는 js엔진을 통해 파싱되고 실행된다. <br>
Chrome브라우저는 V8엔진을 사용함.

<br><br> 

## node.js
node.js는 브라우저 외의 환경에서 js코드를 실행하도록 하는 프로그램<br>
node.js는 여러 프로그램으로 구성됨, js코드를 읽는 엔진으로 V8을 사용<br>

<br>

## 자바스크립트 코드 실행
- js엔진은 코드를 실행 전 실행 컨텍스트를 생성
- 실행 컨텍스트는 두단계를 통해 생성
  - 생성 단계 : js엔진은 변수 선언을 읽음
  - 실행 단계 : js엔진은 변수 값을 할당, 코드 실행

<br>

## Lexical 환경
실행 컨텍스트 내에 생성되는 것
- 함수의 렉시컬 환경은, 함수가 사용하는 변수들을 둘러싼 환경을 의미
- 특정 변수의 값은 함수의 렉시컬 환경 안에서 찾을 수 있음
- 렉시컬 환경은 실행 컨텍스트 내에 정의된 Variable Object로 이해 가능
- js엔진은  생성 단계에서 함수 선언문, 함수 표현식, 변수 등 읽어 실행 컨텍스트에 저장
- 변수의 경우, 실행 컨텍스트의 렉시컬 환경을 구성
- 함수 선언문 외에 변수는 값이 저장되지 않음
- js엔진은 변수에 값을 할당하는 구문을 만나면 실행 컨텍스트에 값을 저장함
- 그 외 코드를 한줄씩 읽어 나가며 실행

<br>

## 코드 실행 시 변수 처리
- js엔진이 코드를 읽으면, 생성 단계에서 실행 컨텍스트를 생성함
- 함수 선언문은 실행 단계에서 함수 전체를 실행 컨텍스트에 저장함
- var 변수는 저장 시 undefined로 초기화됨
- let, const 변수는 초기화되지 않음

<br>

## Hoisting
- Hoisting은 변수가 선언된 시점된 곳보다 앞에서 함수가 사용되는 현상 : 변수가 할당되기 전이기 때문에 undefined가 사용될 수 있음
- 이는 var 변수가 생성 단계에서 undefined
- var 변수가 생성단계에서 undefined로 초기화되는 것이 원인
- 함수는 생성 단계에서 함수 전체가 저장되므로 뒤에서 선언 되어도 호출이 가능한 원리임

- let, const 변수는 생성 단계에서 초기화되지 않으므로, var에서 undefined가 초기화되어 사용되는 문제를 미연에 방지할 수 있음
- 선언문 이전 접근 시 ReferenceError로 오류 알림
- Temporal Dead Zone(TDZ)가 이런 경계를 칭함
- 따라서 let, const는 hoisting이 발생하지 않음

<br>

## var, let, const
모두 변수를 선언하는 키워드
- var, let은 변수에 재할당 가능 / const는 불변 : 재할당 불가능
- var은 함수 스코프 변수임
- let과 const는 블록 스코프 변수임

<br>

### For문에서 var변수 let변수 사용에 따른 결과 차이

```js
1. var는 전역적 특성
// For문의 i를 var변수로 선언 시, varFor함수 범위에 존재하는 변수로, setTimeout이 호출될 때, i는 for 블럭이 끝난 시점에 소멸되지 못함. // 콜백때문에 333이 결과로 나오는 것 / 만일 콜백이 아닐 시 정상출력됨 


function varFor() { //<- var i 변수가 존재하는 범위

    for (var i = 0; i < 3; ++i) { 
        setTimeout( ()=>console.log('i:',i) , 0 );
    }
}

2. let은 지역적 특성
// let으로 for i를 선언 시, for 블럭의 범위에 존재하는 변수로 선언되어, 각 for block이 실행되고 i는 정상적으로 소멸한다. 다만 이 경우 각 화살표 함수의 closure에 저장되어 남게 된다.
function letFor() { 

    for (let i = 0; i < 3; ++i ) { 
        setTimeout( ()=> console.log('i:',i), 0 ); // <- let i 변수가 존재하는 범위
    }
}

varFor(); // 3 3 3
letFor(); // 0 1 2
```

<br>
<br>

---

<br>
<br>

## js의 내장 객체들
js는 여러 용도로 활용할 수 있는 객체들을 내장하고 있음
- 숫자,문자,날짜,JSON 객체 다루기 위해 유용한 객체들 제공
- 핵심 내장객체들 기능 이해 시, 실전서 유용

<br>


### 1. globalThis
globalThis는 전역 객체를 지칭하는 변수
- 전역 객체는 환경마다 다름
- 브라우저 환경은 window / node환경은 global 객체를 지칭
- globalThis는 환경별 차이를 통일해 하나의 변수로 서로 다른 전역 객체를 한번에 가리키게 함
- 브라우저 환경에서 window 객체와 같음

```js

```

<br>

### 2. document 
브라우저에 로드된 웹 페이지
- 문서의 title,url 등의 정보를 얻을 수
- element생성, 검색 등의 기능을 메서드로 제공
- createElement, createTextNode는 동적으로 원소 생성
    - 이를 이용해 js만으로 원소 구성 가능

<br>

### 3. Number, NaN
JS의 number 원시타입을 감싸는 객체
- 유의미 상수값,숫자 변환 메서드 등 제공
- NaN = Not a Number ( isNaN() )
- Number.toFixed 메서드 = 숫자의 소수점 자리수 제어
  - 반환된 값은 반올림된 문자열
  - isNaN과 함께 활용해, 유저 입력 포맷팅 가능

<br>

### 4. Math 
기본적인 수학 연산 메서드, 상수를 다루는 객체
- BigInt타입과 호환되지 않고, Number 타입만을 인자로 다룬다.
- Math.max() / Math.min()
- Math.random() : 0~1사이의 float number를 랜덤으로 구함
- Math.floor() 소수점 이하 숫자 버림

<br>

### 5. Date
특정 시점 날짜 표시 위한 객체, 날짜 관련 작업을 위한 여러 메서드 포함
- Date.getDay() : 요일 [0:일요일, 6:토요일] , 이외에도 월,일,시,분,초,밀리초 가능

- setDate() 메서드 : 시간 설정, 월 변경 등의 시간 변환은 Date 객체가 처리
- toDateString() 메서드 : 특정 포맷의 날짜 문자열로 반환 ( YYYY/MM/DD  YYYY-MM-DD ... )
- getTime() 메서드 : 시간을 밀리초로 반환 , 밀리초는 1970.1.1 시점부터 흐른 시간이 반환됨

<br>

### 6. String, JSON 객체

#### (1) String
JS의 문자열 원시 타입의 wrapper 객체, 문자열을 조작하기 위한 여러 메서드를 포함
- JSON - JSON 객체와 관련된 메서드를 담은 객체임
- trim(), toUpperCase() : 변환된 새로운 문자열 리턴
- includes() : 문자열 검색에 성공 시 ture, 실패 시 false

- split() : 주어진 문자열을 특정 sep으로 구분하여 배열로 나눔
- replace() : 주어진 문자열을 검색, 타겟 문자열로 변환
```js
"Horiz D".replace(' ' , '-')
// "Horiz-D
```

- indexOf() : 문자열 내의 특정 문자열을 검색, 타겟 문자열의 인덱스를 반환, 없을 시 -1 리턴

<br>

#### (2) JSON
- JSON.stringfy(): 주어진 객체를 JSON 문자열로 만듦 : JSON -> 문자열
- JSON.parse() : 주어진 JSON문자열을 js에 맞는 결과 객체로 만듦 : 문자열 -> JSON
```js
JSON.parse('{"name": "Daniel","age:12}')
// {anme}