const express = require("express");
const mongoose = require("mongoose");
const postsRouter = require("./routes/posts");
const cors = require("cors"); // cross-origin resource sharing ( 교차출처 리소스 공유 ) 미들웨어
const bodyParser = require("body-parser");

//
PORT = 8080;
MONGO_URI = "mongodb://localhost:27017/myapp";

//
const app = express();

//몽고DB의 URI를 통해 연결
mongoose.connect(MONGO_URI);
//     - 몽고DB 연결관리
mongoose.connection.on("connected", () => {
  console.log("DB connect success");
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});

//app(express 객체=서버)
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/posts", postsRouter);

// 서버 실행
app.listen(8080, () => {
  console.log("server open");
});
