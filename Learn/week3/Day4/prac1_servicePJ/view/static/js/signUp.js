// ./../static/user/signUp.html 에서 사용할 signUp() 이벤트 핸들러 만들기
const signUp = () => {
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
  if (!$("#rePassword").val()) {
    alert("재확인 비밀번호를 입력해주세요.");
    $("#rePassword").focus();
    return;
  }
  if (!$("#name").val()) {
    alert("이름을 입력해주세요.");
    $("#name").focus();
    return;
  }

  //2. 비밀번호 재확인 유효성 검사
  if ($("#password").val() !== $("#rePassword").val()) {
    alert("비밀번호 재확인 입력이 일치하지 않습니다.");
    $("#password").val(""); //입력공간 초기화
    $("#rePassword").val(""); //입력공간 초기화

    $("#password").focus();
    return;
  }

  //3.
  let signUpData = $("#signUpForm").serialize(); // signUp.html에 있는 signUpForm id에 있는 값 전부를 가져오기.

  $.ajax({
    type: "POST",
    url: "http://localhost:8080/user/signUp",
    data: signUpData,
    success: (res) => {
      alert(res.result); // 응답처리
      location.href = "/view/user/login.html";
    },
    error: (err) => {
      //500에러가 뜨면서 오류처리 실행
      console.log(err);
      alert(err.responseJSON.error);
      //  에러에 따른, input values 초기화 및 포커싱 수행
      $("#email").val("");
      $("#password").val("");
      $("#rePassword").val("");
      $("#name").val("");
      $("#email").focus();
    },
  });
};
