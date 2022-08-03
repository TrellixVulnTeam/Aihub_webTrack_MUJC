const Detail = () => {
  return (
    <div className="album">
      <div className="container">
        <h3 style={{}} className="mb-5">
          Detail Page
        </h3>
        <div
          className="card"
          style={{ marginBottom: "10em", textAlign: "center" }}
        >
          <div className="card-img-top">
            <img
              src="https://movie-phinf.pstatic.net/20201229_146/1609226288425JgdsP_JPEG/movie_image.jpg?type=m203_290_2"
              alt="..."
            />
          </div>
          <div className="card-body">
            <h5 className="card-title mb-3">카드 제목</h5>
            <p className="card-text">카드 텍스트 예시 입니다.</p>
            <p className="card-text"></p>
            <input
              type="text"
              name="title"
              className="form-control"
              id="title"
              placeholder="사진 url을 입력해 주세요."
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <div className="card">
            <p className="card-body">제목입니다.</p>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <div className="card">
            <p className="card-body">내용입니다..</p>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-danger">
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
