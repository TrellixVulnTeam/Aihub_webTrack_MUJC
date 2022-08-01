# WEEK4 DAY2 TASKS

1. 클라쪽 `SignInForm.js`의 로그인 이벤트 핸들러 구현 

2. `axios`의존성 추가 및 사용<br>
axios는 ajax와 대응하는 라이브러리로, 클라이언트 단에서 서버로 요청을 보낼 때 사용함. 즉, 요청에 서버단에서 정의된 `서버포트~요청url`을 첫 인자로,  
    - 로그인 이벤트핸들러에 `axios.post`를 이용한 요청 전송 작성
    - onClick에 익명함수로 `axios 요청 이벤트 핸들러`.`then((res) => { res...}).catch((err) => { err..})`를 작성하여 axios 요청을 통해 서버로부터 받은 response 응답 데이터를 사용하는 등의 응답 후 로직 처리를 작성 
      - axios의 경우, DB에 접근하는 것이므로, axios를 사용하는 이벤트핸들러를 정의할 땐, 앞서 배웠듯 반드시 비동기처리 `async`를 사용해줘야함
      - `회원가입`에도 로그인과 똑같은 로직 적용
   
3. server 디렉에서 기존에 작업한 로그인 검증로직과 연동
    - jwt..

4. `react-cookie` 의존성 추가하고, userData를 리액트 쿠키로 관리하여 로그인 상태 유지 관리
    - 사용할 곳(`SignInForm.js / SignUpForm.js`)에`useCookies`모듈 import
    - `const [cookies, setCookie, removeCookie] = useCookies(['userData])` 코드로 쿠키 객체 및 관리함수 등 선언 
    - `setCookie('userData', res.data, {path: "/"})`로 res.data를 userData라는 쿠키를 쿠키 저장소 객체(cookies)에 추가하고 이를 전역 쿠키로 관리하기로 등록
    - `.finally(()=> { console.log(cookies.userData)})`를 통해 userData라는 cookies객체에 저장된 프로퍼티에 접근하여 원하는 동작 수행
    - `header`
