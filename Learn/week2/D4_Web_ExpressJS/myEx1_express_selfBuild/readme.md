# npm init 방식으로 직접 express 서버를 구축해보는 dir
express-generator를 이용해 구성한 프로젝트를 어느정도 클론해보며 구조를 이해해보자
<br>
클론이지만 그대로 따라하지 않으며, 어느정도 독자적인 방식이 가미되므로 똑같지 않을 것임
<br>

- 세부사항으로 app 객체의 라우팅 방식과 express.router 객체의 라우팅 방식도 제대로 이해해보고자 함
- 계층적 라우팅도 배워야 함
- path parameter도 이해해야 함 

<br><br>

---

1. `package.json - scripts - start` 정의 : `node index.js`
2. 필수 의존성 추가 : npm install `express`,`jade`
