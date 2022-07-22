$(document).ready(() => {
  getList();
});

const getList = () => {
  $(".postsList").empty(); // 기존 postList 클래스 내부안\에 있는 html 태그들 전부 삭제(비워줌)

  //게시글 리스트 : 1번
  //list.html이 실행 되어 준비가 되는 순간 익명함수가 실행되어,
  //하단의 ajax가 실행됩니다.
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/posts/",
    headers: {
      //헤더에 요청정보를 담고 싶을때 사용
      accessToken: $.cookie("accessToken"), //쿠키에 저장해둔 accessToken을 담아 보냄
    },
    success: (res) => {
      console.log(res);
      //게시글 리스트 : 3번
      //응답받은 json 형태의 data를 배열이므로 map 함수를,
      //사용하여 listData에 html태그를 담습니다.
      res.map((item, index) => {
        console.log(item);
        let listData;
        if (sessionStorage.getItem("email") == item.author.email) {
          listData = `<tr>
                <th scope="row">#${index + 1}</th>
                    <td>${item.title}</td>
                    <td>${item.author.name}</td>
                    <td>
                        <button onclick="updatePost( '${item.shortId}' )" 
                          type="button" class="btn btn-outline-warning">
                          수정
                        </button>
                        <button type="button" 
                            onclick= "deletePost( '${item.shortId}' )" 
                            class="btn btn-outline-primary">
                            삭제
                        </button>
                    </td>
                </tr>`;
        } else {
          listData = `<tr>
          <th scope="row">#${index + 1}</th>
              <td>${item.title}</td>
              <td>${item.author.name}</td>
              <td>
              </td>
          </tr>`;
        }
        //listData에 데이터를 담아준 후, postsList라는 클래스에
        //append를 해줍니다.
        $(".postsList").append(listData);
      });
    },
    error: (res) => {
      //위의 accessToken을 제대로 검증하지 못한경우 권한오류
      console.log(res);
      alert(res.responseJSON.message);
      location.href = "/view/user/login.html";
    },
  });
};

// 이벤트핸들러 구현단
/////// < DELETE 이벤트핸들러 >
const deletePost = (shortId) => {
  //shortId로 식별해 삭제하기
  console.log(shortId);
  $.ajax({
    type: "GET",
    url: `http://localhost:8080/posts/${shortId}/delete`,
    // routes의 delete 라우팅부분 참조. router.get으로 연결됨
    headers: {
      //헤더에 요청정보를 담고 싶을때 사용
      accessToken: $.cookie("accessToken"), //쿠키에 저장해둔 accessToken을 담아 보냄
    },
    success: (res) => {
      alert(res.result);
      getList();
    },
  });
};

///// : title로 삭제하기
// const deletePost = (title) => { // title로 삭제하기 위해선 상단의 listData에 담긴 삭제버튼태그의 onclick에 넣을 인자값도 it.title로 변경해줘야함

//   console.log(title);
//   $.ajax({
//     type: "GET", // schemas/posts.js의 router.get
//     url: `http://localhost:8080/posts/${title}/delete`,
//     success: (res) => {
//       alert(res.result);
//       getList();
//     },
//   });
// };

/////// < UPDATE 이벤트핸들러 => 'postUpdate.js'파일로  >

const updatePost = (shortId) => {
  console.log(shortId);

  window.localStorage.setItem("shortId", shortId); // window브라우저 안에 shortId를 임시 저장해둠 (!=세션)

  location.href = "/view/posts/updateEdit.html"; // updateEdit라는 html view로 이동
};
