const findPw = () => {
  //유효성 검사 로직
  if (!$("#email").val()) {
    // $(#id).val()은 사용자 input값을 가져옴
    alert("이메일을 입력해주세요.");
    $("#email").focus(); //해당 id의 태그 포커싱
    return;
  }

  let findForm = $("#findForm").serialize();

  $.ajax({
    type: "POST",
    url: "http://localhost:8080/user/find/password",
    data: findForm,
    success: (res) => {
      alert(res.result);
    },
    error: (err) => {
      //에러처리
    },
  });
};
