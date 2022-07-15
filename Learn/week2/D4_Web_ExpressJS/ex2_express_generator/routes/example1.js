var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // '/'만 존재 시 해당 파일 경로까지만을 지칭
  res.send("example1 url로 라우팅 된 응답입니다.");
});

module.exports = router;
