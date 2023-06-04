import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import HomePage from "./HomePage";

describe("Given a HomePage page", () => {
  describe("When it renders", () => {
    test("Then it should show 'Anime' title", () => {
      renderWithProviders(wrapWithRouter(<HomePage />));

      const expectedTitle = "Anime";

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
