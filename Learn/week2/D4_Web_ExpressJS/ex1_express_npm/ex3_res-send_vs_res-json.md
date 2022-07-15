# res.send() VS res.json (VS res.end) 비교
res는 Node.js만의 진보된 response 객체임

## 핵심
res.send() 는 res.json() 과 핵심적으로 별 차이가 없다.<br>

### res.send()
send에 전해진 arguement에 따라, Content-type이 자동으로 생성되며, 해당 방식이 기본임.
<br>

### res.json()
json이 아닌 type도 받아 json 형식으로 바꾸어 보내준다.<br>
즉 Content-type 헤더를 application/JSON 으로 고정해줌<br>
<br>
하지만 결국 res.json도 res.send()를 마지막에 호출하므로, 타입을 바꾼다는 차이밖에 없음

<br><br>

1.res.send()로 json 형식으로 구성해 전송
```js
app.get('/api/login', (req,res) => {
    res.send( 
        {
         name: 'horizD',
         age: 27,
         stack: 'python',
         })
}) // 위와 같이 send에 들어갈 데이터를 직접 json형식으로 구성하여 보내는 것을
```

<br>

2.res.json()을 사용
```js
app.get('/api/login', (req,res) => {
    res.json(name: 'horizD',age: 27, stack: 'python',)
})
```
