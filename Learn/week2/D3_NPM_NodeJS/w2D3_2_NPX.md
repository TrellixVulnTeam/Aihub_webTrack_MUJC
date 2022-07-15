# week2 DAY3 2 : NPX

## 1.NPX 
npm 패키지 설치하지 않고 사용할 수 있게 해주는 도구<br>
패키지를 프로젝트나 전역 패키지로 추가하지 않고, npx를 이용해 바로 실행 가능

```js
//npm
    // 전역 패키지 추가 후 실행
$ npm i cowsay -g
$ cowsay hi

//npx
    // 설치없이 바로 실행
$ npx cowsay hi
```
<br><br>

### (1) NPX - Node.js 특정 버전으로 실행
npx를 사용하면 Node.js의 특정 버전을 사용하여 js파일을 실행할 수 있음<br>
프로젝트의 Node.js 버전 별 실행환경을 확인할 때 유용하다.<br>

```js
//Node version

$ npx node@12 index.js
$ npx node@14 index.js
```

<br><br>

### (2) NPX - github gist 코드 실행
gist는 github에 등록된 간단한 코드<br>
npx를 이용하면 gist 코드를 다운받지 않고 바로 실행 가능
<br>
git이 설치되어 있어야 하며, 온라인상 코드는 위험이 존재하므로 코드를 잘 확인하고 실행해야 함

```js
// github gist 코드 실행

$ npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32
```

<br><br><br>


   

