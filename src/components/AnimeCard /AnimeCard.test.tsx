import { screen } from "@testing-library/react";
import { animeMock } from "../../mocks/animes/animesMocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import AnimeCard from "./AnimeCard";

describe("Given a AnimeCard component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'One Piece' anime image", () => {
      const imageUrl = animeMock.image;
      const title = animeMock.englishTitle;

      renderWithProviders(
        wrapWithRouter(<AnimeCard imageUrl={imageUrl} title={title} />)
      );

      const animeImage = screen.getByRole("img");

      expect(animeImage).toBeInTheDocument();
    });

    test("Then it should show a 'One Piece' anime title", () => {
      const imageUrl = animeMock.image;
      const title = animeMock.englishTitle;

      renderWithProviders(
        wrapWithRouter(<AnimeCard imageUrl={imageUrl} title={title} />)
      );

      const animeTitle = screen.getByRole("heading", { name: title });

      expect(animeTitle).toBeInTheDocument();
    });
  });
});
