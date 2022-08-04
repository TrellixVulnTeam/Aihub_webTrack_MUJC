# 네이버 클라우드를 이용한 ubuntu 배포환경 구축

### 네이버 클라우드 ubuntu 서버 구축 프로세스

1. 네이버 클라우드 플랫폼 페이지 접속
2. 로그인
3. 콘솔버튼
4. Platform -> classic 설정
5. services -> all -> compute -> server
6. 서버 생성 
    1. 서버 이미지 선택
       - 디스크 크기 : 50GB
       - 이미지 타입 : OS
       - OS 이미지 타입 : ubuntu
       - 서버 타입 : Micro
       - 16.04-64-server 파트의 (다음)클릭
<br><br>

    2. 서버 설정
        - HDD 스토리지 선택
        - 서버 이름 : prac
        - 서버 타입 Micro(무료)
        - -> 다음 버튼 클릭

    3. 인증키 설정
        - 처음 시 : 인증키 생성 // 보유 시 : 보유 인증키 이용
<br><br>

    4. 네트워크 접근 설정
        - 신규 ACG 생성 
            1. 이름 임의 할당
            2. ACG 설정 (두번)
               1. 첫번째 ACG 생성 
                - 접근 소스 : 0.0.0.0/0 (공인ip 대체로, 전체허용 ip 사용)
                - 허용 포트 : 3389 
                2. 두번째 ACG 생성 (이건 왜만들지 의문)
                  - 접근 소스 : 0.0.0.0/0 (공인ip대체로, 전체허용 ip 사용)
                - 허용 포트 : 22
    5. 해당 서버의 status에서 `포트포워딩 설정` 클릭 및 공인ip 확인
    6. 외부포트: 3389, 내부포트 22 정상 할당 확인

    - 서버에 로그인 하기 위해선 포트포워딩 설정
    - 외부에 서비스하고싶으면 공인 IP 할당받기
<br><br>


7. Filezilla client 다운로드, Putty 다운로드 
8. putty 실행
    1. putty의 Host Name에 네이버 클라우드에서 만든 서버의 공인 ip(포트포워딩) 복붙해서 넣어주기, 포트 3389 넣어주기
    2. saved setting에 이름 넣고, save 클릭해 저장하기
    3. 해당 서버 클릭 후 open 클릭, `root`입력
    4. 네이버 클라우드 서버 우클릭 후 관리자 비밀번호 확인 클릭
    5. 기존에 받은 .pem 인증파일 넣어서 인증 후, 비밀번호 확인
    6. putty 커맨드라인에, 네클에서 받은 비밀번호 입력
    7. 사용자 비밀번호 설정 -> 다음부턴 이 비밀번호로 접근
<br><br>

9. Filezilla 실행
    1. 파일 -> 사이트 관리자 -> 새 사이트
    2. 네클 호스트 ip 복붙 입력, 포트(3389) 입력
    3. 사용자: `root`, 비밀번호: putty에서 설정한 사용자 비밀번호 입력
    4. 연결 -> 리모트 사이트 `/root`로 생성됨 -> 실제 배포시엔 root사용x 다른 새로운 사용자 계정 만들어서 배포해야 함 : 절대 root로 하지 마!!

10. putty로 돌아와서 (nginx설치)
    1. root 사용자 접속
    2. cd /
    3. apt update 커맨드 입력
    4. apt upgrade 입력 -> Y -> Y -> Y
    5. apt install nginx
11. Filezilla로 
    1. filezilla에서 `root/etc/`에 nginx가 설치돼있는 것을 확인
    2. nginx폴더 내의 avaiable 폴더 내에 default 파일을 더블클릭하여 내 로컬에 저장
        - 아마 `c:\users\he1256(내사용자)` 루트에 저장돼있을 것, vs코드로 실행
12. 빌드: (버전 업데이트시마다 빌드 새로해서 올려줘야함)
    - 배포하고자 하는 리액트 서비스의 client 디렉에서 `npm run build`로 빌드시킴
13. Filezilla   
    1. 리모트 사이트 경로 : `/var/www/html` 경로접속
    2. 해당 경로 내 기존 파일 삭제
    3. 리액트 프로젝트 경로에서 빌드된 개별파일들 전부 해당 filezilla 디렉 내로 복붙
14. putty
    1. service start nginx 커맨드 실행
15. 네이버 클라우드
    1. 콘솔 => Services => server => public IP 클릭
    2. 공인 IP 신청 (4000원 내야됨)
        - 적용 서버 선택 => 내가 등록했던 서버 
        ```
        공인 IP: 공개된 IP
        비공인 IP: 뒤에서만 보이는 우리만 알아야 할 IP
        ```
    3. ACG 설정 클릭  (선택적)
        - 특정 ACG 클릭
        - 규칙보기 클릭
        - ACG 설정 버튼 클릭 ->
        ```
        개별 접근권한 설정하는 것임: 보안을 위한 작업
        원래는 PUTTY에서 하나하나 손으로 작업해줘야 하는데,
        이를 네클에서 쉽게 도와주는 기능임
        ```
        ```
        Extend) SSL 인증에서 에러가 났을 시,
        '포트포워딩' 키워드 기억해둘 것 
        ```
16. 네클에서 구매한(할당한) 공인 IP 를 브라우저 URL에 넣어 접속해보면 클라이언트 배포된 것 확인 가능

17. 배포 전 시점 작업 추가 (잘 안되는듯?:보류)
    - 프로젝트 client 디렉 내 package.json의 최하단에 
    ```js
      "proxy": "http://localhost:8080"
    ```
    추가 및 빌드 수행

18. 브라우저의 cors오류 우회하기
    - `chrome://flags/#block-insecure-private-network-requests`
    - 위의 url 브라우저에 검색하여 block insecure...설정을 `disabled`로 설정하기

    - 설정 끝나면, 우리 프로젝트의 server디렉에서 npm start하여, 배포되는 클라 url에서 로그인 등 서버동작 수행해보면 server도 정상 동작함

    ```
    번외로 클라이언트를 배포한 ip가 할당된 배포폴더에, 서버 파일들도 함께 올리면, 클라와 서버가 같은 ip를 사용하기 때문에, cross origin 오류가 발생하지 않을 것임. 
    ```

<br><br>

19. 번외: ip 및 서버 반납하기
    1. 네클 콘솔->서비스->서버->public ip -> 서버 해제 -> 공인ip 반납
    2. 서버-> 사용 서버 선택 -> 정지 -> 반납 


<br><br>

### 번외

1. nginx 우분투 ssl 적용 : https 적용하는 법
    1. [ubuntu ssl 인증서 설치](https://blog.lael.be/post/5107) 검색 : Let's Encrypt를 사용하여 무료로 ssl 사이트 구축
    2. 포트포워딩 잘 작업하기!!

    3. "[nginx ssl 적용](https://www.comodossl.co.kr/certificate/ssl-installation-guides/Nginx.aspx)" 검색 및 적용 : 80포트가 아닌 443이 적용될 것
        - ubuntu port listen
    
    4. [nginx http to https](https://www.lesstif.com/system-admin/nginx-http-https-force-redirect-to-ssl-113344694.html) 검색 후 적용

<br><br>

2. DB 배포하는 법
    1. [ubuntu 몽고DB 다운](https://velog.io/@seungsang00/Ubuntu-MongoDB-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0-Ubuntu-20.04) 검색 후 적용
        - MongoDB는 백그라운드에서 실행되고 있음
        - 마찬가지로, 가상서버로 연 우분투 os환경에서 MongoDB를 돌아가게 하기 위해서 다운받아 주는 것.
        - 네이버 클라우드 -> 서버 -> ACG 규칙 설정에서 -> 27017(몽고DB 포트)만 추가해주면 접근 가능해짐 + MongoDB에서 패스 `localhost:3000` 부분을 공인IP로만 바꿔주면 됨 


```
번외

!포트포워딩이란?
특정 포트로 들어왔을 때, 강제로 다른 포트로 보내주는 것
```