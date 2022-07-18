//0. 몽고DB 연결
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/myapp"); //몽고DB 연결(몽고DB COMPASS참고)

const { Post } = require("./models"); // models의 index.js의 schema exports들을 가져옴

//1. 연결상태 관리
mongoose.connection.on("connected", () => {
  console.log("연결 완료");
});
mongoose.connection.on("disconnected", () => {
  console.log("연결 끊김");
  //재연결시도 코드 등 추가 작성 가능
});

//2. 인스턴스 추가: 스키마 구조에 따라, 값을 채운 instance를 추가하는(create)하는 function 정의 및 실행
async function main() {
  await Post.create({
    //여기서 컬렉션의 create메서드는 insert에 해당
    title: "제목1",
    content: "내용1",
  });
}

async function Del() {
  await Post.deleteMany({}); //Post컬렉션의 모든 도큐먼트 삭제
}

main();
// Del();

//3. find: DB의 컬렉션의 모든 아이템 가져오기
async function findList() {
  return await Post1.find({}); // DB접근 시 무조건 await을 사용하여, 비동기를 순차처리해야함. (DB에서 가져올 데이터 양이 많을 것을 대비)
}
// findList().then((res) => {
//   console.log(res);
// });

//4. find: DB의 컬렉션으로부터 특정 아이템 가져오기 : exact match
async function findItem() {
  return await Post1.find({ title: "제목2" });
}

//5. id를 통해 아이템 접근 및 수정 (id값은 mongoDB COMPASS로부터 확인하여 사용)
async function changeItem() {
  return await Post.findByIdAndUpdate(
    {
      _id: "62d501288550f5cddeb0a45a",
    },
    {
      content: "findByIdAndUpdate를 통해 변경된 내용입니다.",
    }
  );
}
changeItem().then((res) => {
  if ((res === undefined) | null)
    console.log(
      "[UPDATE 실패] : id에 맞는 item이 컬렉션에 존재하지 않습니다. "
    );
  console.log("[UPDATE 성공]", res);
});

//6.
async function deleteFunc() {
  await Post.deleteOne({
    //id로 접근
    _id: "62d4fdd994581360db60489c",
  });
}
deleteFunc().then((res) => {
  if (res === undefined)
    console.log(
      "[DELETE 실패] : id에 맞는 item이 컬렉션에 존재하지 않습니다. "
    );
  else console.log("[DELETE 성공]: ", res);
});
