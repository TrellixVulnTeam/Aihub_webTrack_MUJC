var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("example2", { title: "example2" });
});

module.exports = router;
