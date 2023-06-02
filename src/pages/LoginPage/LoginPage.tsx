import LoginForm from "../../components/LoginForm/LoginForm";
import useUser from "../../hooks/useUser/useUser";
import { UserCredentials } from "../../store/user/types";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();

  const handleOnSubmit = async (userCredentials: UserCredentials) => {
    await getUserToken(userCredentials);
  };

  return (
    <>
      <LoginPageStyled className="login">
        <h1 className="login__title">Login</h1>
        <LoginForm handleOnSubmit={handleOnSubmit} />
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
