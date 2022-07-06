{/* <App.js>
import "./app.css";
import RotationEncryptor from "./RotationEncryptor";

const App = () => {
  const encryptButton = document.getElementById("encrypt-button");
  const input = document.getElementById("message");
  const result = document.getElementById("result");

  encryptButton.addEventListener("click", () => {
    RotationEncryptor.setMessage(input.value);
    RotationEncryptor.setRotation(10);
    result.innerHTML = `결과 : ${RotationEncryptor.encrypt()}`;
  });
};

export default App; */}


const RotationEncryptor = {
    message: "",
    rotation: 0,
  
    encrypt: function () {
        return this.message.split('').map((c) => String.fromCharCode(c.charCodeAt(0)+ this.rotation)).join("");

    },
  
    setMessage: function (message) {
        this.message = message
      // this.message를 세팅합니다.
    },
  
    setRotation: function (rotation) {
        this.rotation = rotation
      // this.rotation을 세팅합니다.
    },
  };
  
  export default RotationEncryptor;
  