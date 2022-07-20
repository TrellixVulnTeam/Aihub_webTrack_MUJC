const { Router } = require("express");
const router = Router(); // 라우터 객체 인스턴스 생성
const { Post } = require("./../models");

router.get("/", async (req, res, next) => {
  const posts = await Post.find({}); //DB의 데이터 전체 가져와서 posts에 담아
  res.json(posts);
});

router.post("/", async (req, res, next) => {
  const { title, content } = req.body;
  try {
    await Post.create({
      title,
      content,
    });

    res.json({
      result: "저장이 완료되었습니다.",
    });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
