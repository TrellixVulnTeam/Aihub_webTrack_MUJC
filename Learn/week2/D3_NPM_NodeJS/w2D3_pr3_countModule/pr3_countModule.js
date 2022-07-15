let count = 0

// 모듈을 반복적 실행할 땐, 함수형 모듈로 export해야 함
module.exports = () => {
    count += 1
    return count
}