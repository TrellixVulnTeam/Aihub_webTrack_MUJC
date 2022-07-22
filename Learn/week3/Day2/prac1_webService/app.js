const express = require("express");
const mongoose = require("mongoose");
const postsRouter = require("./routes/posts");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//1. DB 연결
mongoose.connect("mongodb://localhost:27017/selfprac");

//  연결관리 : 성공
mongoose.connection.on("connected", () => {
  console.log("DB connect success");
});
//  연결관리 : 성공
mongoose.connection.on("err", (err) => {
  console.log(err);
});

//
app.use(cors()); //모든 url에 대해 허용 적용

app.use(express.json()); //아무경로 없을 경우(모든 경로는), 무조건 해당 use를 거쳐감 => 모든 경로에 대한 요청에 있는 데이터를 json화
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/posts", postsRouter);
// app.use("/posts");
//서버 실행
app.listen(8080, () => {
  console.log("server open");
});
