// UserInput.js

import { findUserByUsername, findAddressByUserId } from "./api";

const UserInput = () => {
  let value = "";
  let error = "";

  function getValue() {
    return value;
  }

  function getError() {
    return error;
  }

  function setValue(inputValue) {
    value = inputValue;
  }

  // 지시사항을 참고하여 searchAddress() 함수를 구현하세요.
  function searchAddress() {
    error = "";
    
    return findUserByUsername(value)
      .then((user) => {
        console.log(user);
        return findAddressByUserId(user.id);
      })
      .then((address) => {
        console.log(address);
        return address;
      })
      .catch(e => {console.log(e)})
      

  }

  return { getError, getValue, setValue, searchAddress };
};

export default UserInput;

////// api.js

const userData = [
  //addressData의 userId와 userData의 id를 일치시킴으로써 id간 비교를 통해 객체배열 간 작업을 연결시킬 수 있음.
  {
    id: 1,
    username: "elice",
    email: "elice@test.com",
  },
  {
    id: 2,
    username: "dan",
    email: "dan@test.com",
  },
  {
    id: 3,
    username: "tom",
    email: "tom@test.com",
  },
  {
    id: 4,
    username: "andy",
    email: "andy@test.com",
  },
];

const addressData = [
  {
    id: 1,
    userId: 1,
    address: "서울시 강동구",
  },

  {
    id: 2,
    userId: 2,
    address: "서울시 마포구",
  },

  {
    id: 3,
    userId: 3,
    address: "성남시 분당구",
  },

  {
    id: 4,
    userId: 4,
    address: "서울시 강남구",
  },
];

// Promise를 반환
export const findUserByUsername = (username) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundUser = userData.find((user) => user.username === username);
      if (foundUser) {
        return resolve(foundUser);
      }
      reject(new Error("유저를 찾지 못했습니다."));
    }, 300);
  });

// Promise를 반환
export const findAddressByUserId = (userId) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundAddress = addressData.find(
        (address) => address.userId === userId
      );

      if (foundAddress) {
        return resolve(foundAddress);
      }
      reject(new Error("주소를 찾지 못했습니다."));
    }, 300);
  });

// ///// App.js
// import "./app.css";
// import UserInput from "./UserInput";

// const App = () => {
//   const usernameInput = document.getElementById("username");
//   const usernameForm = document.getElementById("username-form");
//   const submitButton = document.getElementById("submit");
//   const result = document.getElementById("result");
//   const component = UserInput();

//   usernameForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     component.searchAddress().then((res) => {
//       if (component.getError()) {
//         result.innerHTML = component.getError();
//         return;
//       }
//       result.innerHTML = res.address;
//     });
//   });

//   usernameInput.addEventListener("input", (e) => {
//     component.setValue(e.target.value);
//   });
// };

// export default App;
