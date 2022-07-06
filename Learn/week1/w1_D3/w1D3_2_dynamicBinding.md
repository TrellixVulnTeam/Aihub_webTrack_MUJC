# Week1 Day3 오후 Dynamic Binding


```js
function myFunc

```

```js
//함수 간접호출 예제

function Person(name) {
    this.name = name
    this.printName = function() {
        console.log(this.name) 
    }
}

const p = new Person('Daniel') // new를 붙여 생성자 호출
setTimeout(p.printName.bind(p),1000) // 바인딩을 사용
```
- 이처럼 함수는 다양한 상황(환경)에서 호출될 수 있다.
- 함수의 호출 환경에 따라 this는 동적으로 세팅된다.
    - 이렇게 this가 환경에 따라 바뀌는 것을 '동적 바인딩'이라고 함
- bind, apply, call 등으로 this가 가리키는 것을 조작할 수 있다.

<br>
<br>


```js
let o = {
    name: "Daniel",
    f1: () => {
        console.log("[f1] this : ", this);
    },
    f2: function () {
        console.log("[f2] this : ", this);
    },
};

o.f1(); // global
o.f2(); // o
setTimeout(o.f1, 10); // setTimeout은 전역에 있는 객체이므로 해당하는 함수의 this는 f1,f2와 상관없이 this로 할당됨
setTimeout(o.f2, 20); // global
```

- setTimeout으로 함수의 실행환경을 바꾼다
    - 최상단 스코프의 실행 컨텍스트는 전역이다.
<br>

- bind, call, apply 등의 함수로 this를 조작한다.
- setTimeout은 일반적인 함수 호출과는 다른 콜백 호출이다.
- printName 메서드는 BIND함수를 이용해 this 변수가 o를 가리키도록 컨텍스트를 동적 바인딩 한다.

<br>

---

<br>

# 화살표 함수 vs 일반 함수
- 화살표 함수의 this는 호출된 함수를 둘러싼(한 단계 밖의) 실행 컨텍스트를 가리킴
- 일반 함수의 this는 새롭게 생성된 실행 컨텍스트(해당 영역의)를 가리킨다.

```js
const o = {
    method() {
        console.log("context : ", this) // o
            let f1 = function () {
            console.log("[f1] this : ", this)
    }
    let f2 = () =>
        console.log("[f2] this : ", this)
        f1() // global
        f2() // o
    },
};
o.method()
```

### 화살표 함수의 this는 정해지면 바꿀 수 없다.
call, bind, apply를 사용해도 바뀌지 않음, setTimeout등 this가 바뀌는 상황에서 유용하게 화살표 함수를 사용

```js
window.name = 'Daniel'
let o = { name : 'Kim' }
let arrowFunction = (prefix) => console.log(prefix + this.name)
arrowFunction('Dr. ') // Dr. Daniel
arrowFunction.bind(o)('Dr. ') // Dr. Daniel = 바인드 해도 바뀌지 않음
arrowFunction.call(o, 'Dr. ') // Dr. Daniel = call로도 바뀌지 않음
arrowFunction.apply(o, ['Dr. ']) // Dr. Daniel = apply로도 바뀌지 않음
```