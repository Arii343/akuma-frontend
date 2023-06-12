import LoginForm from "../../components/LoginForm/LoginForm";
import useToken from "../../hooks/useToken/useToken";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch } from "../../store";
import { UserCredentials, UserTokenStructure } from "../../store/user/types";
import { loginUserActionCreator } from "../../store/user/userSlice";
import LoginPageStyled from "./LoginPageStyled";
import { useNavigate } from "react-router-dom";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);

    if (token) {
      const userData = await getTokenData(token);

      dispatch(
        loginUserActionCreator({
          ...userData,
          token: token,
        } as UserTokenStructure)
      );
      navigate("/");
    }
  };

  return (
    <>
      <LoginPageStyled className="login">
        <h1 className="login__title">Login</h1>
        <LoginForm onSubmit={handleLoginSubmit} />
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
