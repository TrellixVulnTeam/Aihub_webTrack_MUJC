# Express.js + Mongoose ODM 
Express.js는 PJ구조를 자유롭게 구성 가능, 어느부분에 몽구스 ODM을 위치시키면 좋을지 적절한 위치 결정이 중요<br><br>

### 몽구스 위치 정하기
일반적으로 express의 models 디렉에 스키마와 model을 같이 위치시킴<br>

app 객체는 어플리케이션 시작을 의미하는 부분으로, 해당 부분에 데이터베이스 연결을 명시하는 mongoose.connect를 위치시킴<br><br>

`my-web`<br>
ㄴ`app.js` : mongoose.connect 작성<br>
ㄴ`models`<br>
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ`index.js` : mongoose.model 선언<br>
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ`schemas`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ㄴ`...` : mongoose.Schema 정의 

