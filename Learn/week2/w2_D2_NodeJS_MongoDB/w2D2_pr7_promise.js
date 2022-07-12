function adder(a, b, callback) {
  if (a == 0 || b == 0) {
    callback("no zero", null);
    return;
  }
  console.log(`${a}+${b}=${a + b}`);

  callback(null, a + b);
}

function handle_error(error) {
  console.log("ERROR: ", error);
}

// [문제 작성부]
function adder_promise(a, b) {
  //T) Promise 생성자로 비동기 코드임을 알 수 있음
  return new Promise((resolve, reject) => {
    //T) 상단의 adder함수 참고하면 a,b,callback함수를 인자로 받음을 알 수 있음
    adder(a, b, (err, result) => {
      if (err) {
        /* 1. promise 에서 에러 처리하기 */
        reject(err);
        return;
      }
      /* 2. promise 에서 결과값 처리하기 */
      resolve(result);
    });
  });
}

function add_all(a, b, c) {
  adder_promise(a, b)
    /* 3. then 을 활용하여 result 와 c 를 add_promise 하기 */
    .then((result2) => {
      adder_promise(c, result2);
    })
    .then((result3) => {
      console.log(`${c}+${result2}=${result3}`);
    })
    .then((result4) => {
      console.log(`${a}+${b}+${c}=${result4}`);
    })
    /* 4. catch 를 활용하여 promise 의 에러를 handle_error 함수로 전달하기 */
    .catch((err) => handle_error(err));
}

module.exports = add_all;

////////callback.js
function adder(a, b, callback) {
  if (a == 0 || b == 0) {
    callback("no zero", null);
    return;
  }
  console.log(`${a}+${b}=${a + b}`);

  callback(null, a + b);
}

function handle_error(error) {
  console.log("ERROR: ", error);
}

function add_all(a, b, c) {
  adder(a, b, (err, result) => {
    if (err == null) {
      adder(result, c, (err, result2) => {
        if (err == null) {
          console.log(`${a}+${b}+${c}=${result2}`);
        } else {
          handle_error(err);
        }
      });
    } else {
      handle_error(err);
    }
  });
}
