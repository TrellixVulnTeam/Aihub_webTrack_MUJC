// PR7. ArrayManipulator 구현하기
    // ArrayManipulator는 array를 인자로 받아, 여러 가지 작업을 실행하는 클로저입니다. 여러 작업을 메서드 체이닝 방식으로 작성할 수 있으며, 최종적으로 결과를 반환합니다. 배열을 다루는데 유용한 ArrayManipulator를 구현해보세요. 최대한 spread operator를 활용해 구현해보세요.

    // 지시사항
        // 1. addElement 함수를 완성하세요.

        // 배열의 끝에 하나의 원소를 추가하고, 새롭게 ArrayManipulator를 만들어 반환합니다.
        // 2. removeElement 함수를 완성하세요.

        // 배열의 특정 index에 있는 원소를 제거한 배열을 만들고, 새롭게 ArrayManipulator를 만들어 반환합니다.
        // 3. updateElement 함수를 완성하세요.

        // 배열의 특정 index에 있는 원소를 갱신한 배열을 만들고, 새롭게 ArrayManipulator를 만들어 반환합니다.
        // 4. mapElements 함수를 완성하세요.

        // 전체 배열의 원소들에 각각 적용할 func 함수를 인자로 받아 배열을 변환하고, 새롭게 ArrayManipulator를 만들어 반환합니다.
        // 5. filterElements 함수를 완성하세요.

        // 전체 배열의 원소들을 필터링할 func 함수를 인자로 받아 배열을 변환하고, 새롭게 ArrayManipulator를 만들어 반환합니다.
        // Tips!
        // ArrayManipulator는 내부에 array를 저장하지 않고, 매번 새로운 클로저를 반환합니다. 내부에 어떤 상태도 없음에 유의하세요.


{/* <App.js>
import "./app.css";
import ArrayManipulator from "./ArrayManipulator";

const generateRandomNumber = () => parseInt(Math.random() * 100, 10);
const generateResultString = (dom, data) =>
  (dom.innerHTML = `결과 : ${JSON.stringify(data)}`);

const App = () => {
  const addButton = document.getElementById("add-button");
  const deleteButton = document.getElementById("delete-button");
  const updateButton = document.getElementById("update-button");
  const mapButton = document.getElementById("map-button");
  const filterButton = document.getElementById("filter-button");

  let am = ArrayManipulator([1, 2, 3, 4, 5]);
  const currentValue = document.getElementById("current-value");
  const result = document.getElementById("result");

  currentValue.innerHTML = `초기 배열 : ${JSON.stringify(am.getArray())}`;

  addButton.addEventListener("click", () => {
    am = am.addElement(generateRandomNumber());
    generateResultString(result, am.getArray());
  });

  deleteButton.addEventListener("click", () => {
    am = am.removeElement(0);
    generateResultString(result, am.getArray());
  });

  updateButton.addEventListener("click", () => {
    am = am.updateElement(0, generateRandomNumber());
    generateResultString(result, am.getArray());
  });

  mapButton.addEventListener("click", () => {
    am = am.mapElements((item) => item * 2);
    generateResultString(result, am.getArray());
  });

  filterButton.addEventListener("click", () => {
    am = am.filterElements((item) => item % 2 === 0);
    generateResultString(result, am.getArray());
  });
};

export default App; */}


function ArrayManipulator(array) {
    function addElement(element) {
      // 예시 코드입니다.
      // 변환된 배열을 `ArrayManipulator`의 인자로 넘겨 리턴합니다.
      return ArrayManipulator([...array, element]);
    }
  
    function removeElement(index) {
      // 인자를 제거한 배열을 만들어주세요.
      return ArrayManipulator(array);
    }
  
    function updateElement(index, element) {
      // 인자를 갱신한 배열을 만들어주세요.
      return ArrayManipulator(array);
    }
  
    function mapElements(func) {
      // 배열 전체를 변환하세요.
      // Array 객체의 내장 map 함수를 활용해 보세요.
      return ArrayManipulator(array.map(func));
    }
  
    function filterElements(func) {
      // 배열의 특정 원소를 필터하세요.
      // Array 객체의 내장 filter 함수를 활용해 보세요.
      return ArrayManipulator(array);
    }
  
    function getArray() {
      return array;
    }
  
    return {
      addElement,
      removeElement,
      updateElement,
      mapElements,
      filterElements,
      getArray,
    };
  }
  
  export default ArrayManipulator;
  