
const Header = () => {
  return (
    <header>
      {/* 각 url로 이동= App의 라우팅부분에서 해당하는 페이지를 연결시켰기에, 적절한 페이지가 제공 될 것 */}
      <a href={"/"}>Home</a>
      <a href={"/contact"}>contact</a>
      <a href={"/about"}>about</a>
      <a href={"/page/2"}>page</a>
    </header>
  );
};

export default Header;
