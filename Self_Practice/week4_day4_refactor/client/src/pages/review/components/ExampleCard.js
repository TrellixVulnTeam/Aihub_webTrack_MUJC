const ExampleCard = ({ type }) => {
  return (
    <div className="example-card">
      <h3 style={{}} className="mb-5">
        {type} Page
        
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
    </div>
  );
};

export default ExampleCard;
