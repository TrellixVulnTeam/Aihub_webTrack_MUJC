# REST API
REST + API<br><br>
REST 아키텍처를 준수하는 웹API<br>
RESTful API의 준말<BR>

## API란?
Application Programming Interface<br>
서비스나 프로그램 간에 미리 정해진 기능을 실행할 수 있도록 하는 규약<br>

운영체제 API, 프로그램언어 API, 웹 API등이 있음<br>

<br>

## REST란?
REpresentational State Transfer<br>
웹에서 자료를 전송하기 위한 표현 방법에 대한 아키텍처<br>
REST를 정확히 구현하기 위해선 많은 제한조건이 있지만,<br>
기본적인 REST 가이드를 따르면 조금 더 좋은 구조의 API를 구성 가능<br>

<br>

## REST API 기본 가이드
REST API는 API의 동작을 `HTTP 메서드 + 명사형 URL`로 표현함<br><br>

### (1) HTTP 메서드의 사용

`/posts` 라는 URL은 '게시글'이라는 자원을 가리킨다 할 때<br>
`GET(가져오기)`, `POST(새로만들기)`, `PUT(수정하기)`, `DELETE(삭제)` 의 `**HTTP 메서드**`와 결합해 API 동작을 정의해야 함.<br><br>

### (2) URL 표현법
REST API URL의 자원은 `복수형으로 표현`됨
- 특정 자원에 접근 : `복수형 자원명` +`아이디`
    - `/posts` : 게시글 전체 를 지정하는 url
  
    - `/posts/1` : 1번 게시글 이라는 자원을 지정 

<br><br>

### (3) 계층적 자원
REST API는 URL을 통해 자원을 계층적으로 표현함.<br>

`users/1/posts` 라는 url은 `유저-1번`의 `게시글전체` 라는 자원을 지정하는 계층적 표현임