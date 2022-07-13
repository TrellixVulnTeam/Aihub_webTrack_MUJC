# week2 DAY3 2 : Node.js의 모듈

## 1. 모듈
프로젝트가 커지면 기능에 맞게 코드를 분리 및 재사용하는 것<br>
모듈이란 즉, 코드를 분리하고 반복되는 코드를 재사용하는 방법

<br><br>

### 패키지와 모듈
패키지는 모듈의 모음임,<br>
npm 패키지들은 많은 모듈을 포함하고 있는 코드 모음<br>
<br>

## 2. Node.js의 기본 제공 모듈
Node.js는 다양한 모듈을 기본적으로 제공함<br>
기본 제공 모듈은 직접 작성하기 매우 어렵거나<br>
복잡한 로직을 포함한 모듈이 있으므로, 자주 사용되는 기본 제공 모듈을 학습 할 필요가 있음 <br><br>



1. `console 모듈`: 브라우저에서 제공되는 console과 유사한 디버깅 도구
   - log, warn, error 함수로 로그 레벨 표시
   - time, timeLog,timeEnd함수로 시간 추적

2. `process 모듈`: 현재 실행 프로세스 관련 기능 제공
   - arch,argv,env 등 실행 환경 및 변수 관련 값 제공
   - abort, kill, exit등 프로세스 동작 관련 함수 제공

3. `fs 모듈`: 파일 입출력 기능 제공
   - readFile, writeFile 함수로 파일 읽기, 쓰기
   - Sync함수 제공, 동기동작 
   - watch로 파일/디렉토리 변경 이벤트 감지

4. `http 모듈`: http서버, 클라이언트 를 위해 사용
   - createServer 함수로 서버 생성
   - Request 함수로 http 요청 생성

5. 기타 기본 제공 모듈
   - url : url 파싱
   - os : 운영체제 정보 (cpu, memory, type..)
   - Path : 디렉토리 string 관련 작업 (서로 다른 운영체제 간 공통 로직)
   - crypto : 암호화, hash관련 함수 제공

## 3. 모듈 작성과 사용
npm으로 Node.js 모듈을 import하고 사용할 수 있을 뿐만 아니라, 모듈은 직접 작성하여 사용할 수 있음

1. export
   - module.exports = {}
   - exports.key = value
   - module.exports = (name, age) => { return {name, age} }

2. import
   - require('./')<br>

<br>

### require의 이해
require할 때 모듈 코드가 실행 됨<br>
Node.js의 모듈은 첫 require 시에 cache, 두번 실행하지 않음<br>
**모듈 코드를 여러번 실행하기 위해선 `함수 모듈`로 작성해야 함**

<br><br>

### (1) 모듈의 기본적 작성법
```js
//horizD.js
const name = 'horiz.D'
const age = 27;
const stack = ['python','js']

    // 내보내기: module.exports = {}
module.exports = {
    name,
    age,
    stack
};

---
//import.js
const developer = require('./horizD.js')
console.log(developer)
    // 출력 값 : {name : 'horiz.D', age: 27, stack: ['python','js']}

console.log(developer.stack)
    // 출력값 : ['python','js']
```

<br><br>

### (2) 변수명으로 export하는 모듈 작성법
```js
// horizD.js
const name = 'horizD'
const age = 27
const stack = ['python','js']

    // module을 object로 만들고, 각 key-value를 지정해서 내보냄
    // exports.newName = name 을 활용해 불러올 곳에서 사용될 key이름을 지정 가능
exports.newName = name;
exports.age = age;
exports.stack = stack;

---
// import.js
const developer = require('./horizD')
```
<br><br>

### (3) 함수 모듈을 export 및 import하는 방법
```js
// export3_function.js
module.exports = (name, age) => {
  return {
    name,
    age,
  };
};

---
// import3.js

    // 함수형 모듈 import case 1
const stdt1 = require("./export3_function");
console.log(stdt1("horizD", 27));

    // 함수형 모듈 import case 2
const stdt2 = require("./export3_function")("haeru", 23);
console.log(stdt2);

```

### ES6 모듈
ES6에서 등장한 JS의 공식적인 표준 모듈
<br>
Javascript에선 기본적으로 모듈을 지원하고 있지 않았으나,<br>
Node.js는 독자적인 방식을 통해 모듈을 지원하고 있었음 (commonjs)<br><br>

ES Module의 등장으로 Node.js에선 두가지 모듈을 지원할 필요가 생김<br><br>

### ES Module과 commonjs
ES Module과 commonjs는 문법과 기본적 동작 방식이 다름
- commonjs = module.exports과 require로 모듈을 만들고 사용
- ES Module = export와 import로 모듈을 만들고 사용

<br><br>

- `ES Module`은 Node.js 등장 이후로 탄생한 표준
- `Node.js`는 14버전부터 ES Module을 안정적으로 지원하지만, commonjs가 일반적으로 많이 사용되고 있었고, 두 모듈의 동작방식이 크게 달라, require를 import로 대체할 수 없음

- 따라서 Node.js는 `ES Module`과 `commonjs`를 같이 사용하기에 부적절 함

- 현재 ES Module은 Node.js에서 기본적으로 사용하기에 제약이 많으므로, 강의에선 ES Module 사용 x