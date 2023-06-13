import { RouterProvider } from "react-router-dom";
import appRouter from "./appRouter";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a appRouter", () => {
  describe("When it renders", () => {
    test("Then it should show the 'Anime' title", () => {
      renderWithProviders(<RouterProvider router={appRouter} />);

      const animeTitle = screen.getByRole("banner");
      expect(animeTitle).toBeInTheDocument();
    });
  });
});
