const { Todo } = require("./../models/");

const { Router } = require("express");
const router = Router();

//view(클라단)의 todoList.js에서 get타입의 ajax요청 받음
//      todos 이하를 모두 달라는 의미로 '/'
router.get("/", async (req, res, next) => {
  // 모두 달라는 요청이므로 req에서 필요한 정보는 없음.
  const todos = await Todo.find({}); // 서버단(=controller(라우터))는 DB에게 모두 달라 요청
  res.json(todos); //json 형태로 response 전송
});

module.exports = router;
