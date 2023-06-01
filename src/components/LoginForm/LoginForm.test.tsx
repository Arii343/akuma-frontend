import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import userEvent from "@testing-library/user-event";

describe("Given a LoginForm component", () => {
  describe("When it renders", () => {
    test("Then it should show a email input", () => {
      render(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );

      const inputEmail = screen.getByRole("textbox", { name: "email input" });
      expect(inputEmail).toBeInTheDocument();
    });

    test("Then it should show a password input", () => {
      render(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );

      const expectedPlaceholderText = "Password";

      const inputPassword = screen.getByPlaceholderText(
        expectedPlaceholderText
      );
      expect(inputPassword).toBeInTheDocument();
    });

    test("Then it should show a login button", () => {
      render(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );

      const loginButton = screen.getByRole("button", { name: "Login" });
      expect(loginButton).toBeInTheDocument();
    });
  });
  describe("When the user types 'ariadna@gmail.com' in the email input", () => {
    test("Then it should show that text inside the input", async () => {
      render(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );

      const inputEmail: HTMLInputElement = screen.getByRole("textbox", {
        name: "email input",
      });
      const expectedText = "ariadna@gmail.com";

      await userEvent.type(inputEmail, expectedText);

      expect(inputEmail.value).toBe(expectedText);
    });
  });
});
