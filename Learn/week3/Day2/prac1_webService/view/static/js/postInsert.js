const insertPost = () => {
  if (!$("#title").val()) {
    alert("제목을 입력해주세요.");
    $("#title").focus();
    return;
  }

  if (!$("#content").val()) {
    alert("내용을 입력해주세요");
    $("#content").focus();
    return;
  }

  //   form 태그 내의 input value들을 자동으로 읽어와 queryString형으로 변경해 받아오기
  // ?name=name&age=1   , 이게 쿼리 스트링임
  let formData = $("#insertForm").serialize();

  $.ajax({
    type: "POST",
    url: "http://localhost:8080/posts",
    data: formData,
    success: (res) => {
      console.log(res.result);
      ('location.href = "/view/post/list.html"');
      return;
    },
  });
};
