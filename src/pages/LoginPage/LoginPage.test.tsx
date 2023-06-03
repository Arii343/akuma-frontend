import { screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a LoginPage page", () => {
  describe("When it renders", () => {
    test("Then it should show 'Login' title", () => {
      renderWithProviders(<LoginPage />);

      const expectedTitle = "Login";

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
