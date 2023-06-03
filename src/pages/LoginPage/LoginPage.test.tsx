import { screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { validUserCredentialsMock } from "../../mocks/user/userMocks";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe("Given a LoginPage page", () => {
  describe("When it renders", () => {
    test("Then it should show 'Login' title", () => {
      renderWithProviders(wrapWithRouter(<LoginPage />));

      const expectedTitle = "Login";

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
  describe("When it renders and the user login with valid credentials", () => {
    test("Then it should redirect the user to the '/' page", async () => {
      const routes = [
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/",
          element: <LoginPage />,
        },
      ];

      const router = createMemoryRouter(routes, {
        initialEntries: ["/login"],
        initialIndex: 0,
      });

      renderWithProviders(<RouterProvider router={router} />);

      const inputEmail = screen.getByRole("textbox", { name: "email input" });
      const inputPassword = screen.getByPlaceholderText("Password");
      const loginButton = screen.getByRole("button", { name: "Login" });

      await userEvent.type(inputEmail, validUserCredentialsMock.email);
      await userEvent.type(inputPassword, "validUserCredentialsMock.password");

      await userEvent.click(loginButton);
      expect(router.state.location.pathname).toBe("/");
    });
  });
});
