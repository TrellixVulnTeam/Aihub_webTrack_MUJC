# Day5: Authentication

## 작업물
1. `/utils/`**`authMiddleware.js/`** 작성
   
2. `app.js`에서 post경로의 `라우터에 authMiddleware 미들웨어를 추가`하여 거쳐가게끔 설정
   
3.  `../postsList`의 `getList함수`에서 생기는 `ajax요청`에 header를 추가하여 클라단에서 `accessToken 헤더`를 서버에 전송하여 , 서버에서 이를 검증할 수 있도록 처리함

4. 3번에서 처럼 모든 로그인 이후 발생하는 `클라이언트단의 ajax요청`에 동일 `accessToken 전송 헤더를 삽입`해줌

5. 권한에 따라 페이지 

6. 비밀번호 찾기: 패스워드 난수 생성 및 메일 보내기

<br><br>

## 내용

### `Access Token` vs `Refresh Token`
1. jwt로 만든 `단순 accessToken 하나`를 이용한 검증방식은 탈취당할 경우 무력해지는 보안 취약점이 존재함.
    - 보안성을 높이기 위해 Access Token의 유효기간을 짧게 설정하면 사용자는 그만큼 로그인을 자주해서 새로운 AccessToken을 발급받아야 하므로 불편함

<br>

2. jwt의 `refreshToken`은 단-장기 토큰을 따로 부여해 단일 Access Token 탈취로 인해 발생하는 보안 취약점을 보완할 수 있음
   - RefreshToken은 Access Token과 똑같은 형태의 JWT임
   - 처음 로그인 시, 클라이언트에게 Access Token과 동시에 발급되는 Refresh Token은 긴 유효기간을 가지면서, Access Token이 만료 됐을 때, 새로 발급해주는 열쇠 역할을 함
   - Access Token은 유효기간을 짧게 두며, Refresh Token은 비교적 그보다 긴 기간으로 발급됐다고 할 때, 클라이언트는 Refresh Token을 안전한 곳(Local Storage 등)에 저장하고, API 요청에는 짧은 유효기간의 Access Token을 사용함.
   - Access Token의 유효기간이 끝나, 토큰이 만료될 시, 클라이언트는 Refresh Token을 담은 요청을 서버로 보내 새로운 Access Token을 발급받고, 이로 다시 API 요청에 사용할 수 있음

    - Refresh Token도 탈취당하면 똑같은 보안 취약점이 생기는 것, 하지만 access Token이 api 요청 시 마다 http 통신으로 노출되는 반면, refresh Token은 access Token의 만료 후 재발급 시에만 네트워크 통신을 통해 서버로 보내지기 때문에 탈취될 위험이 현저히 적어짐