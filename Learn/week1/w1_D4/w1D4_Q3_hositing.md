# Q1. 자바스크립트 Scope에 관한 다음 코드를 읽고, 옳지 않은 것을 고르세요.

```js
f2(); // 1번

var f = function () {
  console.log("function 1");
  console.log("f3 : ", f3); // 2번
};

f(); // 3번

let f4 = () => console.log("function 4");

function f2() {
  console.log("function 2");
  f4(); // 4번
}

var f3 = () => console.log("function 3");
```

## 1. 
```
1번 실행 시 4번에서 ReferenceError가 발생하는 이유는, 
f2가 hoisting되지 않았기 때문이다. ( 이게 틀림 )
  => f2가 아닌 f4가 hoisting 되지 않은 것임.

--해설--
4번에서 ReferenceError가 발생하는 이유는 
let으로 선언된 변수가 hoisting되지 않기 때문입니다. 

즉 f4가 hoisting 되지 않으며, f2 호출 시
f4는 uninitialized 상태의 변수가 됩니다.
```

## 2.
```
3번 실행 시 2번이 “f3 : undefined”가 되는 이유는, 
f3가 hoisting되었기 때문이다.

--해설--
f3는 변수만 선언된 상태이며, 
따라서 함수가 아직 f3 변수에 할당되지 않아 undefined 상태가 됩니다.
```

## 3.
```
4번의 에러를 수정하려면, 
f4가 f2의 lexical scope에 등록되고 초기화되어야 한다.

--해설--
4번의 에러는 f2 호출 시 여전히 f4가 uninitialized 상태이기 때문입니다.
따라서 f2 호출 시 완전히 초기화되어야만 합니다.
```