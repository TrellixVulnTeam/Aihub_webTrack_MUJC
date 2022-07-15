const { Router } = require("express");
const Note = require("../models/note");

//routerNotes로 불리며 사용될 라우터 객체 하나 생성
// 해당 파일에선 routerNotes에 달아줄 라우터 미들웨어들을 붙여줌
// app.js의 app.use()를 보면 /notes로 routerNotes를 붙여주는걸 알 수 있음
// 이에따라 아래에서 지칭하는 '/'는 .../notes/~ 중 ~부분부터를 작성한다고 볼 수 있음

const router = Router();

// '/'는 url의 시작점을 지칭
router.get("/", (req, res, next) => {
  const notes = Note.list(); //notes파일의
  res.json(notes);
});

//초기 처리 (+ 에러처리)
router.get("/:id", (req, res, next) => {
  // 앞서 path paramter로 받은 id값이 req객체에 properties로 저장돼있음
  const id = req.params.id;

  try {
    const note = Note.get(Number(id));
    res.json(note);
  } catch (e) {
    // try 문 내에서 error를 잡아 throw해줄 시 catch의 e로 들어감
    next(e); //next에 인자가 들어갔으므로 error처리 middle웨어 실행
  }
});

//create : 생성
// 새 메모 추가: post의 슬래시 url은 get과는 다른곳으로 감
router.post("/", (req, res, next) => {
  const { title, content } = req.body;
  const note = Note.create(title, content);
  res.json(note);
});

//Update : 수정,추가
// 'put' - 수정할 때 사용하는 http 메서드
router.put("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const { title, content } = req.body; //req의 body에서 title,content 가져와서 변수할당
  try {
    const note = Note.update(id, title, content);
    res.json(note);
  } catch (e) {
    //수정 함수모듈에서 throw로 에러를 던질 시 catch
    next(e); // next함수에 인자 들어갈 시, error 미들웨어로 넘어가며 실행
  }
});

//Delete : 삭제
router.delete("/:id", (req, res, next) => {
  const id = Number(req.params.id);

  try {
    Note.delete(id);
    res.json({ result: "success" });
  } catch (e) {
    next(e);
  }
});

//내보내기
module.exports = router;
