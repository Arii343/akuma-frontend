import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
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

  return (
    <LoginFormStyled className="login-form">
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
      <button type="submit" className="login-form__submit-button">
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
