const InputBody = () => {
  return (
    <div className="input-body">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="제목을 입력해 주세요"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          id="content"
          rows="3"
          name="content"
          placeholder="내용을 입력해 주세요"
        ></textarea>
      </div>
    </div>
  );
};

export default InputBody;
