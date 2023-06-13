import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import App from "./App";

describe("Given an App component", () => {
  describe("When it renders", () => {
    test("Then it should show an あkuma logo", () => {
      renderWithProviders(wrapWithRouter(<App />));

      const logo = screen.getByRole("img", { name: "akuma logo" });

      expect(logo).toBeInTheDocument();
    });
  });
});
