//해당 js 파일이 import되는 html파일의 document가 로드 완료됐을 때 아래 로직 실행
$(document).ready(() => {
  getTodosList();
});

const getTodosList = () => {
  $(".todos-group").empty();

  // view(클라)에서 -> 서버(routes)로 요청 전송 및 응답에 따른 처리
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/todos/", //전부 보내줘(복수형 일반명사 (id 없이) )
    success: (res) => {
      console.log(res);
      //   console.log(res[0].title); //documents를 배열로 묶어 받아온 것 알 수 있음
      //   console.log(res[1].title);
      let todosListData = [];
      res.map((item, index) => {
        if (item.isDone) {
          checked = 1; // 이거 왜 이렇게 동작함? 아래의 템플릿 리터럴의 checked는 변수로 들어간게 아닌데?
        } else {
          checked = 0;
        }
        // checked = "";
        todosListData.push(`
        <li class="list-group-item">
          <input class="form-check-input" type="checkbox" name="todoCheck" id="todoCheck${index}"value="${checked}">
          <label class="form-check-label" for="todoCheck">
            할일${index} : ${item.title}
          </label>
      </li>
      `);
      });

      $(".todos-group").append(todosListData);
    },
  });
};
