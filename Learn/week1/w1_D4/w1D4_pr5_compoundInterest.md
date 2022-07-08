# Prac5. 복리계산기 구현
복리 최종 금액 계산기를 만들어보세요. 

- 초기 예금액(principal), 이자율(interest rate), 이자 발생 빈도(frequency), 예치 기간(year)를 유저에게서 입력받아 

- 예치기간 후의 최종 금액(amount)을 계산합니다.

<br><br>

### 복리 계산식은 다음과 같습니다.
```
A = P(1 + r / n)^(n*t)
```
- A는 최종 금액을 의미합니다. 
- P는 초기 금액, 
- r은 이자율 
- n은 이자 발생 빈도 
- t는 예치기 간을 의미합니다. 
- 이 식을 이용하여 최종 금액을 계산하여 유저에게 계산 값을 보여주세요.

<br><br>


### 지시사항

1. principal을 입력받습니다.
계산 시 principal은 입력값을 그대로 사용합니다.

2. rate를 입력받습니다.
계산 시 rate는 소수점 둘째 자리까지 사용합니다. 유저에게서 입력받은 숫자를 100으로 나누어 백분율로 계산하여야 합니다.

3. year를 입력받습니다.
계산시 year 그대로 숫자로 사용합니다.

4. frequency를 입력받습니다.
년, 반기, 분기, 월은 각각 1, 2, 4, 12의 숫자로 매치됩니다.
이 값을 그대로 활용합니다.

5. 최종 금액을 계산해 유저에게 보여주세요.
최종 금액, principal은 Number.toLocaleString() 함수를 이용하여 ,를 넣어주세요.

6. frequency는 텍스트로 변환해 주세요.
년 -> 연별, 반기 -> 반기별, 분기 -> 분기별, 월 -> 월별

7. rate는 백분율 환산 후의 모든 소수점을 제거해주세요.

<br><br>

### 출력 예시

```
principal = 400000, rate = 7, year = 4, frequency = 12(월별) 입력 시, 최종 텍스트는 다음과 같습니다.

---

예금액 400,000원 기준
4년 후
월별 7.00%의 복리 계산 시
최종 잔고는
528,821원 입니다.
```

<br><br>

---

<br><br>


## app.js
```js
import "./app.css";

const Form = () => {
  const form = document.getElementById("input-form");
  const button = document.getElementById("form-button");
  const result = document.getElementById("result-text");

  button.addEventListener("click", (e) => {
    const formData = formDataToObject(new FormData(form));
    //console.log(formData); //-> form의 데이터를 받아옴
    //formData 정보를 이용해 복리를 계산하세요.
    // 적절하게 변환하여, 결과 텍스트를 출력하세요.
    const {principal,rate,year,frequency} = parseUserInputs(formData);
    //console.log(principal,rate,year,frequency); // -> 변수 하나하나에 값을 넣어줌
    const amount = calculateCompoundInterest(principal, rate, year, frequency);
    //console.log(amount); //복리 계산 된 최종 금액
    result.innerText = getResultText(principal, rate, year, frequency, amount);
  });

  result.innerText = "";
};


function parseRateText(rate) {
  return `${(rate * 100).toFixed(2)}%`; // 퍼센트 계산, 소수점 2번째까지
}

function parseMoneyText(principal) {
  return principal.toLocaleString("ko-KR"); //toLocaleString을 사용해서 가격에 ,를 넣어줌
}

function parseFrequencyText(frequency) { //frequency는 숫자이므로 숫자에 따라 return 되는 값이 다름
  return {
    1: "연별",
    2: "반기별",
    4: "분기별",
    12: "월별",
  }[frequency];
}

function getResultText(principal, rate, year, frequency, amount) { //사용자에게 text를 보여주는 함수
  principal = parseMoneyText(principal);
  frequency = parseFrequencyText(frequency);
  rate = parseRateText(rate);
  amount = parseMoneyText(amount);
  return `예금액 ${principal}원 기준\n${year}년 후\n${frequency} ${rate}의 복리 계산시\n최종 잔고는\n${amount}원 입니다.`;
}

function calculateCompoundInterest(principal, rate, year, frequency) { // 복리 이자율 계산 함수
  const result = principal * Math.pow(1 + rate / frequency, frequency * year); // 복리 계산식을 사용하여 제곱한다.
  return Math.floor(result); //소수점을 버림.
}

function parseUserInputs(formData) { //입력 값을 Number와 소수점 자리 등으로 변경
  const { principal, rate, year, frequency } = formData;

  return {
    principal: Number(principal.toFixed(2)),
    rate: Number((rate / 100).toFixed(2)),
    year: Number(year),
    frequency: Number(frequency),
  };
}

const app = () => {
  Form();
};

module.exports = app;

function formDataToObject(formData) {
  return Array.from(formData.entries()).reduce(
    (acc, [k, v]) => ((acc[k] = Number(v)), acc),
    {}
  );
}

```