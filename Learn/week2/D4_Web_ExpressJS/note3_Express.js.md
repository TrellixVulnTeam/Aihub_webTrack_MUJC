# Express.js (week2 Day4, 3)
Express .js는 Node.js의 가장 유명한 웹 프레임워크<br>

- `유연한 구조 설정` 가능
- `다양한 미들웨어`를 통해, `필요한 기능 간단한 추가` 가능
- 모든 `동작이 명시적` 구성, 웹 프레임워크 동작 방식 이해에 가장 좋음
<br><br><br>


## 1. Express.js 시작하기
<br>

### (1) `npm init`으로 시작<br>
   Express.js를 처음부터 작성할 수 있음, 직접 모든 구조를 작성해야 하므로, 입문자에겐 쉽지 않음<br>
   
   ```
   $mkidr my-web
   $cd my-web
   
   $npm init
   $npm install express
   ```

   ```js
   //index.js
   const express = require('express')
   const app = express()

   app.get('./', (req, res) => {
    res.send('Hello World!');   // 응답.전송
   });

   app.listen(3000); // localhost:3000 포트 지정
   ```

<br>

### (2) `express-generator` 사용<br>
   Express.js는 express-generator라는 프로젝트 생성기를 제공<br>

   express-generator를 사용하면 프로젝트의 기본 구조를 자동으로 생성해줌<br>

   빠르게 프로젝트를 시작하기 좋으며, 생성된 프로젝트는 npm start로 실행 가능<br>

   ```
   $npm install -g express-generator
   
   $express my-web
   
   $cd my-web

   $npm install
   $npm start
   ```
<br>

### (3) `npx` + `express-generator` 사용
   npx를 사용해 express-generator 설치 없이 바로 사용<br>

   express-generator는 프로젝트 생성 이후 사용되지 않으므로 좋은 방법

   ```
   $npx express-generator my-web
   
   $ cd my-web

   $npm install
   $npm start
   ```

<br><br>

## 2. Express.js의 구조

`my-web`<br>
ㄴ`app.js` : Express.js의 기본파일, 웹 어플리케이션의 기능을 정의<br>
ㄴ`bin/www` : Express.js 실행 담당, 포트와 실행 오류 등 정의<br>
ㄴ`package.json` : 프로젝트 의존성 및 스크립트 정의<br>
ㄴ`public` : 코드 없이, 직접 제공되는 파일 디렉터리<br>
ㄴ`routes` : 라우팅 파일 디렉터리<br>
ㄴ`views` : HTML Template 디렉터리, SSR에서 응답으로 보낼 HTML을 서버에서 작성하기 위해, HTML Template를 통해 미리 페이지의 뼈대를 작성할 수 있는 부분 <br>

<br><br>

### (1) `app.js` 
app.js에서는 `express()`로 생성되는 **`app 객체`**를 확인할 수 있음<br>

**`app 객체`** : Express.js의 기능을 담은 객체<br>
- Express.js의 모든 동작은 app객체에 정의됨

<br><br>

#### `app객체`의 주요기능 <br>
1. `app.use()` : `middleware를 사용`하기 위한 함수

2. `app.listen()` : `http 서버를 생성`해주는 함수, express-generator를 사용하면 http.createServer를 사용. app.listen 함수로 대체할 수 있음

3. `app.locals` : `app에서 사용할 공통 상수`, Express.js에선 global 변수를 선언하지 않고 이 값 사용.
   
<br><br>

### (2) 라우팅
Express.js는 다양한 라우팅 방식 제공, 크게 `app 라우팅` 과 `Express.Router` 를 통한 라우팅으로 나뉨<br><br>

#### 1- `app 라우팅` 
app 객체가 가진 HTTP 메서드들 `get`,`post`,`put`,`delete` 을 사용해 HTTP method로 라우팅 가능<br>

```js
//index.js

    // get 라우팅
app.get('/url..', (req, res) => {
    res.send('GET /');
});

    // post 라우팅
app.post('/' (req, res) => {
    res.send('POST /');
});

    // put 라우팅
app.put('/',(req, res) => {
    res.send('PUT /');
})

    // delete 라우팅
app.delete('/', (req, res) => {
    res.send('DELETE /');
})

    // all 라우팅 메서드:
        // http 메서드 상관 없이 라우팅 가능
app.all('/all', (req, res) => {
    res.send('ANY /');
});

```
- HTTP 메서드 의 첫번째 인자가 이 라우팅을 실행할 URL

- 두번째 인자가 이 라우팅이 실행될 때 작동할 콜백 함수
  
- all 함수를 사용 시, http 메서드와 관계없이 라우팅 가능

<br><br>

#### 2- `Express.Router` 방식
`router 객체`를 사용, app 라우팅은 지원하지 않는 라우팅의 핵심인 `그룹화`를, Express.Router방식에선 `라우팅을 모듈화` 함으로써 사용 가능.
<br>

[ref: router 객체 사용](https://darrengwon.tistory.com/46)
<br><br>

`router 객체`도 app 객체처럼 `get`,`put`,`post`,`delete` 메서드 가지고 있음.
<br>

```js
//Express.Router 모듈

const express = require('express');
const router = express.Router();

    //router 객체의 get메서드 활용
router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

module.exports = router;
```
rotuer 객체의 라우팅 메서드도 app객체의 메서드들과 동일 동작 수행 
- 첫번째 인자: 라우팅 될 URL
- 두번째 인자: 라우팅 시 실행될 콜백 함수
<br>

```js
//Express.Router 사용

--- ./app.js
const userRouter = require('./routes/users');
const app = express(); // express 객체 할당

app.use('./users', userRouter);

--- ./routes/users.js
const petRouter = require('./pets');
const router = express.Router();

router.use('/pets', petRouter);

module.exports = router;
```
- app에 use메서드를 사용하여, 작성된 라우터 모듈을  연결하여 사용 가능

- router 객체에도 하위 라우터를 use 함수로 연결하여 사용 가능

<br>

**라우터는 일반적으로 모듈로 만들어서 사용한다**
<br>


<br><br>


#### 라우팅 - path paramter=라우팅 파라미터 사용
Express.js 라우팅은 `path parameter`를 제공함<br>
path paramter를 사용하면, 주소의 일부를 변수처럼 사용 가능<br>
ref : https://psyhm.tistory.com/7
ex)
- /users/`:id-`/users/123,/users/456 등으로 접속했을 때 라우팅 적용
- /messages/`:from-:to-`/message/123-456 등으로 접속했을 때 라우팅 적용

## 3. Express.js 동작 방식
<br>

### (1) Express.js 실행시키기
express-generator로 만든 프로젝트 디렉터리 경로에서 `$npm start` 명령을 통해 Express.js 프로젝트 실행 가능.<br>

`local host:3000`에 접속해, Welcome to Express 페이지를 확인 가능<br>

<br>

### (2) Express.js 동작 프로세스 <br>

1. 브라우저에서 `localhost:3000 접속`

2. `app.js` : `app.use('/',indexRouter);`

3. `routes/index.js` : `router.get('/',...)`

4. `routes/index.js` : `res.render('index',...)`

5. `views/index.jade`

-> Welcome to Express 페이지 생성,동작

<br><br>





   