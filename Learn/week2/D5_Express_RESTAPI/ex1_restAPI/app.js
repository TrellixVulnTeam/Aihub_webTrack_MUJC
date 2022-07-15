// 1.불러오기: 라우터, express,..
const express = require("express");
const app = express();
const routerNotes = require("./routes/notes");

app.use(express.json()); // 해당 코드로, 어떤 url이든 json() 메서드를 통과해 json형식으로 처리될 것임

// 2.view engine
// notes url에 notes라우터를 연결
app.use("/notes", routerNotes);

//3. 오류처리 미들웨어
app.use((req, res, next) => {
  //404 에러처리 미들웨어
  res.status(404);

  res.json({
    result: "fail",
    error: `404 페이지가 없습니다 : ${req.path}`,
  });
});

app.use((err, req, res, next) => {
  //500에러 처리 미들웨어
  res.status(500); //500번대 status는 오류임 이를 인자로.

  //에러 response를 json으로 작성,구성
  //json메서드는 json울 구성후에 res.send()를 실행
  res.json({
    result: "fail",
    error: err.messgae,
  });
});

// Final.서버 열어주기
PORT = 8080; // 포트설정
app.listen(PORT, () => {
  console.log("server start");
});
