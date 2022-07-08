//// MYCODE
const RelativeTime = {
  diff: (date) => {
    let curDate = new Date();
    let dif = curDate - date;
    console.log(dif);
    if (dif < 60000) {
      return "방금 전";
    } else if (dif < 3600000) {
      return `${Math.floor(dif / 60000)}분 전`;
    } else if (dif < 86400000) {
      return `${Math.floor(dif / 3600000)}시간 전`;
    } else if (dif < 604800000) {
      return `${Math.floor(dif / 86400000)}일 전`;
    } else if (dif < 2419200000) {
      return `${Math.floor(dif / 604800000)}주 전`;
    } else if (dif < 29030400000) {
      return `${Math.floor(dif / 2419200000)}개월 전`;
    } else if (dif >= 29030400000) {
      return `${Math.floor(dif / 29030400000)}년 전`;
    }
  },
};

export default RelativeTime;

// //// SOLUTION

// // const TimeMap = (() => { //Immediately Invokable Function Expression (IIFE) 즉시 실행 함수

// //   let min = 60;
// //   let hour = min * 60;
// //   let day = hour * 24;
// //   let week = day * 7;
// //   let month = week * 4;
// //   let year = month * 12;

// //   return { min, hour, day, week, month, year };
// // })();

// const TimeMap = {
//     min : 60,
//     hour : 3600,
//     day : 86400,
//     week : 604800,
//     month : 2628000,
//     year : 31540000
// }

// const TimeTextMap = {
//     [TimeMap.min]: "분",
//     [TimeMap.hour]: "시간",
//     [TimeMap.day]: "일",
//     [TimeMap.week]: "주",
//     [TimeMap.month]: "개월",
//     [TimeMap.year]: "년",
// };

// function createTimeText(time, standard, suffix) {
//     return `${Math.floor(time / standard)}${suffix} 전`;
// }

// const RelativeTime = {
//     diff: (date) => {
//         const getResult = (new Date() - date) / 1000; //지금 시간과 받아온 date의 시간 차이.

//         return Object.entries(TimeMap).reduce((text, [time, value]) => {
//             if (getResult >= value) return createTimeText(getResult, value, TimeTextMap[value]);
//             return text;
//         }, `방금 전`); //기본값
//     },
// };

// export default RelativeTime;
