var express = require("express");
var router = express.Router();
// const {Router} = require('express');

router.get("/", (req, res, next) => {
  res.render("index", { title: "인덱스" });
});

module.exports = router;
