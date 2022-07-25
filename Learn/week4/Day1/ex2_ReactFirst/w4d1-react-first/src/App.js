import "./app.css";
import { useState, useEffect } from "react";

function App() {
  const [list, setList] = useState([]); //useState훅을 통해 생성한 객체를 spread한 첫번째 값 list는 state, setList는 state변경함수임. useState 훅 안에 명시한 타입에 따라 state값의 타입을 정함

  const [text, setText] = useState(""); // text타입의 state를 만듦, 초기 state값을 초기화한다고 생각

  //useEffect = document.ready()와 같은 역할, 준비되면 하겠다.

  useEffect(() => {
    console.log("app.js 새로 렌더링됨"); // 렌더링이 발생하면서 콘솔에 두번 찍히게 됨, 즉 useEffect는 렌더링이 새로 될때마다 수행되는 것.
    console.log(...list);
  }, [list]); // useEffect의 두번째 인자 []에 아무것도 없으면 한번만 실행된다는 뜻, 만일 text(state)등 state를 인자로 넣어줄 경우, 해당 state가 변경될 때마다 렌더링을 수행하게 됨

  const insertData = () => {
    setText("");

    setList([
      ...list, //기존의 list를 items로 spread하여 풀어줌
      {
        index: Math.floor(Math.random(100000) * 100000),
        text: text,
        status: false,
      },
    ]);
  };

  // 해당 컴포넌트에서 사용할 event handler 정의부
  const deleteLine = (index) => {
    //기존의 list state에 등록된 list items와 해당 컴포넌트의 props로 받은 index를 비교하여 일치하는 것 list에서 삭제하도록 filter
    const getList = list.filter((item) => item.index !== index);
    setList(getList);
  };

  const successLine = (index) => {
    const getList = [...list]; //list state를 spread로 풀어 받아옴
    getList[index].status = true;
    setList(getList);
  };
  return (
    //리액트에서 최상위 컴포넌트(태그)는 단 하나여야 하며 해당 최상위 내에서 하위들이 작성돼야 한다.(여기선 div .App)
    <div className="App">
      <input
        type={"text"}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }} //여기서 e는 html의 this와 같음
        placeholder={"New Todo 입력"}
      />
      <input type={"button"} value={"추가"} onClick={insertData} />
      <div className="container">
        <ol>
          {
            //리액트 컴포넌트 내에서 js코드를 사용하고싶다=중괄호
            //html 태그를 사용하고싶다 = 소괄호 내에 정의
            list.map(
              (
                item

                // 단일의 최상위 컴포넌트는 key값을 필수로 가져야한다. // 간결 조건문으로 status에 따른 className 분기
              ) => (
                <li
                  key={item.index}
                  className={item.status === true ? "line" : "default"}
                >
                  {item.text}
                  <button
                    onClick={() => {
                      successLine(item.index); //map이 돌면서 선택되는 item은 index로 인덱스를 가지고 있음
                    }}
                  >
                    완료
                  </button>
                  <button
                    onClick={() => {
                      deleteLine(item.index);
                    }}
                  >
                    삭제
                  </button>
                </li>
              ) // 해당 소괄호는 html태그를 정의하기 위한 태그
            )
          }
        </ol>
      </div>
    </div>
  );
}

export default App;
