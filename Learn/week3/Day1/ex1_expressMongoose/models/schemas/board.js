// 0. 스키마 객체 가져오기
const { Schema } = require("mongoose");

// 1. 스키마 객체 인스턴스의 구조 설정
const PostSchema = new Schema(
    {
    title: String,
    content: String
    },
    {
    timestamps: true    // 생성,수정 시간 로그남김
    }
);

module.exports = PostSchema; // 스키마 export