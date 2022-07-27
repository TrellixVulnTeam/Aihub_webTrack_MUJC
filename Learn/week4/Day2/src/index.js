import React from "react";
import ReactDOM from "react-dom/client";
import Start from "./Start"; // 컴포넌트 불러오기
import "./Start.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Start /> {/* Start 컴포넌트를 렌더부에 넣어주기 */}
  </React.StrictMode>
);
