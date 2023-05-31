import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";

describe("Given a LoginPage page", () => {
  describe("When it renders", () => {
    test("Then it should show 'Login' title", () => {
      render(
        <ThemeProvider theme={theme}>
          <LoginPage />
        </ThemeProvider>
      );

      const expectedTitle = "Login";

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
