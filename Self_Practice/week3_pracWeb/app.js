const express = require("express");
const app = require("express")();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const todosRouter = require("./routes/todos");

const PORT = 8080;
const MONGO_URI = "mongodb://localhost:27017/selftodo";

// 1.MongoDB 연결 (by mongoose ODM)
mongoose.connect(MONGO_URI);
mongoose.connection.on("connected", () => {
  console.log("[MongoDB] connect success");
});
mongoose.connection.on("err", (fail) => {
  console.log(fail);
});

//2. 미들웨어 연결 & 라우팅
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/todos", todosRouter); // todos 경로에 todoRouter연결

app.listen(PORT, () => {
  console.log("[Express] Server Open");
});
