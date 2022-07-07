const AlphabetCounter = {
  sentence: "",
  alphabetMap: {},

  setSentence: function (sentence) {
    this.sentence = sentence;
    return this;
  },

  buildAlphabetMap: function () {
    // this.sentence 로부터 알파벳 맵을 만들어
    // this.alphabetMap에 저장하세요.
    //   let sen_map = new Map()

    let arr = this.sentence.split("");
    console.log(arr);

    let dup = [];
    let cnt = [];
    for (let i = 0; i < arr.length; i++) {
      if (dup.includes(arr[i]) == false) {
        dup.push(arr[i]);
        cnt = arr.filter((item) => arr[i] === item).length;
      }
      console.log(cnt);
    }
    console.log(cnt);
    //   for (let i=0; i < this.sentence.length; i++) { //아스키코드 변환
    //       arr[i] = this.sentence.charCodeAt(i)
    //   }
    //   console.log(arr)

    let count = Array(Math.max(arr));
    console.log(count);
    for (let i = 0; i < this.sentence.length; i++) {
      count[arr[i]] += 1;
    }
    console.log(count);

    return;
    // return this.;
  },

  buildResult: function () {
    // Object.entries()를 활용하여 [a: 1] [b: 2] 형태의 문자열을 만들어보세요.
    const resultString = "";
    return `결과는 : ${resultString} 입니다.`;
  },
};

export default AlphabetCounter;
