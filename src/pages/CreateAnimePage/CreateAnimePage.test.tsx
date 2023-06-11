import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import CreateAnimePage from "./CreateAnimePage";

describe("Given a CreateAnimePage page", () => {
  describe("When it renders", () => {
    test("Then it should show 'Create Anime' title", () => {
      renderWithProviders(wrapWithRouter(<CreateAnimePage />));

      const expectedTitle = "Create Anime";

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
