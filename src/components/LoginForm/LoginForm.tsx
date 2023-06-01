import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";

interface LoginFormProps {
  handleOnSubmit: () => void;
}

const LoginForm = ({ handleOnSubmit }: LoginFormProps): React.ReactElement => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleLoginFormChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, name } = event.target;

    setLoginForm((loginForm) => ({
      ...loginForm,
      [name]: value,
    }));
  };

  const handleOnClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleOnSubmit();
    setLoginForm(loginForm);
  };

  const isReady = loginForm.email !== "" && loginForm.password !== "";

  return (
    <LoginFormStyled className="login-form" onSubmit={handleOnClick}>
      <label htmlFor="email" className="login-form__label">
        <img src="./img/email.svg" alt="email icon" width={28} height={28} />
        <input
          name="email"
          type="email"
          value={loginForm.email}
          onChange={handleLoginFormChange}
          placeholder="Email"
          className="login-form__input"
          aria-label="email input"
        />
      </label>
      <label htmlFor="password" className="login-form__label">
        <img
          src="./img/password.svg"
          alt="password icon"
          width={28}
          height={28}
        />
        <input
          name="password"
          type="password"
          value={loginForm.password}
          onChange={handleLoginFormChange}
          placeholder="Password"
          className="login-form__input"
          aria-label="password input"
        />
      </label>
      <button
        type="submit"
        className="login-form__submit-button"
        disabled={!isReady}
        onClick={handleOnSubmit}
      >
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
