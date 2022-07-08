# HTTP, REST API

## HTTP(Hypertext Transfer Protocol)
Web 에서 서버와 클라이언트 간의 통신하는 방법을 정한 통신 규약

- `클라이언트`는 웹 브라우저 등 서버로 요청을 보내는 대상
- `서버`는 클라이언트가 요청을 보내기 전까지 대응하지 않음
- 서버와 클라이언트 사이에는 무수히 많은 요소가 존재
- `HTTP` 는 이런 존재들 사이의 통신 방법을 규정

<br><br>

### HTTP 통신 구조
`클라이언트s` <-(HTTP요청/응답)-> `Web { proxy, DNS서버, Tunnel }` <-(HTTP요청/웅답)-> `서버s` 

<br><br>

### HTTP Message(요청/응답)
HTTP Message엔 [서버주소(RemoteAddress), 요청 메서드(GET,POST..), 상태코드, target path, 헤더정보, 바디정보, `*access-control-allow-origin`] 등이 포함됨

1. Message  
- `GET 방식 요청` : 눈에 보이는 방식의 요청(읽기)
- `POST 방식 요청` : 눈에 보이지 않는 방식의 요청(안보이게, 몰래) 

<br>

2. Message에 담기는 것 중 헤더정보/바디정보
- `header` : 메타 데이터가 담김, 서버와 클라이언트 간 통신에 필요한 정보들 / 클라이언트 요청 시, 서버 응답 시 모두 헤더에 정보를 담을 수 있음
  - 콘텐츠 관련 정보
  - 인증 관련 정보
  - 쿠키/캐시 관련 정보
- `body` : 데이터 


요청,응답 메시지의 모양이 다름

HTTP/1.1 메시지는 사람이 읽을 수 있음

<br><br>

### HTTP STATUS
HTTP 요청 시 , 클라이언트는 요청의 결과에 대한 상태 정보를 얻는다
- 200, 400, 500 등 숫자 코드와 , OK, NOT FOUND 등의 텍스트로 이루어짐
- 코드를 이용해 각 결과에 해당하는 행위를 할 수 있음

<br><br>

### 요청 메서드
HTTP 에서 , 클라이언트는 서버로 요청을 보낸다, 요청 시 요청 메서드로 특정 요청에 대한 동작을 정의한다


- [ GET, POST, PUT, PATCH, DELETE, OPTIONS, CONNECT, TRACE ] 등이 규정됨


<br><br>

---

<br><br>

## REST API (Representational State Transfer API)
REST API 는 HTTP 의 `요청 메서드에 응하는 서버 API` 와 `클라이언트 `간 통신의 구조가 지켜야 할 좋은 방법(매뉴얼)을 명시한 것이다

구체적 내용으로는, 요청 메서드의 의미, URI 설계, 클라이언트 상태에 대한 동작 등을 정의함

```
+ API는(Application Programming Interface)는 사용자가 특정 기능을 사용할 수 있도록 제공하는 함수를 의미함
```

- *GET : 리소스 정보를 얻음(읽기)
- *POST : 리소스를 생성, 안보여줌(쓰기 / ex. 로그인 - 정보를 보여주면 안됨 )
- PUT : 리소스를 생성하거나 업데이트 : POST와 동일동작
- DELETE : 리소스를 제거 : POST와 동일동작

<br><br>
### Fetch API
기존 XMLHTTPRequest를 대체하는 HTTP 요청 API
, 잘 안쓰이며 차라리 Ajax의 API를 사용함 ([참고 : Ajax의 동작원리](http://www.tcpschool.com/ajax/ajax_intro_works))

- ES6에 추가된 Promise를 반환
  - 네트워크 요청 성공 시, Promise는 Response 객체를 resolve함
  - 네트워크 요청 실패 시, Promise는 에러를 reject함

<br>
<1. fetch API는 프로미스 반환>

```js
let result = fetch(serverURL)

result
    .then(response => {
        if ( response ok ) {
            // 요청 성공
        }
    })
    .catch(error =>{
    //요청 실패
        })
```

<br><br>

<1. fetch API는 프로미스 반환>

```js
let result = fetch(serverURL)

result
    .then(response => {
        if ( response ok ) {
            // 요청 성공
        }
    })
    .catch(error =>{
    //요청 실패
        })
```

<br><br>

<1. fetch API는 프로미스 반환>

```js
let result = fetch(serverURL)

result
    .then(response => {
        if ( response ok ) {
            // 요청 성공
        }
    })
    .catch(error =>{
    //요청 실패
        })
```

<br><br>

<1. fetch API는 프로미스 반환>

```js
let result = fetch(serverURL)

result
    .then(response => {
        if ( response ok ) {
            // 요청 성공
        }
    })
    .catch(error =>{
    //요청 실패
        })
```




