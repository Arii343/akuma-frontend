import { screen } from "@testing-library/react";
import { animesMock } from "../../mocks/animes/animesMocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import AnimesList from "./AnimesList";

describe("Given a AnimeList component", () => {
  describe("When it renders", () => {
    test("Then it should show names of animes", () => {
      const preloadedState = {
        animes: {
          animes: animesMock,
        },
      };

      renderWithProviders(wrapWithRouter(<AnimesList />), preloadedState);

      const expectedAnimeTitle = animesMock[0].englishTitle;

      const animeTitle = screen.getByRole("heading", {
        name: expectedAnimeTitle,
      });

      expect(animeTitle).toBeInTheDocument();
    });
  });
});
