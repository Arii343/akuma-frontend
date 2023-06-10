import { screen } from "@testing-library/react";
import { animeMock } from "../../mocks/animes/animesMocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import AnimeCard from "./AnimeCard";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

const imageUrl = animeMock.image;
const title = animeMock.englishTitle;
const id = animeMock.id;
const deleteAnime = vi.fn();

describe("Given a AnimeCard component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'One Piece' anime image", () => {
      renderWithProviders(
        wrapWithRouter(
          <AnimeCard
            id={id}
            imageUrl={imageUrl}
            title={title}
            deleteAnime={deleteAnime}
          />
        )
      );

      const animeImage = screen.getByRole("img", { name: "Anime One Piece" });

      expect(animeImage).toBeInTheDocument();
    });

    test("Then it should show a 'One Piece' anime title", () => {
      renderWithProviders(
        wrapWithRouter(
          <AnimeCard
            id={id}
            imageUrl={imageUrl}
            title={title}
            deleteAnime={deleteAnime}
          />
        )
      );

      const animeTitle = screen.getByRole("heading", { name: title });

      expect(animeTitle).toBeInTheDocument();
    });

    test("Then it should show a delete 'One Piece' anime button", () => {
      renderWithProviders(
        wrapWithRouter(
          <AnimeCard
            id={id}
            imageUrl={imageUrl}
            title={title}
            deleteAnime={deleteAnime}
          />
        )
      );

      const deleteButton = screen.getByRole("button", {
        name: "Delete One Piece anime",
      });

      expect(deleteButton).toBeInTheDocument();
    });
  });

  describe("When it renders and the user clicks on delete button", () => {
    test("The it should call the deleteAnime function with the 'One Piece' anime id", async () => {
      renderWithProviders(
        wrapWithRouter(
          <AnimeCard
            id={id}
            imageUrl={imageUrl}
            title={title}
            deleteAnime={deleteAnime}
          />
        )
      );

      const deleteButton = screen.getByRole("button", {
        name: "Delete One Piece anime",
      });

      await userEvent.click(deleteButton);

      expect(deleteAnime).toHaveBeenCalledWith(id);
    });
  });
});
