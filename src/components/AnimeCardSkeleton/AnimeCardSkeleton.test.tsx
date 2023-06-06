import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import AnimeCardSkeleton from "./AnimeCardSkeleton";

describe("Given a AnimeCardSkeleton component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a AnimeCardSkeleton", () => {
      renderWithProviders(<AnimeCardSkeleton />);

      const animeCardSkeleton = screen.getByRole("article", {
        name: "anime-card-loader",
      });

      expect(animeCardSkeleton).toBeInTheDocument();
    });
  });
});
