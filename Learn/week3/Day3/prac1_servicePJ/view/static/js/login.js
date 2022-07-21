// static/user/login.html 에서 사용될 logIn 이벤트핸들러 만들기

const logIn = () => {
  //유효성 검사
  // 1. 모든 signUp시 사용할 input값에 대한 빈값 유효성 검사
  if (!$("#email").val()) {
    // $(#id).val()은 사용자 input값을 가져옴
    alert("이메일을 입력해주세요.");
    $("#email").focus(); //해당 id의 태그 포커싱
    $("#email").val("이메일 입력필요"); // input영역에 값 넣어주기
    return;
  }

  if (!$("#password").val()) {
    alert("비밀번호를 입력해주세요.");
    $("#password").focus();
    return;
  }

  // #loginForm id를 가진 태그내의 요소들 내에 있는 모든 값을 serialize()메서드를 통해 가져옴
  let loginForm = $("#loginForm").serialize();

  $.ajax({
    type: "POST",
    url: "http://localhost:8080/user/login",
    data: loginForm,
    success: (res) => {
      console.log(res);

      // 쿠키에 jwt - accessToken 저장
      $.cookie("accessToken", res.accessToken, { expires: 1, path: "/" }); //cookie("키",값),path: '/':전역으로 쿠키 접근가능 설정
      sessionStorage.setItem("email", res.email);
      sessionStorage.setItem("name", res.name);

      alert("로그인이 완료되었습니다!");

      location.href = "/view/posts/list.html";
    },
    error: (err) => {
      //에러처리
      console.log(err);
      alert(err.responseJSON.fail);
    },
  });
};
