const LoginButton = (props) => {
  const { data, logMeta } = props;
  //부모 컴포넌트로부터 props를 받기
  return <input type={"button"} value={logMeta} onClick={data} />;
};

export default LoginButton;
