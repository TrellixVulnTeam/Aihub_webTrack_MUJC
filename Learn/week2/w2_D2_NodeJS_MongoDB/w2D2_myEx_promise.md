```js
function goToSchool() {
    console.log("학교에 갑니다.");
}

function arriveAtSchool_asis() {
    setTimeout(function() {
        console.log("학교에 도착했습니다.");
    }, 1000);
}

function study() {
    console.log("열심히 공부를 합니다.");
}

//호출
goToSchool();
arriveAtSchool_asis();
study();

// 출력
    // 학교에 갑니다.
    // 열심히 공부를 합니다.
    // 학교에 도착했습니다.
```

```js
//promise 사용한 비동기처리 변형

function arriveAtSchool_tobe() {
    return new Promise(function(resolve){   //프로미스 생성자는 resolve,reject(option)를 인자로 갖는 함수를 파라미터로 받아 생성됨
        setTimeout(function() {
            console.log("학교에 도착했습니다.");
            resolve();  // 향후 해당 프로미스 생성자의 모함수인 arriveAtSchool이 실행되며 promise객체가 then을 수행할 때, resolve()의 자리에 then이 파라미터로 받은 콜백함수가 실행 됨 
        }, 1000);
    });
}


//호출
goToSchool();
    // arriveAtSchool의 반환값인 promise객체는 then메서드를 가지고 있음, then 메서드는 promise의 resolve
arriveAtSchool_tobe().then(function(){  
    study();
});

//출력
    // 학교에 갑니다.
    // 학교에 도착했습니다.
    // 열심히 공부를 합니다.

```