const { Router } = require("express");
const { Post } = require("./../models/");

const router = Router();

//postInsert의 ajax 요청타입을 post로 설정하면 이쪽 router.post 동작 수행
router.post("/", async (req, res, next) => {
  const { title, content } = req.body;
  try {
    await Post.create({
      title, // edit.html의 input태그의 name태그 값과 해당 변수명들이 똑같아야 이름으로 가져올 수 있음
      content,
    });

    // 응답해줌 -> 다시 ajax가 응답을 받게됨, ajax의 success부로 result값을 넘겨줌
    res.json({
      result: "저장이 완료되었습니다.",
    });
  } catch (e) {
    next(e); //오류처리 미들웨어로 넘겨줌
  }
});

router.get("/", async (req, res, next) => {
  const posts = await Post.find({});
  res.json(posts);
});

module.exports = router;
