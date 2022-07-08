# js 비동기 / 제어흐름

## 1. 자바스크립트 제어흐름
js는 JAVA와 다르게 메인 스레드를 단일의 스레드로 가지고 있음.
따라서 코드를 처리할 때, 동기적 절차에 따르면, 복잡하고 처리의 시간이 많이 요구되는 경우 뒷 동작에 긴 시간이 소요될 수 있음.
이런 문제를 해결하기 위해 비동기 API를 제공( setTimeout, Ajax함수, Promise 등).



## 2. 이벤트 루프
`메인 스레드의 스택` 과 `태스크큐&잡큐` 사이에 연결되어 태스크 제어 역할을 수행
```
JS엔진은 비동기 처리를 제공하지 않는다(기본적으론 동기처리)
대신 비동기 코드는 정해진 함수를 제공해 활용 ( 비동기 API )
    - 비동기 API의 예시로, setImeout,XMLHttpRequres, fetch 등의 web API가 있음.
    - node.js의 경우 파일 처리 API, 암호화 API 등을 제공
```

## 3. 비동기 처리 (setTimeout, fetch)
```js
// Timeout 비동기처리
setTimeout(() => console.log('타이머끝'),1000)
setInerval(() => console.log('인터벌 타이머'), 1000)

// 네트워크 처리
fetch('https://google.com')
    .then(() => console.log('네트워크 요청 성공.'))
    .catch(() => console.log('네트워크 요청 실패.'))
```

#### 비동기 처리 모델
메인 스레드는 call stack(execution context stack)으로 

비동기 처리 모델은 [이벤트루프, 태스크큐, 잡큐]  등의 모듈로 구성(=API모듈)

API모듈은 비동기 요청을 처리후 태스크 큐에 콜백 함수를 넣는다
JS엔진은 콜 스택이 비워지면 태스크큐의 콜백 함수를 실행한다.(EventLoop가 하는 일)
```
<EventLoop>
계속 돌며 콜스택이 비었는지 확인하여 태스크큐에 알려 setTimeout등의 비동기코드가 콜스택으로 가도록 하고 콜백함수를 호출

```

<br><br><br>

# queue [Job queue vs Task queue]
<br><br>

job queue vs Task queue
```js
setTimeout(() =>
console.log('타임아웃1')}, 0);

Promise.resolve().then(() => console.log('프로미스1'));


setTimeout(() => {
    console.log('타임아웃2') 
    }, 0);

Promise.resolve().then(() => console.log('프로미스2'));

//출력 순서
    // 프로미스 1 프로미스 2
    // 타임아웃 1 타임아웃 2
```

<br><br>

# 1. Task queue 
setTimeout, setInterval (비동기 2순위)


```js
// 동기 & 비동기 타이머 예제
const Counter = {
  count: 0,

  getCount: function () {
    return this.count;
  },

  resetCount: function () {
    this.count = 0;
  },

  incrementSync: function () {
    // 동기적으로 3초 뒤에 this.count를 증가하세요.
    // while 문 안에서, 또 다른 Date.now()를 구하여 3000을 초과하는 순간
    // while 문을 벗어나게 구현하세요.
    const currTime = Date.now();

    while(true) {
        const now = Date.now();

        if ( (now - currTime) > 3000)  {
            break
        }
    }
    this.count++;

  },

  incrementAsync: function (callback) {
    // 비동기적으로 3초 뒤에 this.count를 증가하며 callback을 호출하도록 구현하세요.
    // setTimeout을 활용하세요.
    setTimeout(() => {
        this.count ++;
        callback(); },3000)
    
  },
};

export default Counter;

```

<br><br>

<br><br>
# 2. Job queue
promise, await, async (비동기 1순위)


<br><br>

## (1) Promise
비동기 API중 하나로 promise란 비동기 작업을 표현하는 js 내장 객체 
- 비동기 작업의 진행(pending), 성공(resolved), 실패(rejected) 상태를 표현
- 메서드 체이닝을 통해 비동기간의 처리 순서를 표현할 수 있음
- job queue에 담기며, 이는 Task queue보다 처리의 우선순위가 높다.

<br>




<br><br>

### <1> 생성자 비동기수행부 : resolve, reject

```js
promise1 = new Promise( (resolve, reject) => { ... })
```
해당 예시에서 Promise 생성자는 `executor`라는 이름의 특별한 '함수' 하나를 인자로 받는다. pr객체가 생성되는 순간 명령부에 지시된 executor의 비동기 동작이 시작됨.

- executor는 파라미터로 resolve,reject를 받음
    - resolve는 executor내에서 호출할 수 있는 또다른 함수, resolve가 호출되게 된다면 '이 비동기 작업이 성공했어!'라는 사실이 Promise 객체에 전달됨
    
    - reject 또한 executor내에서 호출할 수 있는 또 다른 함수로 reject가 호출된다면 해당 비동기 작업이 실패했음을 Promise 객체에 알리게 됨

<br>

### <2> 비동기처리부 성공여부 후속동작 정의부 : then, catch

```js

```

이 비동기 동작의 성공/실패 여부에 따라 어떤 동작을 수행할 지 정해줘야 하며 이를 `then / catch` 메서드로 설정해준다.
- then 메소드는 해당 Promise 가 성공했을 때의 동작을 지정합니다. 인자로 함수를 받습니다.
catch 메소드는 해당 Promise 가 실패했을 때의 동작을 지정합니다. 인자로 함수를 받습니다.
위 함수들은 체인 형태로 활용할 수 있습니다. (연속적으로 호출할 수 있습니다. 아래 예제에서 확인하도록 합니다.)


<br><br>

Promise 생성자
```js
// Promise 생성자로 promise 생성
let promise = new Promise((resolve, reject) => {
    
    if (Math.random() < 0.5) {
        return reject('실패')   //reject인자는 Promise 실패 시 수행할 함수를 콜백으로 받음
        }
    resolve(10)     //resolve인자는 Promise 성공 시 수행할 함수를 콜백으로 받음
    }
)

---
// promise의 [then , catch, finally 메서드]
    // then() : 성공 시 수행        == then(callback1, callback2)로 1인자에 성공, 2인자에 실패 메서드를 인자로 넣을 수 있음
    // catch() : 실패 시 수행
    // finally() : 성공여부 떠나 반드시 수행

promise.then(data => {
    console.log('성공: ', data)
    })
    .catch(e => {
        console.log('실패: ', e)
    })
    .finally(() => {
        console.log("promise 종료")
    })


```

<br><br>

Promise 메서드 체이닝
```js
// Promise 메서드 체이닝
    //  메서드 체이닝을 이용해 비동기 처리 간 순서를 만들 수 있음 

promise
    .then(data => {
        return fetchUser(data)  // fetchUser라는 함수가 Promise를 반환한다면 then은 이를 기다렸다가 promise를 받아 실행됨
    })
    .then(user => {
        console.log('User: ', user)
    })
    .catch(e => {
        console.log('실패: ', e)
    })

```
- then/catch 메서드가 또 다른 promise 를 리턴하여 , 비동기 코드에 순서를 부여한다

- 이렇게 동일한 객체에 메서드를 연결할 수 있는 것을 체이닝 이라고 부름

- 함수를 호출한 주체가 함수를 끝낸 뒤 자기 자신을 리턴하도록 하여 구현한다

<br><br>

Promise의 정적인 메서드
```js
// Promise의 정적인 메서드 
    //= new instance 객체가 아닌, Promise 객체 자체로 메서드 실행

Promise
    .resolve(10)
    .then(console.log)

Promise
    .reject('Error')
    .catch(console.log)
```
- Promise.resolve 함수는 성공한 Promise 를 바로 반환한다
- Promise.reject 함수는 실패한 Promise 를 바로 반환한다


- 인위적으로 Promise 메서드 체인을 만들 수 있다
- 비동기 코드로 진행해야 하는 상황 등에 유용하게 사용할 수 있다

<br><br>

Promise.all
- Promise.all 은 Promise가 item으로 담긴 배열을 받아 모두 성공 시 각 Promise 의 resolved 값을 배열로 반환한다
- 하나의 Promise 라도 실패할 시, 가정 먼저 실패한 Promise 의 실패 이유를 반환한다

```js
Promise.all([
    promise1,
    promise2,
    promise3 ])
    .then(values => { 
        console.log("모두 성공 : ", values)
    })
    .catch (e => {
        console.log("하나라도 실패 : ", e)
    })

    //  반환 => [promise1반환값, promise2반환값, promise3반환값]
```

<br><br>
## (2) async / await
Promise 를 활용한 비동기 코드를 간결하게 작성하는 문법임.

async/await 문법으로 비동기 코드를 동기 코드처럼 간결하게 작성할 수 있다

- async 함수과 await 키워드를 이용한다
- await 키워드는 반드시 async 함수 안에서만 사용해야 한다
- async 로 선언된 함수는 반드시 Promise 를 리턴한다
- await은 쉽게 비동기 처리 순서를 정할 수 있음

<br>

### async 함수
async 함수는 function 키워드 앞에 async 를 붙여 만들며
fetchData , fetchUser 는 Promise 를 리턴하는 함수이다

- async 함수는 동기적으로 보이지만 비동기적으로 실행됩니다. 단, 내부에서 await 키워드가 쓰이지 않았을 경우엔 Promise.resolve() 로 처리됩니다.
- try-catch 구문으로 비동기 코드의 에러 또한 처리할 수 있습니다.
```js
async function asyncFunc () {
    let data = await fetchData() // async 함수 내부에서 await 키워드를
사용한다
    let user = await fetchUser(data)

    return user
}
```
- async 함수 내부에서 await 키워드를
사용한다



<br><br><br>

### await
await 키워드는 , then 메서드 체인을 연결한 것처럼 순서대로 동작하며, 비동기 코드에 쉽게 순서를 부여한다

- await 키워드는 여러 개가 쓰였을 시 뒤쪽 코드를 Promise의 .then() 함수를 사용하는 것처럼 만들어, 비동기 처리에 순서를 부여합니다.

- await 키워드는 프로미스를 리턴하지 않는 함수라도 사용할 수 있습니다. 단 이 경우 리턴한 데이터는 Promise.resolve()로 감싸집니다


<await 키워드 실행 순서>
```js
async function asyncFunc () {
    let data1 await fetchData1()
    let data2 = await fetchData2( data1 )
    let data3 = await fetchData3( data2 )
    return data3
    }
function promiseFunc () {
    return fetchData1()
    .then(fetchData2)
    .then(fetchData3)
}
```

<br><br>


### 에러 처리 : [ Promise.catch() 메서드 /  try-catch 구문 ]
- Promise 객체를 리턴하는 함수는, 에러 발생 시 catch 메서드를 사용해 에러를 처리
- catch 메서드 대신, async함수에서 try-catch 구문을 이용한 에러처리 가능(간편)

```js
//Promise 객체의 catch 메서드를 사용한 에러처리
function fetchData1() {
    return request()
    .then((response) => response.requestData)
    .catch(error => {
        //error 발생을 알림
    })
}


//try-catch 구문을 사용한 async/await 형태의 비동기 코드 에러처리
async function asyncFunc() {
    try {
        let data1 = await fetchData1() 
        return fetchData2(data1)
    } catch (e) {
        console.log('실패: ',e)
    }
}   //catch절의 e는, Promise의 catch메서드가 받는 반환 값과 동일
```
