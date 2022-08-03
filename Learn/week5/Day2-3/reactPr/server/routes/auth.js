const { Router } = require("express");
const router = Router();
const axios = require("axios");
const jwt = require("jsonwebtoken");
const { User } = require("./../models");
const jwtConfig = require("./../config/jwtConfig");

router.get("/kakao", async (req, res, next) => {
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_CODE = req.query.code;
  const REST_API_KEY = "b2a1edc6a033d6739600842701c18188";
  //   console.log(KAKAO_CODE);

  try {
    // kakao restAPI DOCS 참고
    // 카카오소셜연동.(4)
    await axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      // 카카오소셜연동.(5)
      .then((getToken) => {
        console.log(getToken.data.access_token);
        // 카카오소셜연동.(6)
        getKakaoUserData(getToken.data.access_token).then((userData) => {
          console.log(userData.data);
          // userCheck 함수 : 이메일 유효성 검증
          checkUserData(userData.data, res);
        });
      });
  } catch (e) {
    next(e);
  }
});

const checkUserData = async (userData, res) => {
  const checkEmail = await User.findOne({
    email: userData.kakao_account.email,
  });

  try {
    if (checkEmail) {
      //checkEmail이 존재한다면? 가입이 되어있다면?
      // -> 로그인 진행
      jwt.sign(
        {
          email: checkEmail.email,
          name: checkEmail.name,
        },
        jwtConfig.secret,
        {
          expiresIn: "1d", //1y,1d,2h,1m,5s
        },
        (err, token) => {
          if (err) {
            res
              .status(401)
              .json({ status: false, message: "로그인을 해주세요." });
          } else {
            res.json({
              login: true,
              status: true,
              accessToken: token,
              email: checkEmail.email,
              name: checkEmail.name,
            });
          }
        }
      );
    } else {
      //카카오정보에서 받아온 이메일이 우리 서버에서 유효하지 않은 경우,
      //-> 회원가입 페이지로 보내줌
      userData.login = false;
      res.json(userData);
    }
  } catch (e) {
    console.log(e);
  }
};

// 카카오소셜연동.(6) : 카카오 유저정보 가져오기
const getKakaoUserData = async (token) => {
  return await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });
};
module.exports = router;
