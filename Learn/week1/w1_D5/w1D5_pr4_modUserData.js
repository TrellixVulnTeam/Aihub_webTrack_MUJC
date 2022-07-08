import API from "./api";

const requestUsers = () => {
  return API.fetchUsers()
    .then((users) => {
      // 유저 정보를 변화하고, 필터링하는 코드를 작성해보세요. (TIP. Promise, async/await 모두 활용)
      return users;
    })
    .then((users) => {
      let res1 = users.map((user) => {
        let temp = {};
        temp = {
          email: user.email,
          name: `${user.name.first} ${user.name.last}`,
          pictureUrl: user.picture.large,
          username: user.login.username,
          location: `${user.location.country}, ${user.location.state}, ${user.location.city}`,
          age: user.dob.age,
        };
        return temp;
      });

      let res2 = res1.filter((user) => user.age >= 40);
      return res2;
    });
};

// export default requestUsers;

// ////// App.js
// import "./app.css";
// import requestUser from "./User";

// function createUserListItem(user) {
//   return `<li style="list-style:none"><pre><code>${JSON.stringify(
//     user,
//     null,
//     2
//   )}</code></pre></li>`;
// }

// function renderUsers(users) {   // users를 각 user로 풀어서 보여주는 함수
//   return users.map((user) => createUserListItem(user).trim()).join("");
// }

// const App = () => {
//   const button = document.getElementById("request-user-button");
//   const result = document.getElementById("result");

//   button.addEventListener("click", () => {
//     requestUser().then((users) => { //여기서 requestUser가 사용됨
//       result.innerHTML = renderUsers(users);    // 바로 위에서 정의한 renderUsers를 사용해 users 각각을 풀어서 요소로 렌더링하는 동작 수행
//     });
//   });
// };

// export default App;

// ///// api.js
// const fetchUsers = () => {
//     return fetch("https://randomuser.me/api/?results=10")
//       .then((response) => response.json())
//       .then((data) => data.results);
//   };  //fetch는 Promise 객체 반환

// export default { fetchUsers };
