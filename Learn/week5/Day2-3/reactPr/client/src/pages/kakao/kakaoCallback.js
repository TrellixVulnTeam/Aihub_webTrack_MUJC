import axios from "axios";
import { useEffect } from "react";
import url from "../../data/port.json";
// import { User } from "../../../../server/models";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

// 카카오소셜연동.(2)
const KakaoCallBack = () => {
  const navigate = useNavigate();

  const [cookiesAuth, setCookieAuth, removeCookieAuth] = useCookies(["auth"]);
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  //kakao에서 redirect 해준 code 가져오는 부분
  const KAKAO_PARAMS = new URL(window.location.href).searchParams.get("code");


  useEffect(() => {
    console.log(KAKAO_PARAMS);

    sendCode()
      .then((res) => {
        console.log(res.data);

        if (res.data.login) {
          // true면 로그인 돼있는 상태

          setCookie("userData", res.data, { path: "/" });
          navigate("/review/list");
        } else {
          // false면 회원가입 진행해야하는 상태
          setCookie("auth", res.data, { path: "/" });
          navigate("/oauth/signUp");
        }
      })
      .catch((e) => {
        console.log(e);
        navigate("/");
      });
  }, []); // deps=[]는 최초 렌더링 시에만 동작하도록 설정

  // 카카오소셜연동.(3) : 해당 로컬 서버가 -> 카카오 서버에 요청
  const sendCode = async () => {
    return await axios.get(url.url + `/auth/kakao`, {
      params: {
        code: KAKAO_PARAMS,
      },
    });
  };
};

export default KakaoCallBack;
