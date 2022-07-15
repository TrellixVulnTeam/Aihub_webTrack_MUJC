//1.'app 객체'를 생성
// Express.js의 기능을 담은 객체
// use,listen 기능 메서드
// 라우팅 기능 메서드 ( get, post... ) = app라우팅
// 함수형 모듈인 express를 불러와, express() 함수의 실행을 통해 app 객체 생성 가능
const app = require("express")();

app.get("/:indexId", (req, res) => {
  const indexId = req.params.indexId;
  res.send(`요청에 ${indexId}를 받아 재구성하여 응답합니다.`);
});
//2. 서버 생성 ( listen 메서드 )
app.listen(3000, () => {
  console.log("server start");
});
