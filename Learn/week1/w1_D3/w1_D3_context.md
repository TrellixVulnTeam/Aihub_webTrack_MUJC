# JS심화 1 : 실행 컨텍스트

1. 자바스크립트 함수가 실행되는 과정
2. 실행 컨텍스트
3. this가 가리키는 것
4. 화살표 함수, 일반 함수
5. js와 Closure
6. ES6 Rest, Spread Operator

<br>

## 0. JS의 실행 구조와 동작원리 : 비동기
반드시 순차적이지는 않다.

JS는 Stack에서 js 코드를 실행시키며 큐에 대기코드를 넣어둠 ( 싱글 스레드: 메인 스레드 ) 또한 Heap에 변수정보를 저장해두고 스택에서 코드 실행 시 관련정보를 가져와서 사용함.
- setTimeout(), Ajax, 이벤트리스너 등 비동기 코드는 옆으로 치워놓고 다른 작업을 먼저 수행하고 돌아옴 : 기다려주지 않음 : 이런 대기코드를 큐의 대기열에 넣어뒀다가 스택의 우선동작들이 모두 수행되면 꺼내서 스택에 넣어줌
<br>

- js는 연산이 오래걸리는 로직 x
- Queue(대기열) 바빠지는 로직 x 
```
-> 위의 두 경우 다른 동작이 멈추게됨
```

- 노드 : 채팅, 화상회의 등
- spring : 주로 많이 사용

## 1. JS 함수가 실행되는 과정

js실행환경
- Browser환경 => chrome, firefox, safari..
- node.js환경 => local

<br>

### js 실행 백그라운드 

#### case1) 웹페이지 구성소스 중 js코드가 없는 경우 

= **전역(Global) 실행 컨텍스트 생성**
- 자바스크립트 엔진은 코드가 없어도 실행 환경( 실행 컨텍스트 = [ this, Variable Object, Scope Chain ] 세가지의 컨텍스트 값)을 초기화 한다.

  - this : window, 아무것도 없기 때문에 최상위 객체인 윈도우 객체로 초기화 됨
  - Variable Object : {}, 빈 객체로 초기화
  - Scope Chain : [], 빈 배열
    ```
    scope란 코드의 현재 실행환경, 맥락(Context)을 의미

    더 직관적으로는 현재 코드 실행 환경에서 접근할 수 있는 변수, 함수 등을 포함한 범위로 이해
    ```
    ```
    this 포인터는, 글로벌(최상위) 스코프에서는 window를 가리킴
        + this = reference변수 로 이해
    ```
    ```
    실행 컨텍스트 = Execution Context
    ```
 <br>

#### case2) 웹페이지 구성소스 중 js코드가 포함된 경우 
```javascript
// 해당 웹페이지 구성소스에 포함된 js 코드 파일
function myFunc() {
    let a = 10
    let b = 20
    function add(first, second) {
        return first + second
    }
    return add(a,b)
}
myFunc()
```
<br>

1. js 코드가 없을 때와 마찬가지로, 실행 컨텍스트 초기화 (이는 코드가 있던 없던 시작시 무조건 초기화 과정이 실행 됨) [this, Variable Object, Scope Chain]
2. myFunc() 함수 실행시, 빈 상태로 초기화 되었던 Context에 새로운 값들이 할당됨
    - this : undefined
    - Variable Object : {
        a: 10
        b: 20
        add: function {...}
    }
    - Scope Chain : [global]
    ```
    -> myFunc 실행 종료 시, Contexts로 할당됐던 값들 다시 초기화(사라짐) 
    ```
    -> 해당하는 초기화, 할당 과정은 이런 실행 컨텍스트가 쌓이는 구성을 보이는데,
    이 과정에서 call stack 원리로 구성되어 있음.

3. add 실행 시 컨텍스트 갱신
    - this : undefined
    - Variable Object : {
        first: 10
        secont: 10}
    - Scope Chain : [myFunc, Global]


<과정 재요약>
- 함수가 실행되면, 함수 스코프에 따라 환경이 만들어진다.
- this, 함수 스코프의 변수들, 그리고 스코프 체인이 형성됨
- 스코프 체인들의 경로를 따라 글로벌 환경에 도달함
+
- 객체의 메서드의 경우, 메서드 환경의 this는 실행한 메서드가 소속한 자신의 객체를 가리키게 된다. 하지만 this가 가리키는 것은 실행되는 환경에 따라 변한다.



## Q1. 함수의 일급 객체 성질에 대한 내용


1. 함수를 다른 함수의 인자로 넘기면, 다른 함수 내부에서 그 함수를 호출할 수 있다.
```
함수를 인자로 받아 자유롭게 활용할 수 있습니다. 인자로 받은 함수는 또한 다른 함수를 인자로 받을 수 있습니다.

ex)
function index1(){
    let name1 = ""; // Closure에 저장: 만일 이렇게 함수 내부에서 변수 선언 및 사용 시, 해당 변수를 기억해서 다른 곳에서 쓸 수 있음
}

function index2(){
    index1()    // 타 함수 내부에서 글로벌 함수 사용 가능
}
```

<br>

2. 함수 안에 함수를 선언했을 때 그 함수를 외부에서 쓰고 싶다면, 그 함수를 리턴하여 사용할 수 있습니다.


<br>

3. 함수의 실행이 끝나도 내부 변수를 유지할 수 있다.
```
함수 안에서 closure가 만들어지면, 내부 변수가 메모리에 남아 closure에 활용됩니다.
```