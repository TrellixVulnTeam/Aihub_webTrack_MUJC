import { useState } from "react";
import LoginButton from "./LoginButton"; //컴포넌트 불러오기

const Start = () => {
  // 최상위 컴포넌트

  const [status, setStatus] = useState(false);
  const InComponent = () => {
    // 하위 컴포넌트
    return <div>반갑습니다.</div>;
  };

  const buttonClick = () => {
    setStatus(!status);
  };

  const MyPracProps1 = ({ name, age }) => {
    //props를 개별지정으로 가져오는 방식
    return (
      <div>
        {name}({age})님 환영합니다.
      </div>
    );
  };

  const MyPracProps2 = (props) => {
    // props 객체를 가져와 spread해 사용하는 방식
    const { name, age } = props;
    return (
      <div>
        {name}({age})님 환영합니다.
      </div>
    );
  };

  return (
    // 소괄호 : 리액트 스크립트 내에서 html을 쓰고 싶을 때, 중괄호: 리액트 스크립트 내에서 js를 쓰고 싶을 때
    <div className="container">
      <h1>Week 2일차: 리액트 웹</h1>
      {
        // 중괄호: 리액트 스크립트에서 js작성
        status ? (
          <>
            <MyPracProps2 name={"horizD"} age={"27"} />
            {/* props로 구성될 name과 age값 할당 */}
            <LoginButton
              data={buttonClick} // props로 상위 컴포넌트(Start)의 state 변경함수를 하위 컴포넌트인 LoginButton에 전달: state를 그대로 보내는건 금지
              logMeta={"로그인"}
            />
          </>
        ) : (
          <>
            <InComponent />
            <LoginButton
              data={buttonClick} // props로 상위 컴포넌트(Start)의 state 변경함수를 하위 컴포넌트인 LoginButton에 전달: state를 그대로 보내는건 금지
              logMeta={"로그아웃"}
            />
          </>
        )
      }
    </div>
  );
};

export default Start;
