import { screen } from "@testing-library/react";
import { vi } from "vitest";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a LoginForm component", () => {
  const actionOnClick = vi.fn();
  describe("When it renders", () => {
    test("Then it should show a email input", () => {
      renderWithProviders(<LoginForm handleOnSubmit={actionOnClick} />);

      const inputEmail = screen.getByRole("textbox", { name: "email input" });
      expect(inputEmail).toBeInTheDocument();
    });

    test("Then it should show a password input", () => {
      renderWithProviders(<LoginForm handleOnSubmit={actionOnClick} />);

      const expectedPlaceholderText = "Password";

      const inputPassword = screen.getByPlaceholderText(
        expectedPlaceholderText
      );
      expect(inputPassword).toBeInTheDocument();
    });

    test("Then it should show a login button", () => {
      renderWithProviders(<LoginForm handleOnSubmit={actionOnClick} />);

      const loginButton = screen.getByRole("button", { name: "Login" });
      expect(loginButton).toBeInTheDocument();
    });
  });

  describe("When the user types 'ariadna@gmail.com' in the email input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<LoginForm handleOnSubmit={actionOnClick} />);

      const inputEmail: HTMLInputElement = screen.getByRole("textbox", {
        name: "email input",
      });
      const expectedText = "ariadna@gmail.com";

      await userEvent.type(inputEmail, expectedText);

      expect(inputEmail).toHaveValue(expectedText);
    });
  });

  describe("When it renders and the email and password inputs aren't empty", () => {
    test("Then it should show the login button enabled", async () => {
      const emailText = "ariadna@hotmail.com";
      const passwordText = "ari343";

      renderWithProviders(<LoginForm handleOnSubmit={actionOnClick} />);

      const expectedPlaceholderText = "Password";

      const inputEmail = screen.getByRole("textbox", { name: "email input" });
      const inputPassword = screen.getByPlaceholderText(
        expectedPlaceholderText
      );
      const loginButton = screen.getByRole("button", { name: "Login" });

      await userEvent.type(inputEmail, emailText);
      await userEvent.type(inputPassword, passwordText);

      expect(loginButton).toBeEnabled();
    });

    describe("When it renders and the button is clicked", () => {
      test("Then it should call the function actionOnClick", async () => {
        const emailText = "ariadna@hotmail.com";
        const passwordText = "ari343";

        renderWithProviders(<LoginForm handleOnSubmit={actionOnClick} />);

        const expectedPlaceholderText = "Password";

        const inputEmail = screen.getByRole("textbox", { name: "email input" });
        const inputPassword = screen.getByPlaceholderText(
          expectedPlaceholderText
        );
        const loginButton = screen.getByRole("button", { name: "Login" });

        await userEvent.type(inputEmail, emailText);
        await userEvent.type(inputPassword, passwordText);

        await userEvent.click(loginButton);

        expect(actionOnClick).toHaveBeenCalled();
      });
    });
  });
});
