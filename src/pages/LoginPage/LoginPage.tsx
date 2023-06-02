import LoginForm from "../../components/LoginForm/LoginForm";
import useToken from "../../hooks/useToken/useToken";
import useUser from "../../hooks/useUser/useUser";
import { UserCredentials } from "../../store/user/types";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();

  const handleOnSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);

    if (token) {
      await getTokenData(token);
    }
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
