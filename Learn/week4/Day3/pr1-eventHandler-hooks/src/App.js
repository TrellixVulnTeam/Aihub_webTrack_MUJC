import "./App.css";
import { useEffect, useState, useRef, useMemo } from "react";
import $ from "jquery";

function App() {
  const [data, setData] = useState({
    email: "1",
    password: "2",
    name: "3",
  });

  useEffect(() => {
    console.log(data);
  }, [data]); // data state가 바뀔 때마다 감지하고 렌더링해줘, 만일 두번째 인자 []안에 아무것도 없으면, 맨 처음 렌더링 시에만 사용됨. //

  const onChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      // 여기의 e.target.name은 이벤트가 발생한 요소의 name attrb를 사용하는 명칭
      // 대괄호는 동적으로 data obj state의 필드를 지정하기 위해 사용, 그냥 특정필드를 지정할 땐 대괄호 없이 써주면 됨
    });
  };

  const [status, setStatus] = useState(false);

  // const eventButton = () => {
  //   setStatus(!status);
  // };

  // const PracComponent = ({ eventButton }) => {
  //   return (
  //     <div>
  //       <button onClick={eventButton}>버튼</button>
  //     </div>
  //   );

  const refInput = useRef();

  useEffect(
    () => {
      // refInput.current.focus(); //방법1: useRef사용해서 focus
      $("#input1").focus(); //방법 2: jquery lib 사용해서 focus
    },
    [] // Depth에 아무것도 넣지 않음 -> 처음 렌더링 될 때 한번 실행됨
  );
  return (
    <div className="App">
      {/* <div id="input-container">
        <div className="input-btn">
          <input
            onChange={onChangeData}
            value={data.email}
            type="text"
            name="email"
          />
          이메일
        </div>
        <div className="input-btn">
          <input
            onChange={onChangeData}
            value={data.password}
            type="text"
            name="password"
          />
          비밀번호
        </div>
        <div className="input-btn">
          <input
            onChange={onChangeData}
            value={data.name}
            type="text"
            name="name"
          />
          이름
        </div>
        <br />
        <br />
        <br />
        <div>
          <p>이메일 : {data.email}</p>
          <p>패스워드 : {data.password}</p>
          <p>이름 : {data.name}</p>
        </div>
      </div> */}

      {/* <div>{status ? <p>어서오세요</p> : <>...</>}</div>
      <PracComponent eventButton={eventButton} /> */}

      <div>
        <input type={"text"} id={"input1"} ref={refInput}></input>
      </div>
    </div>
  );
}

export default App;
