## Node.js - FileZilla
노드 js는 빌드파일 생성하지 않고 서버를 생성할 수 있음

### FileZilla
파일질라는 GUI방식의 경량 웹 서버임,<br>
node.js로 만든 서버는 위에서 언급한대로, 빌드파일을 생성하지 않고, 개발 시 파일들 전체를 긁어, Filezilla로 새로 생성한 `server`라는 디렉토리 내에 복붙하고 그 안에서 `node app.js`를 수행함으로서 서버 사용이 가능함. (매우 간단), but 보안이슈가 존재함. => 따라서 네이버 클라우드같은 가상 서버를 사용해주는 것. 거의 무조건적으로 가상 서버가 좋음.

## 리액트 - nginx
리액트는 빌드파일을 생성한 후, 이를 바탕으로 서버를 생성해야 함.