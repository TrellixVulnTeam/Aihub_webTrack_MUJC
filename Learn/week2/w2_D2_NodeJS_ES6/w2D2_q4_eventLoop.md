## 다음 코드를 실행하였을 때 출력 결과를 순서대로 나열하세요.

```js
function baz() {
  console.log('baz');
}

function bar() {
  console.log('bar');
}

function foo() {
    console.log('foo');
    setTimeout(bar, 0);
    baz();
}

foo();
```

출력순서
1. foo
2. baz
3. bar : set비동기코드는 message Queue(태스크큐)에 들어가서 대기했다가 콜스택이 비었을 때 삽입/수행
<br><br>


순차처리로 변형
```js




```
