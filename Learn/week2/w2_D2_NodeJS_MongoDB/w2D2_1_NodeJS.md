# w2D1 ) NodeJS
<br>

## 1. NodeJS 이해
- web 1.0 ( 단방향 통신 위주 )
- web 2.0 ( 사용자와 상호작용 ) : 고성능의 js 필요 <br>
  => V8엔진 등장

- 고성능의 js v8엔진을 브라우저 외부에서 사용할 수 있도록 등장한 것이 Node.js

<br>

### NodeJs
자바스크립트를 어느 환경에서나 실행할 수 있게 해주는 실행기<br>
크로스 플랫폼 실행, 제한 없는 동작, 다양한 APP 개발

```
<-> Browser의 JS
브라우저에서 실행, 웹 내부 제한된 동작, 웹 프론트 개발자의 언어
```

<br>

### NodeJS로 할수있는 것
- Front-End : React.js
- Back-End : Express.js
- Mobile-App : React-Native
- Desktop-App : Electron
- Machine-Learning : Brain.js

<br><br>

## 2. NodeJS 특징
싱글 스레드 - 비동기 - 이벤트 기반

<br>

### 쓰레드란?
명령을 실행하는 단위, 한개의 쓰레드는 한번에 한가지 동작만 실행 가능

<br>

### 싱글 스레드 vs 멀티 스레드
- 싱글 스레드 : 한번에 한가지 동작만 수행
- 멀티 스레드 : 동시에 여러 동작 수행

<br>

### 싱글 스레드 장단점
- 장점 : 스레드가 늘어나지 않기에, 리소스 관리 효율적
- 단점 : 스레드 기반 작업들의 효율이 떨어짐 EX) CPU연산 작업<br>
-> 그래서 Node.js는 비동기 동작으로 스레드 기반 작업을 최소화시킴

<br>

### 비동기란?
- 동작 실행 후 완료시까지 기다리지 않는 방식(비절차)
- 동작의 완료를 기다리지 않기 때문에 다른 동작 바로 실행 가능
- NodeJS는 싱글 스레드이므로 비동기 방식 사용

<br>

### 동기 vs 비동기 차이

<br>

### 이벤트 기반이란?
비동기 동작의 완료를 처리하는 방법
```
비동기 방식은 특정 동작 실행 후,해당 동작 전혀 신경 안씀
대신, 해당 동작 완료 경우의 실행 함수를 미리 등록
-> 비동기 동작이 완료되면 미리 등록된 함수 실행
```

<br>

### Node.js 특징 요약
싱글 스레드 이기 때문에 비동기 동작이 필요하며 비동기 동작을 기본으로 한다.<br>

비동기 동작을 구현하기 위해 이벤트 기반으로 동작함

## 3. NodeJS 시작
활발한 업데이트로, 안정적인 최신버전 선택 필요

### LTS ( Long-Term-Support )
안정적이고 오래 지원하는 버전 명 (현재 16.13.0 )

<br><br>

## 4. ES6
ECMAScript 버전 6 이후를 통틀어 일반적으로 ES6로 부름
```
ECMAScript

계속해서 발전하는 Javascript 표준 문법
2015, ECMAScript 버전 6 이후, 많은 현대적 문법 추가됨
```

<br><br>

### ES6 사용 이유
현대적 문법은 생산성 향상에 도움을 줌 <br>
Node.js는 빠르게 최신 ECMAScript를 지원 중

자주 사용되는 유용한 문법을 익히고 적절한 활용이 중요 <br>
Node.js가 ES6의 모든 문법을 지원하지는 않음

<br>
가독성과 간결성을 비약적으로 높임<br> 
=> 이것이 좋은 코드 작성의 기준

<br><br>

### ES6_1) 상수와 변수 구분 : let,cosnt
```js
// 상수와 변수 구분 가능
const TITLE = 'NODE.JS';
let director = 'elice';

director = 'rabbit';
TITLE = 'ES6'; // 오류 발생
```
<br>

### ES6_2) Template String
1. 문자열 사이에 간단하게 변수 사용 가능
2. 따옴표 간단하게 사용 가능
3. 줄 바꿈 지원
```js
const name = 'elice';
const age = 5;
const hi =
`My name is ${name}.
I'm ${age} years old`;

console.log(hi);
```
<br>

### ES6-3) 화살표 함수 (arrow function) 
화살표 함수는 상수형 표현이 가능하다.

```js
// 화살표 함수 (상수형 표현)
const doSomething =(param) => {
    console.log('do-something');
}

// 익명함수 (간단한 표현 + 선언부에서 즉시 호출되어 사용)
() => {
}
```

<br>

### ES6-4) class
```js
// 일반적인 형태의 class 구현 가능
class Model {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        console.log(this.name, this.age);
    }
}
const model = new Model('elice', 5);
model.getInfo();
```

<br>

### ES6-5) 비구조화 : destructing
```js
// NodeJS의 비구조화 문법
const obj = {name: 'elice', age: 5};
    // Object의 key와 같은 이름으로 변수 선언 가능
const { name, age } = obj;
    // 다른 이름으로 변수 선언하는 방법 
const { name: n1, age: a1 } = obj;
const arr = ['some', 'values'];
    // arr에서 순차적으로 변수 선언 가능
const [first, second] = arr;

---

// 기존 문법
var obj = {name: 'elice', age: 5};
var name = obj.name;
var age = obj.age;
var arr = ['some', 'values'];
var first = arr[0];
var second = arr[1];
```
<br>

### ES6-6) promise, async, await (비동기 API)

<br><br>

## 5. 비동기 코딩
이벤트 기반 비동기 동작을 구현하는 방법
<br>
Node.js에서 비동기 동작을 구현하는 세가지 방법이 있음
<br><br>

### (1) callback <br>
전통적인 js의 이벤트 기반 코딩 동작 방식 (A.K.A 콜백지옥)

1. 비동기 동작<br>
   db.getUers 함수는 데이터베이스에서 유저 목록을 찾아오는 비동기 동작을 수행

2. 이벤트 등록 / 실행<br>
   쿼리가 완료되면 오류가 있는지, 혹은 유저목록의 결과로 미리 등록된 callback 함수를 실행

3. 참고 - callback의 표준<br>
   에러와 결과를 같이 전달하는 것이 표준으로
자리 잡혀 있음
```js
db.getUsers((err, users) => {
console.log(users);
});

---

//콜백지옥
db.getUsers((err, users) => {
    if (err) {
        …
        return;
    }
    //콜백을 이용한 순차처리(동기처리)를 구현하면 이런 모습
    async1(users, (r1) => {
        async2(r1, (r2) => {
            async3(r2, (r3) => {
                …
            });
        });
    });
});

    // async1, async2, async3 …를 동기적으로 실행해야 할 경우?
        //Node.js 는 기본적으로 비동기 동작을
        //callback으로 처리하기 때문에 계속해서
        //callback의 callback의 callback의...
```

<br>

### (2) Promise <br>
callback의 단점을 보완한 비동기 방식

- Promise 함수는 동작이 완료되면 then에 등록된 callback 실행.
- 오류가 발생한 경우 catch 에 등록된 callback 실행.
- Chaining을 사용해 코드를 간결하게, Short-hand 표현 방법으로 더욱 간결하게
  1. Return 생략 가능
  2. 인자가 하나인 경우 () 생략 가능
```js
db.getUsersPromise()
    .then((users) => {
        return promise1(users);
        })
        .then(r1 => promise2(r1))
        .catch(…);
```

```js
//위의 콜백 예제를 promise로 바꾼 코드
function getUsersPromise(params) {
            return new Promise((resolve, reject) => {
                getUsers(params, (err, users) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(users);
                });
            });
}
``` 
<br>

프로미스 지옥
- promise3 함수가 promise1와 promise2의 결괏값을 같이 사용하고 싶다면?
-> 직관적으로 생각한다면 위와 같은 콜백 지옥과 유사한 해결책이 생각남.
```js
promise1()
    .then(r1 => {
        return promise2(r1)
            .then(r2 => promise3(r1, r2))
    });
```
<br><br>

**비동기 코딩 정리**<br>
- callback 지옥 --> promise chaining 으로 해결
- promise 지옥 --> async await 으로 해결

- 현대 : JavaScript 에서는 대부분 가독성이 좋은 async await 을 지향 하지만 특정 상황에 맞는 비동기 코딩 방법들을 구사할 줄 알아야 함

<br><br>

## 6. 이벤트 루프
이벤트
루프는 Node.js 만의 특징은 아님
JavaScript
의 일반적인 동작 방식 으로 , 브라우저에도 있음
브라우저와
Node.js 의 이벤트 루프는 기본적인 동작방식에 큰 차이가 없음
이벤트루프의
기본적인 동작 원리를 이해하는 것 이 중요