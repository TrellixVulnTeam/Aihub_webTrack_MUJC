import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Footer,
  Header,
  Login,
  Review,
  ReviewCreate,
  ReviewDetail,
  ReviewUpdate,
} from "./components";

function App() {
  return (
    <>
      <Header />
      {/* Routes 하위의 Route들의 계층관계와 url형태에 주목 */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="review">
          {/* https://localhost:3000/review */}
          <Route path="list" element={<Review />} />
          {/*http://localhost:3000/review/list */}
          <Route path="create" element={<ReviewCreate />} />{" "}
          {/*http://localhost:3000/review/create*/}
          <Route path=":id">
            {/*http://localhost:3000/review/:id*/}
            <Route path="detail" element={<ReviewDetail />} />{" "}
            {/*http://localhost:3000/review/:id/detail*/}
            <Route path="update" element={<ReviewUpdate />} />{" "}
            {/*http://localhost:3000/review/:id/update*/}
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
