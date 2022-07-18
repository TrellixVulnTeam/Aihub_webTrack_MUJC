//스키마 파일들을 한곳에서 export하는 메인 영역

const mongoose = require("mongoose");

//1. 스키마s import
const PostSchema = require("./schemas/board");

//2. 스키마s export
exports.Post = mongoose.model("Post", PostSchema);
