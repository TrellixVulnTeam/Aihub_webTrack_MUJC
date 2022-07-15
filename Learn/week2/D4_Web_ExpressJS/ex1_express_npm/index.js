const express = require("express");
const app = express();

// 방식1. CSR : Client Side Rendering 방식

let html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>practice</title>
</head>
<body>
  <h1>CSR로 html 페이지 자체를 가져가기</h1>
  <h2>오미;</h2>
  <form action='/'>
    <b>아이디</b>
    <input type="text" name="id" placeholder="ID" method="post" />
    <b>비밀번호</b>
    <input type="password" name="password" placeholder="PW" method="post" />
    <button>확인</button>
  </form>
</body>
</html>
`;

//csr1
app.get("/", (req, res) => {
  //request, response 객체를 인자로 갖는 콜백함수를 두번째 인자로 줌
  res.send(html); //위에서 csr방식으로 정의한 html 페이지를 전송
});

//csr2
app.get("/csr2", (req, res) => {
  res.send("CSR로 문자를 보내버리는 라우팅 응답");
});

app.get("/csr3", (req, res) => {
  //request, response 객체를 인자로 갖는 콜백함수를 두번째 인자로 줌
  res.send("'csr3 url'로 라우팅한 응답");
});

// list 정의 및 가져오기 csr방식으로
let list = {
  name: "horizD",
  number: 000,
  stack: "python",
};

// get list
app.get("/get/list", (req, res) => {
  res.json(list);
});

// // 방식2. SSR : server side rendering 방식
// app.get("/", (req, res) => {
//   //root에서 보여줄 home페이지를 ssr로 렌더링한 SSR.html파일로 응답해줌
//   res.sendFile(__dirname + "/SSR.html"); // res.sendFile은 ssr방식 응답. 파일을 보냄
// });

//----------------------

// 서버생성
app.listen(8080, () => {
  // 8080 포트로 설정
  console.log("server start");
});

//node index.js server start 명령어로 실행
//설정한대로 'localhost:8080' url을 브라우저 입력 시 접속 가능
