# 함수는 일급객체

- closure : 함수안에 변수를 저장하는 것을 closure라고 한다.
- 일급 객체의 특성으로 인해, 함수끼리도 비교연산이 가능하다.
  - 함수간 주소가 같은지 확인 가능
<br><br>

- 자바스크립트 클로저는, 함수의 일급 객체 성질을 이용한다.
- 함수가 생성될 때 , 함수 내부에서 사용되는 변수들이 외부에 존재하는 경우 그 변수들은
함수의 스코프에 저장된다
- 함수와, 함수가 사용하는 변수들을 저장한 공간을 클로저(closure)라 한다.

```js
//ex1
function createCard() {
let title = "";
let content = "";
function changeTitle(text) {title =
text}
function changeContent(text) {content =
text}
function print() {
console.log("TITLE - ", title);
console.log("CONTENT - ", content);
}
return { changeTitle, changeContent,
print };
}

const card1 = createCard();
card1.changeTitle("생일카드");
card1.changeContent("생일축하해");
card1.print();
const card2 = createCard();
card2.changeTitle("감사카드");
card2.changeContent("고마워");
card2.print();
```

<br><br>

```js
let rate = 1.05;
function app() {
    let base = 10;
    return function (price) {
        return price * rate + base;
};
}
const getPrice = app();
getPrice(120) // 136 출력
```
- base는 app 함수 내부, rate는 app 함수 외부의 스코프에 존재함
- 함수가 참조하는 변수는 실행 시점에 실행 컨텍스트에 의해 스코프가 결정됨

<br><br>

```js
let rate = 1.05;
function app() {
let base = 10;
return function (price) {
return price * rate + base;
};
}
console.log(app()(1)); // 11.05
rate = 1.1;
console.log(app()(1)); // 11.1
```
- 스코프에 따라서 변수에 영향을 받는다.
- rate의 변경은 두 클로저 함수 호출에 반영되지만, base는 증가해도 영향을 미치지 않는다.
- base는 app 호출 시 매번 생성되는 반면, rate는 매번 생성되지 않는다.


<br><br>