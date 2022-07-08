# extend

1. `AlphabetCounter`의 `setSentence`, `buildMap`, `buildResult` 함수를 만듭니다.

2. `setSentence 메서드`는 sentence 를 인자로 입력받아 AlphabetCounter의 sentence를 세팅합니다.
    ```js
    this.sentence = sentence
    ```

3. `buildAlphabetMap`은 AlphabetCounter의 sentence가 가진 각 알파벳의 개수를 세어 알파벳과 그 개수를 각각 키와 값으로 하는 객체를 만들고 alphabetMap에 저장합니다.

    <br>
    다음과 같은 과정을 거쳐 `alphabetMap`을 만듭니다.
    <br><br>

- 저장된 sentence는 `String.prototype.trim()` 함수로 공백을 제거합니다.
- 그 후 `String.prototype.toLowerCase()` 함수로 모든 문자를 소문자로 만듭니다.
- `String.prototype.split()` 함수로 문자열을 하나의 문자를 원소로 하는 배열로 나눕니다.
- `Array.prototype.filter()`로 소문자만 남기고 특수문자를 제거합니다.
- `Array.prototype.reduce()`로 하나의 객체를 만들어 각 소문자의 개수를 셉니다. 이때 알파벳은 key가 되고 등장 횟수가 value가 됩니다.

```js
  buildAlphabetMap: function () {
    // this.sentence 로부터 알파벳 맵을 만들어
    // this.alphabetMap에 저장하세요.

    this.alphabetMap = this.sentence.trim() //공백제거
    .toLowerCase()  //소문자화 
    .split('')      // char 단위로 배열생성
    .filter( (result) => result >= 'a' && result <= 'z') //소문자 이외 모두 제거
    .reduce((key,value) => {    
            if(!key[value]){key[value] = 0;}

            key[value]++
        return key
        },{}) // 하나의 객체로 만들어 각 소문자 수 세기
    return this
  },
```

<br>
1. 결과는 : [a: 2] [b: 3] 입니다. 형태의 문장을 만들어 리턴합니다.

- `Object.entries()` 함수를 이용해 객체로부터 key, value 페어를 만들어 문장을 만듭니다.
```js
const resultString = Object.entries(this.alphabetMap)
    .reduce((acc, [key,value] => `$(acc) [$(key): $(value)]`. ""))
```

<br><br><br>

---

<br><br><br>

# App.js
```js
import "./app.css";
import AlphabetCounter from "./AlphabetCounter";

const App = () => {
  const buildButton = document.getElementById("build-button");
  const result = document.getElementById("result");
  const sentenceInput = document.getElementById("sentence");

  buildButton.addEventListener("click", () => {
    result.innerHTML = AlphabetCounter.setSentence(sentenceInput.value)
      .buildAlphabetMap()
      .buildResult();
  });
};

export default App;
```

<br><br>

# AlphabetCounter.js
```js
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

        this.alphabetMap = this.sentence
            .trim() //공백 제거
            .toLowerCase() //모든 문자를 소문자로, 반대되는 함수 -> toUpperCase
            .split("") //문자 하나하나를 배열에다가 담습니다.
            // console.log(this.alphabetMap);
            .filter(
                (result) => result >= "a" && result <= "z"
            )
            .reduce((key,value)=>{  // [a:2][b:3]라는 형태로 만들기 위해서 reduce 사용

                // console.log(key,value);

                // console.log(Boolean (key[value]));

                if(!key[value]){key[value] = 0;}
                // 이미 있는 key[value]라면 true 나오게 되고 객체에 존재하지 않으면 false로 나오게 된다.
                // 즉 아직 key값 객체에 key[value]가 존재하지 않으면 key[value]값을 0으로 추가하게된다.
                // console.log(key,value);

                key[value]++;

                return key;

            },{}); // => key 초기에 빈 객체값으로 초기화

        return this;
    },

    buildResult: function () {
        // Object.entries()를 활용하여 [a: 1] [b: 2] 형태의 문자열을 만들어보세요.
        const resultString = Object.entries(this.alphabetMap)
            .reduce((acc, [key, value]) => `${acc} [${key}: ${value}]`, "")
            .trim();

        return `결과는 : ${resultString} 입니다.`;
    },
};

export default AlphabetCounter;


```

<br><br>

# index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>AlphabetCounter App</title>
  </head>
  <body>
    <div id="root">
      <main>
        <h2>AlphabetCounter App</h2>

        <div class="app">
          <div>
            <input id="sentence" type="text" name="sentence">
            <button id="build-button">알파벳 세기</button>
          </div>
          <div id="result"></div>
        </div>
      </main>
    </div>

      <script src="./index.js"></script>
  </body>
</html>

```