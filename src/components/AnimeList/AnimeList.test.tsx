import { screen } from "@testing-library/react";
import { animesMock } from "../../mocks/animes/animesMocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import AnimeList from "./AnimeList";
import userEvent from "@testing-library/user-event";
import { loggedInUserMock } from "../../mocks/user/userMocks";

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

  describe("When it renders and 'One Piece' anime delete button is click", () => {
    test("Then it should remove 'One Piece' anime card from the list of animes", async () => {
      const preloadedState = {
        animes: {
          animes: animesMock,
        },
        user: loggedInUserMock,
      };

      renderWithProviders(wrapWithRouter(<AnimeList />), preloadedState);

      const animeCard = screen.getByRole("article", {
        name: "One Piece anime card",
      });

      const deleteButton = screen.getByRole("button", {
        name: "Delete One Piece anime",
      });

      await userEvent.click(deleteButton);

      expect(animeCard).not.toBeInTheDocument();
    });
  });
});
