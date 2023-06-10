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
    const isLogged = false;
    test("Then it should show a 'One Piece' anime image", () => {
      renderWithProviders(
        wrapWithRouter(
          <AnimeCard
            id={id}
            imageUrl={imageUrl}
            title={title}
            showAdminView={isLogged}
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
            showAdminView={isLogged}
            deleteAnime={deleteAnime}
          />
        )
      );

      const animeTitle = screen.getByRole("heading", { name: title });

      expect(animeTitle).toBeInTheDocument();
    });
  });

  describe("When it renders and the user is logged in", () => {
    test("Then it should show a delete 'One Piece' anime button", () => {
      const isLogged = true;
      renderWithProviders(
        wrapWithRouter(
          <AnimeCard
            id={id}
            imageUrl={imageUrl}
            title={title}
            showAdminView={isLogged}
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

  describe("When it renders and the user is logged in and clicks on delete button", () => {
    test("Then it should call the deleteAnime function with the 'One Piece' anime id", async () => {
      const isLogged = true;
      renderWithProviders(
        wrapWithRouter(
          <AnimeCard
            id={id}
            imageUrl={imageUrl}
            title={title}
            showAdminView={isLogged}
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
