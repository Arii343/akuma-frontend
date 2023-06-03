import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { loggedInUserMock } from "../../mocks/user/userMocks";

describe("Given a Navbar component", () => {
  describe("When it renders", () => {
    test("Then it should show a burger menu button", () => {
      renderWithProviders(wrapWithRouter(<Navbar />));

      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("When it renders and the user is not logged in", () => {
    describe("When menu button is click", () => {
      test("Then it should show a link Home and Login", async () => {
        renderWithProviders(wrapWithRouter(<Navbar />));

        const button = screen.getByRole("button");

        await userEvent.click(button);

        const homelink = screen.getByRole("link", { name: "Home" });
        const loginlink = screen.getByRole("link", { name: "Login" });

        expect(homelink).toBeInTheDocument();
        expect(loginlink).toBeInTheDocument();
      });
    });
  });

  describe("When it renders and the user is logged in", () => {
    const preloadedStateUserLoggedIn = {
      user: loggedInUserMock,
    };
    test("Then it should show links home and create and a logout button", () => {
      renderWithProviders(
        wrapWithRouter(<Navbar />),
        preloadedStateUserLoggedIn
      );
      const homelink = screen.getByText("Home");
      const createlink = screen.getByText("Create");
      const logoutButton = screen.getByText("Logout");

      expect(homelink).toBeInTheDocument();
      expect(createlink).toBeInTheDocument();
      expect(logoutButton).toBeInTheDocument();
    });

    describe("When the logout button is click", () => {
      test("Then it should show Login link and hide lougout button", async () => {
        renderWithProviders(
          wrapWithRouter(<Navbar />),
          preloadedStateUserLoggedIn
        );

        const logoutButton = screen.getByText("Logout");

        await userEvent.click(logoutButton);

        expect(logoutButton).not.toBeInTheDocument();

        const loginlink = screen.getByText("Login");

        expect(loginlink).toBeInTheDocument();
      });
    });
  });
});
