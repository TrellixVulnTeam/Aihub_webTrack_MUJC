# 리액트 영화 리뷰 서비스

<br><br>

## 서버작업
07.22 3주 5일차에 실습했던 Node.js server관련 파일들을 `server` 디렉토리에 가져왔음 (PORT 8080)

<br><br><br><br>

## 클라이언트 작업 
<br>

### 1. init
`client`디렉토리에 npx create-react-app을 통해 리액트 앱 init `3000`번 포트로 서버와 겹치지 않도록.

<br><br>

### 2. 라우터 init
`react-router-dom` 의존성 추가 후, BrowserRouter 모듈을<br>
`index.js`의 root render부의 최상위(App의 상단)에 위치시켜 App 컴포넌트를 감싸줌

<br><br>

### 3. Routers 하위에 Router를 이용한 컴포넌트 라우팅