# Expess.js의 미들웨어
미들웨어는 Express.js 동작 핵심<br>
HTTP 요청과 응답 사이에서 단계별 동작을 수행해주는 함수<br><br>

## 동작원리
Express.js의 미들웨어는 HTTP request가 들어온 순간부터 시작된다.<br>

미들웨어는 HTTP 요청과 응답 객체를 처리하거나, 다음 미들웨어를 실행할 수 있음<br>

HTTP 응답이 마무리 될 때까지 미들웨어 동작 사이클이 실행됨 

<br><br>

## Middleware의 작성과 사용
`req`,`res`,`next` 를 인자로 가진 함수를 작성하면 해당 함수는 미들웨어로 동작할 수 있음

- `req`: HTTP 요청을 처리하는 객체
- `res`: HTTP 응답을 처리하는 객체
- `next`: 다음 미들웨어를 순차로 실행하는 함수

<br>
<br>

## Route Handler와 middle
