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

function adder_promise(a, b) {
    return new Promise((resolve, reject) => {
        adder(a, b, (err, result) => {
            if (err) {
                /* 1. promise 에서 에러 처리하기 */
                reject(err)
                return;
            }
            /* 2. promise 에서 결과값 처리하기 */
            resolve(a+b)
        });
    });
}

function add_all(a, b, c) {

    // console.log(process.argv);

    adder_promise(a, b)
        /* 3. then 을 활용하여 result 와 c 를 add_promise 하기 */
        .then(result =>{
            return adder_promise(result,c);
        })
        .then(result2 => {
            console.log(`${a}+${b}+${c}=${result2}`);
        })
        /* 4. catch 를 활용하여 promise 의 에러를 handle_error 함수로 전달하기 */
        .catch(err => handle_error(err))
}

module.exports = add_all;