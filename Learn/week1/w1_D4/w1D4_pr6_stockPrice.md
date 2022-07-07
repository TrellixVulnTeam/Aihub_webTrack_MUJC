# Prac6. 주식 수익률 계산기 구현

<br><br>

## app.js

```js
import "./app.css";

const StockForm = (addStock) => {
  const stockForm = document.querySelector("#stock-form");
  
  stockForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // stockForm으로부터 정보를 얻어, addStock에 데이터를 넘겨주세요.
    let sN = document.getElementById('stock-name').value
    let sP = document.getElementById('buy-price').value
    let sNum = document.getElementById('stock-amount').value
    let sCp = document.getElementById('current-price').value

    
    addStock(sN,sP,sNum,sCp);
    stockForm.reset();
  });
};

const StockTable = (stocks) => {
  const stockTable = document.querySelector(".stock-table");
  const tableBody = stockTable.querySelector(".stock-table-body");
  
  let name = stocks.stockName
  let amt = Number(stocks.stockAmount)
  let bp = Number(stocks.buyPrice)
  let cp = Number(stocks.currentPrice)

  // stocks 데이터를 이용해, tbody 안에 들어갈 태그를 동적으로 만드세요.
  tableBody.innerHTML = `
  <tr>
    <td>${name}</td>
    <td>${bp}</td>
    <td>${cp}</td>
  </tr>
  `;
};

const StockResult = (stocks) => {
  const resultTextElement = document.querySelector(".result-text");

  if (stocks.length === 0) {
    resultTextElement.innerText = "종목을\n추가하세요.";
    return;
  }
  
  let bp = Number(stocks.buyPrice)
  let cp = Number(stocks.currentPrice)
  let amt = Number(stocks.stockAmount)
  
  let totalEarnPer = 0
  let eachEarnPer = 0
  // 총 수익률과 총 수익금을 계산하여, resultText를 채워주세요.
  resultTextElement.innerText = `현재 총 수익률은 ${totalEarnPer}%이며,\n총 수익금은 ${eachEarnPer}원 입니다.`;
};

const App = () => {
    const stocks = [
      // 테스트 데이터
      {
        stockName: "삼성전자",
        buyPrice: 80000,
        stockAmount: 8,
        currentPrice: 82000,
      },
      // {
      //   stockName: "SK하이닉스",
      //   buyPrice: 100000,
      //   stockAmount: 12,
      //   currentPrice: 104000,
      // },
      // {
      //   stockName: "앨리스",
      //   buyPrice: 10000,
      //   stockAmount: 120,
      //   currentPrice: 11000,
      // },
    ];

  // StockTable, StockResult 렌더링 결과를, stock 정보를 바탕으로 계산합니다.
  const render = () => {
    StockTable(stocks);
    StockResult(stocks);
  };

  const addStock = (stockName, buyPrice, stockAmount, currentPrice) => {
    stocks.push({ stockName, buyPrice, stockAmount, currentPrice });
    render();
  };

  StockForm(addStock);
  render();
};

module.exports = App;


module.exports = App;
```

<br><br>

## index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Template</title>
  </head>
  <body>
    <div id="root">
      <main>
        <h2>주식 수익률 계산기</h2>

        <div class="form-container">
          <form id="stock-form">
            <div class="form-field">
              <label for="stock-name">종목명</label>
              <input
                id="stock-name"
                type="text"
                name="stock-name"
                autocomplete="off"
              />
            </div>

            <div class="form-field">
              <label for="buy-price">살 때 가격</label>
              <input id="buy-price" type="number" name="buy-price" />
            </div>

            <div class="form-field">
              <label for="stock-amount">주식 수</label>
              <input id="stock-amount" type="number" name="stock-amount" />
            </div>

            <div class="form-field">
              <label for="current-price">현재 가격</label>
              <input id="current-price" type="number" name="current-price" />
            </div>

            <div class="form-field">
              <button type="submit">종목 추가</button>
            </div>
          </form>
        </div>

        <div>
          <p class="result-text">종목을 입력하세요.</p>
        </div>

        <table class="stock-table">
          <thead>
            <tr>
              <th>종목명</th>
              <th>수익률(%)</th>
              <th>수익금(원)</th>
            </tr>
          </thead>

          <tbody class="stock-table-body">
            <tr>
              <td>삼성전자</td>
              <td>1.33</td>
              <td>1234</td>
            </tr>

            <tr>
              <td>SK하이닉스</td>
              <td>1.34</td>
              <td>23456</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>

    <script src="./index.js"></script>
  </body>
</html>

```