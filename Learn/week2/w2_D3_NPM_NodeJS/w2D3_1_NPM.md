# week2 DAY3 1 : NPM과 모듈

## 1.NPM 이해
Node Package Manager<br>
Node.js 프로젝트를 관리하는 필수적인 관리 도구<br>
<br>
`온라인 저장소` + `커맨드라인 도구`
<br><br>

### (1) NPM 온라인 저장소 
수많은 오픈소스 라이브러리와 도구들이 업로드되는 저장소.
- 필요한 라이브러리, 도구 손쉬운 검색 가능
- Node.js의 인기로, 거대한 생태계를 보유

### (2) 커맨드라인 도구
프로젝트 관리를 위한 다양한 명령어를 제공
- 저장소에서 라이브러리, 도구 설치
- 프로젝트 설정 / 관리
- 프로젝트 의존성 관리

<br><br>

## 2. NPM 사용해보기
NPM 커맨드라인 도구의 사용법을 익히는 것<br>
프로젝트의 생성부터 다양한 기능을 사용하는 법까지 학습

<br>

### (1) 프로젝트 생성
`$npm init`<br>
프로젝트 디렉터리를 생성하고, 그 안에서 npm init 사용 시<br>
몇번의 질문을 통해 package.json이라는 파일 생성<br>
이 디렉터리가 Node.js 프로젝트가 된다.

<br>

```js
$ npm init

package name: (first
project)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to ~/package.json

{
    "name": "first-project",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {},
    "author": "",
    "license": "ISC"
}

Is this OK? (yes)
```

<br><br>

### (2) package.json 이란?
프로젝트 관련 정보들이 저장되는 파일<br>
이 파일을 직접 수정하거나 npm 명령어를 사용, 프로젝트 정보수정 가능
<br>

<package.json 구성요소>
1. version : 프로젝트의 버전
2. name : 프로젝트의 이름
3. description : 프로젝트 설명
4. scripts : npm run [script name]으로 실행할 수 있는 사용자 작성 스크립트
5. dependencies : 의존성 패키지들
6. devDependencies : 개발환경에서만 사용하는 의존성 패키지들

<br><br>

### (3) 의존성 관리하기
프로젝트 내에서 사용하는 라이브러리를 관리하는 방법<br>
프로젝트가 실행되기 위해 라이브러리에 의존하기 때문에,<br>이런 라이브러리들을 dependency(의존성)이라고 말함

<br>

- 라이브러리 : 특정 기능을 수행하는 코드의 묶음 = 패키지

<br><br>

### (4) npm install 명령어
해당 명령어를 통해 의존성 관리 가능,<br>
npm install 명령어는 사용방법에 따라 여러 용도로 사용
- 의존성 추가
- 의존성 내려받기
- 개발용 의존성 추가
- 전역 패키지 추가 

```
$npm install [package-name]
```
필요한 패키지를 프로젝트에 추가할 수 있음<br>
추가된 패키지는 package.json의 dependencies에 추가되며,<br>
node_modules 디렉터리에 저장된다.

<br>

**개발용 의존성 추가**<br>
`$npm install [package-name] --save-dev<br>
npm은 개발용 의존성을 분리하여 관리 가능<br>
개발용 의존성이란 배포 전까지만 사용하는 의존성(ex. 유닛 테스트 라이브러리)이며, --save-dev 옵션을 사용해 개발용 의존성을 분리 추가할 수 있음, 개발용 의존성은 package.json의 devDependencies에 추가됨

<br><br>

### (5) package-lock.json
프로젝트에 의존성을 추가하면 package-lock.json 파일 생성됨, 프로젝트에 의존성을 추가할 시 자동으로 '^최신버전'으로 추가되는데, 의존성 버전이 갑자기 변경되지 않도록, 설치된 버전을 고정하는 역할을 해당 lock파일이 수행함.

<br><br>

### (6) 의존성 버전 표기법

```
$npm install [package-name]@[version]으로 패키지 버전 지정
```
EX)<br>
1. ~1.13.0 : 1.13.x 버전 설치 
2. ^1.13.0 : 1.x.x 버전 설치, 가장 왼쪽의 0이 아닌 버전을 고정
3. 0.13.0 : 0.13.0 버전만 설치

<br><br>

### (7) 프로젝트에 의존성 내려받기

```
$npm install
```
npm install 명령어를 아무 옵션 없이 사용하면,<br>
package.json 에 정의된 dependencies와 devDependencies의 의존성을 현재 내 작업환경의 node_modules 디렉터리에 내려받음
<br><br>

기본적으로 node_modules 디렉터리는 코드 관리나 배포 시 업로드 하지 않음, 의존성이 많아지면 용량이 너무 커지는 것과 운영체제별로 실행되는 코드가 다른 경우가 존재하기 때문임

<br><br>

### (8) 개발용 의존성 제외하고 내려받기
```
$npm install --production
```

프로젝트 배포할 때, 개발용 의존성을 같이 포함할 필요 없음<br>package.json의 dependencies만 node_modules에 내려받음

<br><br>

### (8) 전역 패키지 추가
```
$npm install [package-name] --global
```
패지키를 전역 패키지 디렉터리에 내렵받음<br>
주로 프로젝트에 종속되지 않는 커맨드라인 도구들을 전역 패키지를 추가해서 사용

<br><br>

### (9) 로컬 패지키 vs 전역 패키지

1. 로컬 패키지<br>
package.json에 선언되어 있고, node_modules에 저장된 패키지

2. 전역 패키지<br>
npm install -g를 통해 내려받아, 전역 패키지 저장소에 저장된 패키지

<br><br>
전역 패키지도 프로젝트에서 사용할 수 있으나, 프로젝트 의존성이 package.json 내에 명시적으로 선언되어 있는 것이 프로젝트 관리의 좋은 방향임

<br><br>

### (10) 의존성 삭제하기
`$npm remove [package-name]`<br>
의존성 패키지 삭제, package.json의 dependencies와 devDependencies에서 삭제하며 node_modules에서도 삭제

<br><br>

### (11) 스크립트 실행하기
스크립트란 간단한 동작을 수행하는 코드<br>
package.json의 scripts 영역에 선언된 스크립트를 <br>
`$npm run [script-name]`명령어로 실행할 수 있음
<br>

```js
//package.json
{
    …
    "scripts": {
    "say-hi": "echo \\"hi"\" 
    },
    …
}
```

```
// 실행시 콘솔
$
npm run say hi
"hi"
```

<br><br>

- npm script 내에선 의존성 패키지를 사용할 수 있음<br>
`"scripts: {"test": "node_modules/.bin/tap test/\*.js}`
<br>

`"scripts": {"test": "tap test/\*.js"}`
<br>

**자주 사용되는 스크립트**
npm 스크립트엔 run을 제외하고 사용할 수 있는 주요 스크립트들이 있음
1. `test`: 코드 유닛 테스트 등에 사용
2. `start`: 프로젝트 실행
3. `stop`: 프로젝트 종료

<br>
run을 제외하고 사용할 수 있을 뿐, npm 내부적으로 코드를 제공해주는 것은 아님
<br><br>

### (12) NPM 요약

**명령어**
1. `npm init`: 프로젝트 생성
2. `npm install`: 의존성 추가 
3. `npm remove`: 의존성 삭제
4. `npm run`: 스크립트 실행

<br>

**주요 파일/디렉**
1. node_modules : 프로젝트 의존성 저장 디렉터리
2. package.json : 프로젝트 관리 (버전,의존성, 스크립트 등)
3. package-lock.json : 의존성 버전 확인

<br>

