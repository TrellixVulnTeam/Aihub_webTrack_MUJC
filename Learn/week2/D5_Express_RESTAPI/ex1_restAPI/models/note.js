// MVC중 MODEL에 해당하는 파트를 작성한다.
// Model은 data 그 자체, 혹은 data에 접근하는 기능을 지칭한다. Controller에 의해 접근된다.

let notes = [
  {
    id: 1,
    title: "first",
    content: `My first note is here`,
  },
  {
    id: 2,
    title: "second",
    content: "My second note is here",
  },
];

// 1. list json 구성기능의 함수형 모듈 exports
exports.list = () => {
  return notes.map(({ id, title }) =>
    //return 생략 : 명령부를 중괄호가 아닌 소괄호로 감싸면 감싼것들 즉시반환.
    ({
      id,
      title,
    })
  );
};

// 2. 에러처리
exports.get = (id) => {
  const note = notes.find((note) => note.id === id); //소괄호 명령부는 즉시반환

  if (!note) {
    throw new Error("Note not found");
  }
  return note;
};

// 3. create : 생성 함수
exports.create = (title, content) => {
  const { id: lastId } = notes[notes.length - 1];

  const newNote = {
    id: lastId + 1,
    title: title,
    content: content,
  };

  notes.push(newNote); //notes배열에 새 note append
  return newNote;
};

// 4. Update : 수정 함수
exports.update = (id, title, content) => {
  const index = notes.findIndex((note) => note.id === id);

  // error처리 : notes.js의 update부의 catch실행: throw error로 인해
  if (index < 0) {
    throw new Error("Note not found for update");
  }

  //수정부분
  const note = notes[index];
  note.title = title;
  note.content = content;
  notes[index] = note;

  return note; //  수정한 노트 반환
};

// 5. Delete : 삭제 함수
exports.delete = (id) => {
  //삭제는 id만 식별하면 됨
  if (!notes.some((note) => note.id === id)) {
    throw new Error("Note not found for delete");
  }

  //특정 id obj 제거 로직
  notes = notes.filter((note) => note.id !== id);
  return;
};
