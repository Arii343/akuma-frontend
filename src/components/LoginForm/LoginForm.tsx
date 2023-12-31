import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import Button from "../Button/Button";

interface LoginFormData {
  email: string;
  password: string;
}
interface LoginFormProps {
  onSubmit: (formData: LoginFormData) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps): React.ReactElement => {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(loginForm);
  };

  return (
    <LoginFormStyled
      className="login-form"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
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
      <Button type="submit" className="login-form__submit-button">
        Login
      </Button>
    </LoginFormStyled>
  );
};

export default LoginForm;
