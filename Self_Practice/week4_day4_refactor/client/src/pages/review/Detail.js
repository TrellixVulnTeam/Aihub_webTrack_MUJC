import ExampleCard from "./components/ExampleCard";

const Detail = () => {
  return (
    <div className="album">
      <div className="container">
        <ExampleCard type="Detail" />

        <div className="input-body">
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
