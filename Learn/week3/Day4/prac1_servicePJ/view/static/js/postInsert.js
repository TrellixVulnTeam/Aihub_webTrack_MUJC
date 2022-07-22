const insertPost = () => {
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

  //form 태그 내의 input에 입력한 values 들을 모두 읽어와 queryString형으로 변경해줌.
  let formData = $("#insertForm").serialize();
  // ?name=name&age=1  => 쿼리스트링
  formData += "&email=" + sessionStorage.getItem("email");
  //게시글 작성 : 1번
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/posts/",
    data: formData,
    headers: {
      //헤더에 요청정보를 담고 싶을때 사용
      accessToken: $.cookie("accessToken"), //쿠키에 저장해둔 accessToken을 담아 보냄
    },
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
