// const { useState } = require("./react.development");

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const text = liked ? "좋아요" : "좋아요 취소";
  //    const onClickLike = (e) => {
  //         e.target.value = liked ? '좋아요 취소' : '좋아요';

  return React.createElement(
    "input",
    { onClick: () => setLiked(!liked) },
    text
  );
}

const domContainer = document.querySelector("#react-root");
ReactDOM.render(React.createElement(LikeButton), domContainer);
