1. 일단 express-generator 로 프로젝트를 생성하면, 해당경로에서 npm install로 관련 의존성을 모두 추가하고 시작함
2. `npm start`: package.json의 scripts에 정의된, `node ./bin/www` 코드를 실행하여 서버를 시작시킴 
   - bin 폴더의 www파일을 뜯어보면 PORT를 할당하는 코드를 볼 수 있음 (false시 3000 할당)

3. `app.js`는 express의 모든 시작점으로, express관련 모든 환경을 설정해 뒀음
    - 엄밀히는 `./bin/www`에서 app.js의 것들을 import하여 사용하긴 함
    - app.use() 로 이것저것 실행함