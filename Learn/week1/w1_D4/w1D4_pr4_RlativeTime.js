const RelativeTime = {
    diff: (date) => {
        
        let curDate = new Date();
        let dif = curDate - date
        console.log(dif)
        if (dif < 60000){ return '방금 전'}
        else if (dif < 3600000){return `${Math.floor( dif / 60000 )}분 전`}
        else if (dif < 86400000){return `${Math.floor( dif / 3600000 )}시간 전`}
        else if (dif < 604800000) {return `${Math.floor( dif / 86400000 )}일 전`}
        else if (dif < 2419200000) {return `${Math.floor( dif / 604800000 )}주 전`}
        else if (dif < 29030400000) {return `${Math.floor( dif / 2419200000 )}개월 전`}
        else if (dif >= 29030400000) {return `${Math.floor( dif / 29030400000 )}년 전`}
        
    },
  };
  
  export default RelativeTime;
  