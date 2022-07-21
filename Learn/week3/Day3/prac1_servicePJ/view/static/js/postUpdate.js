let shortId; // 해당 파일 전역으로 선언하여 파일 내 어디서든 접근 가능하게 만듦

$(document).ready(() => {
  shortId = localStorage.getItem("shortId"); //window브라우저의 localStorage에 저장해뒀던 shortId라는 키에 매칭된 값을 가져오기
  console.log(shortId); //저장해뒀던 임시 shortId값 확인

  // 현재 게시글의 내용을 가져오기 위해 ajax를 사용해 데이터 받아오기.
  $.ajax({
    type: "GET", //GET요청
    url: `http://localhost:8080/posts/${shortId}/find`, // (id/find)로 특정 id관련 데이터 조회하고싶다.
    success: (res) => { // 조회 성공 시 라우터에 있는 로직 처리 후 응답받은 response값으로 아래 로직 처리
      console.log(res);
      $("#title").val(res.title); // id가 title인 태그의 값에 가져온 shortId에 매칭된 데이터의 title값을 넣겠다.
      $("#content").val(res.content); // content id의 태그에 값을 넣겠다.
    },
  });
});

// updateEdit의 update버튼의 온클릭 이벤트에서 사용할 updatePost 이벤트핸들러 만들기
const updatePost = () => {
  if (!$("#title").val()) {
    alert("제목을 입력해주세요.");
    $("#title").focus();
    return;
  }

  if (!$("#content").val()) {
    alert("내용을 입력해주세요.");
    $("#content").focus();
    return;
  }

  //form 태그 내의 input들을 자동으로 읽어와 queryString형으로 변경해줌.
  let formData = $("#updateForm").serialize();
  // ?name=name&age=1  => 쿼리스트링

  //게시글 작성 : 1번
  $.ajax({      //ajax : browser가 server에 요청
    type: "POST",
    url: `http://localhost:8080/posts/${shortId}/update`, //서버의 라우터로 요청보내기 , 동작은 ( /routes/posts.js -> router.post("/:shortId/update") 에서 요청url 인식하여 하게됨
    data: formData,
    success: (res) => {
      //게시글 작성 3번
      //json 형태로 응답을 받아 res.result를 통해 data를 받습니다.
      alert(res.result);

      //alert를 실행 한 후 페이지를 list.html로 redirect합니다.
      location.href = "/view/posts/list.html";
      return;
    },
  });
};
