import { screen } from "@testing-library/react";
import { animesMock } from "../../mocks/animes/animesMocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import AnimeList from "./AnimeList";

describe("Given a AnimeList component", () => {
  describe("When it renders", () => {
    test("Then it should show names of animes", () => {
      const preloadedState = {
        animes: {
          animes: animesMock,
        },
      };

      renderWithProviders(wrapWithRouter(<AnimeList />), preloadedState);

      const expectedAnimeTitle = animesMock[0].englishTitle;

      const animeTitle = screen.getByRole("heading", {
        name: expectedAnimeTitle,
      });

      expect(animeTitle).toBeInTheDocument();
    });
  });
});
