import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";

interface LoginFormData {
  email: string;
  password: string;
}
interface LoginFormProps {
  handleOnSubmit: (formData: LoginFormData) => void;
}

const LoginForm = ({ handleOnSubmit }: LoginFormProps): React.ReactElement => {
  const [loginForm, setLoginForm] = useState<LoginFormData>({
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

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleOnSubmit(loginForm);
  };

  return (
    <LoginFormStyled className="login-form" onSubmit={onSubmit}>
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
          required
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
          required
        />
      </label>
      <button type="submit" className="login-form__submit-button">
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
