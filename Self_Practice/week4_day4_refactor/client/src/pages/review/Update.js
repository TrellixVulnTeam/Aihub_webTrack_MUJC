import ExampleCard from "./components/ExampleCard";
import InputBody from "./components/InputBody";
const Update = () => {
  return (
    <div className="album">
      <div className="container">
        <ExampleCard type="Update" />
        <InputBody />

        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginRight: "1%" }}
          >
            submit
          </button>
          <button type="button" className="btn btn-danger">
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
