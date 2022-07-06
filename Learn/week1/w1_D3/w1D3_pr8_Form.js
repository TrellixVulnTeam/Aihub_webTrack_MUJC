{/* <App.js>
import "./app.css";
import Form from "./Form";

const App = () => {
  const favoriteForm = Form();

  favoriteForm.register("food", (value) => value.length > 1);
  favoriteForm.register("color", (value) => value.length > 1);

  const foodInput = document.getElementById("food");
  const colorInput = document.getElementById("color");
  const submitButton = document.getElementById("submit");
  const result = document.getElementById("result");

  foodInput.addEventListener("input", (e) => {
    favoriteForm.setValue("food", e.target.value);
  });

  colorInput.addEventListener("input", (e) => {
    favoriteForm.setValue("color", e.target.value);
  });

  submitButton.addEventListener("click", () => {
    const validationResult = favoriteForm.validate();
    if (!validationResult) {
      result.innerHTML = "입력된 값을 확인해주세요.";
      return;
    }
    result.innerHTML = "제출에 성공했습니다!";
  });
};

export default App; */}



const Form = () => {
    const formState = {};
  
    function register(name, validator = (value) => true) {
      // register시, state에 필드를 등록합니다.
      // 필드 등록 객체는 { value, validator } 입니다.
      // value는 빈 문자열로 초기화됩니다.
    }
  
    function validate() {
      // state의 전체 필드를 검사합니다.
      // validator(value) 로 value가 유효한지 검사할 수 있습니다.
      // 전체 필드가 유효해야만 폼이 유효합니다.
      return false;
    }
  
    function getFormData() {
      // state의 각 필드에 있는 value를 모아 하나의 객체로 리턴합니다.
      // { name : 'Kim', age: 30 } 의 형식으로 리턴해야 합니다.
      return { name: "Kim" };
    }
  
    function setValue(name, value) {
      // name으로 찾은 필드의 value를 설정합니다.
      // name에 해당하는 상태는 반드시 있다고 가정합니다.
    }
  
    return {
      register,
      validate,
      getFormData,
      setValue,
    };
  };
  
  export default Form;
  