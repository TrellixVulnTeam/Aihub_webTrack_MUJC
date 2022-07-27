import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";

import Header from "./Header";
import Homepage from "./Components/Homepage";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Page from "./Components/Page";

// App() 최상위 컴포넌트의 상단에 BrowserRouter -> Routes -> Route의 계층형 구조 만들어줌
function App() {
  // 라우팅은 그 시도 자체로 모든 페이지 요소를 새로 로딩함
  // 따라서 아래의 독립div와 Header도 함께 새로 깜빡이는 것.
  // 이런 특징으로 보통 (관리자/사용자 페이지를 라우팅 해주고, 해당 라우팅 된 페이지 내에서 하위 컴포넌트를 새로 렌더링해주게 하는 식으로 만든다고 함 )
  return (
    <div>
      <BrowserRouter>
        <div className="header-n-router">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/page/:id" element={<Page />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h2>
    //       리액트 <code>Router</code> 실습
    //     </h2>
    //   </header>
    // </div>
  );
}

export default App;
