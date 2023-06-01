import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
import renderWithProviders from "../../utils/testUtils";

describe("Given a Navbar component", () => {
  describe("When it renders", () => {
    test("Then it should show a burger menu button", () => {
      renderWithProviders(<Navbar />);

      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("When menu button is click", () => {
    test("Then it should show a link Home, Create and Login", async () => {
      renderWithProviders(<Navbar />);

      const button = screen.getByRole("button");

      await userEvent.click(button);

      const homelink = screen.getByRole("link", { name: "Home" });
      const createlink = screen.getByRole("link", { name: "Create" });
      const loginlink = screen.getByRole("link", { name: "Login" });

      expect(homelink).toBeInTheDocument();
      expect(createlink).toBeInTheDocument();
      expect(loginlink).toBeInTheDocument();
    });
  });
});
