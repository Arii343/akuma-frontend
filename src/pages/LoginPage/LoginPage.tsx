import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <>
      <LoginPageStyled className="login">
        <h1 className="login__title">Login</h1>
        <LoginForm
          handleOnSubmit={() => {
            ("");
          }}
        />
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
