# res.send() 사용
res.send()는 res.write()와 res.end()가 통합된 방식의 메서드이므로<br>
res.send()는 한번밖에 사용하지 못한다.
<br>
만일 아래와 같이, res.send()를 두번 적어 사용 시, 맨 처음의 res.send()만 사용되고 나머지는 무시됨

<br>

```js
//index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {    // get의 첫번째 인자는 응답해야할 요청으로 받은 url,
//첫번째 인자로 받은 url에 담긴 요청 정보를 파싱하여 (ex.id, page='') 콜백의 인자인 request 객체로 구성됨 
  res.send('res.send() 두 번 써보기 : 이거 적용됨');
  res.send('무시되는 두번째 이상의 res.send()');
});

    // 8003 포트로 서버 실행
app.listen(8003, () => {
  console.log('익스프레스로 서버 실행!');
});


---


//express 서버 실행 명령 (터미널)
$node index.js server start

```

