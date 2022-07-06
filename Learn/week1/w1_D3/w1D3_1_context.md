# JS심화 1 : 실행 컨텍스트

1. 자바스크립트 함수가 실행되는 과정
2. 실행 컨텍스트
3. this가 가리키는 것
4. 화살표 함수, 일반 함수
5. js와 Closure
6. ES6 Rest, Spread Operator

<br>

## 0. JS의 실행 구조와 동작원리 : 비동기
js는 기본적으로는 동기적(synchronous) 처리 방식을 가져 코드를 순차처리 하지만, 특정 경우에 한해서 비동기 처리를 수행한다. <br>
**[setTimeout(), Ajax 함수, 이벤트 루프]** 세가지는 무조건적으로 비동기 처리하여 대기열 큐에서 스택이 빌 때 까지 대기한다. 

JS는 Stack에서 js 코드를 실행시키며 큐에 대기코드를 넣어둠 ( 싱글 스레드: 메인 스레드 ) 또한 Heap에 변수정보를 저장해두고 스택에서 코드 실행 시 관련정보를 가져와서 사용함.<br>

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
<br><br>

---
<br><br>

# 동적 바인딩 정리
<br>

## [extend 0-1] 바인딩이란?
변수는 [변수명, property, 주소(참조), 자료값 ]으로 구성됨,<br>
바인딩이란 프로그램의 어떤 '기본단위'가 가질 수 있는 구성요소의 구체적인 값,성격 등을 확정하는 것을 말한다.
```c
//c 예시코드
int num =123;
```
- num = 변수이름
- int = 자료형
- 123 = 자료값 <br><br>
위의 내용들은 변수의 property의 구체적인 값들이다. <br><br>

**위와 같이 이름,자료형,자료값에 구체적인 값을 할당하는 각각의 과정을 '바인딩'이라고 한다** <br><br>
(1)동적 바인딩: <br>여기에서 더 나아가 run-time 도중 바인딩이 일어나며, 프로그램 실행 도중 바인딩이 변경 가능할 경우, 동적 바인딩이라고 한다. <br><br>
(2) 정적 바인딩: <br>반대로 run-time이 아닌 컴파일 시간에 바인딩이 발생하며, 실행 중 변하지 않고 바인딩이 유지된다면 '정적 바인딩' 이라고 한다.

<br>

ref: https://medium.com/pocs/%EB%B0%94%EC%9D%B8%EB%94%A9-binding-4a4a2f641b27 <br>
<br><br>

## [extend 0-2] 함수는 다양한 실행 컨텍스트에서 호출될 수 있다.
- 동적 바인딩 = 함수의 호출 환경에 따라 this는 동적으로 세팅된다. <br>
- 호출되는 실행 컨텍스트(환경)에 따라 this가 가리키는 것 등이 달라질 수 있다.

<br><br>

## [extend 1] '화살표 함수' 의 this는 자기 자신의 객체가 아닌 그보다 상위 객체를 가리킴

- 화살표 함수의  this는 호출된 함수를 둘러싼(한 단계 밖의) 실행 컨텍스트를 가리킴
- 일반 함수의 this는 새롭게 생성된 실행 컨텍스트(해당 영역)를 가리킴

[w1D3_ex1 참고자료]('./w1D3_ex1.html') <br>
[w1D3_ex3_dynamicThis 참고자료](./w1D3_ex3_dynamicThis.html)

<br><br>

## [extend 2] setTimeout, bind, call, apply 네가지는 함수의 실행 컨텍스트(this가 가리키는 것 등)을 바꿀 수 있다.
bind함수(바인딩)를 이용해 this를 임의의 객체를 가리키도록 바꿀 수 있음
<br><br>

1. bind() 메서드
```js
bind 메서드: 
bind에 인자로 제공된 값으로 this를 설정한 새로운 함수를 생성한다. 이 새로운 함수의 인자값을 순서대로 지정할 수도 있다.


---
//code : undefined 가 나오는 예시
var healthObj = {
	name : "달리기",
	lastTime : "PM10:12",
	showHealth : function() {
        setTimeout(function(){
            console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");
        }, 500);
    }
}

healthObj.showHealth();
---

위 코드를 실행하면 500ms 뒤에 '달리기님, 오늘은 PM10:12에 운동을 하셨네요'가 출력될 것 같지만, 여기서 this.name과 this.lastTime의 결과는 undefined이다.

 setTimeout은 비동기 함수로, 이 setTimeout이 실행될 땐 showHealth 함수는 이미 반환이 된 상태이다. 즉, setTimeout 안의 this는 window 객체를 가리키게 된다.  window.name과 window.lastTime은 없기 때문에 undefined라는 결과가 나오는 것이다.

의도한 대로 this가 healthObj를 가리키게 하려면 bind 메서드를 사용하면 된다.

---
// code : bind 메서드로 this가 가리키는 값 원하는대로 변경하기
var healthObj = {
	name : "달리기",
	lastTime : "PM10:12",
	showHealth : function() { setTimeout(function(){
            console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");
            }.bind(this), 500); //bind를 사용해서 해당 this는 'healthObj'를 가리키게 됨
    }
}
 
---
※ 참고 : function 뒤에 .이 붙어 호출되면 그 function은 객체로 변하고, function 네이티브 객체에 들어있는 메서드들을 부를 수 있다. 그 중 하나가 bind 메서드이다.

 
```

<br><br>

## [extend3] 화살표 함수의 this는 한번 정해지면 바뀌지 않는다 : Dynamic Binding을 하지 않음 = 정적 바인딩

