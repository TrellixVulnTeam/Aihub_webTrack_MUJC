const { Schema } = require("mongoose");
const shortId = require("./type/short-id");

module.exports = new Schema(
  {
    shortId, // 스키마/타입/short-id에 난수id를 만들어 넘겨받은 값
    title: String,
    content: String,
  },
  {
    timestamps: true, // 몽구스에서 time을 자체적으로 create하게 설정
  }
);
