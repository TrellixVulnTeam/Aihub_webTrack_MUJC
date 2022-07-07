const Clock = {
  getCurrentTime: function (date) {
    // 현재 시간 문자열을 만들어 리턴하세요.
    // date가 Date 객체의 인스턴스가 아니라면 에러 메시지를 리턴하세요.
    
    // console.log(date.prototype.getFullYear())
    if (date instanceof Date == false ) return "현재 시간을 구할 수 없습니다.";
    else {
        // console.log(date.getDate())
        return `현재 시간은 ${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초 입니다.`;
    }
  },
};

export default Clock;
