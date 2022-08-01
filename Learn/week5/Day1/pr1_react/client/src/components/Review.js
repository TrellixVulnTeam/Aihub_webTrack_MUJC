// import reviewData from "../data/review.json";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import backUrl from "../data/port.json";
import { useCookies } from "react-cookie";
const Review = () => {
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    getReviewData(); //리뷰 데이터 가져오기
  }, []); // 최초 1회 렌더링 시에만 동작

  const getReviewData = () => {
    axios
      .get(backUrl.url + "/posts", {
        headers: {
          // axios 요청으로 인증을 위해 함께 보낼 accessToken이 담긴 헤더 작성
          accessToken: cookies.userData.accessToken,
        },
      })
      .then((res) => {
        console.log(res);
        setReviewData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Movie</h1>
            <p className="lead text-muted">
              리뷰하고 싶은 영화를 추가하고, 별점을 주세요.
              <br />
              또한 삭제, 수정이 가능합니다.
            </p>
            <p>
              <button
                className="btn btn-primary my-2 m-1"
                onClick={() => navigate("/review/create")}
              >
                CREATE REVIEW
              </button>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {reviewData.map((item, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <div className="card-img-top" style={{ textAlign: "center" }}>
                    <img
                      src={item.img}
                      className="bd-placeholder-img mt-4"
                      width="50%"
                      height="250"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    />
                  </div>

                  <div className="card-body">
                    <p className="card-text">
                      {item.content.substring(0, item.content.length / 2)}
                      &nbsp;&nbsp;&nbsp;
                      <a style={{ color: "#5d90ef" }}>...상세보기</a>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <div>
                        <small className="text-muted m-3">
                          {item.author.name}
                        </small>
                        <small className="text-muted ">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Review;
