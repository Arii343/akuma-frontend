import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import CreateAnimePage from "./CreateAnimePage";
import userEvent from "@testing-library/user-event";
import { animeMiraiNikkiFormDataMock } from "../../mocks/animes/animesMocks";
import { vi } from "vitest";

describe("Given a CreateAnimePage page", () => {
  describe("When it renders", () => {
    test("Then it should show 'Create Anime' title", () => {
      renderWithProviders(wrapWithRouter(<CreateAnimePage />));

      const expectedTitle = "Create Anime";

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it renders and the user creates 'Mirai Nikki' anime", () => {
    test("Then it should should clear anime form fields", async () => {
      vi.useRealTimers();

      renderWithProviders(wrapWithRouter(<CreateAnimePage />));

      const animeMiraiNiki = animeMiraiNikkiFormDataMock;

      const englishTitleLabel = "English title";
      const japaneseTitleLabel = "Japanese title";
      const releaseYearLabel = "Release year";
      const ratingLabel = "Rating";
      const demographicsLabel = "Demographics";
      const genresLabel = "Genres";
      const imageLabel = "Image";
      const scoreLabel = "Score";
      const rankLabel = "Rank";
      const popularityLabel = "Popularity";
      const typeLabel = "Type";
      const sourceLabel = "Source";
      const episodesLabel = "Episodes";
      const statusLabel = "Status";
      const durationLabel = "Duration";
      const synopsisLabel = "Synopsis";

      const englishTitleInput = screen.getByLabelText(
        englishTitleLabel
      ) as HTMLInputElement;
      const japaneseTitleInput = screen.getByLabelText(
        japaneseTitleLabel
      ) as HTMLInputElement;
      const releaseYearInput = screen.getByLabelText(
        releaseYearLabel
      ) as HTMLInputElement;
      const ratingInput = screen.getByLabelText(
        ratingLabel
      ) as HTMLInputElement;
      const demographicsInput = screen.getByLabelText(
        demographicsLabel
      ) as HTMLInputElement;
      const genresInput = screen.getByLabelText(
        genresLabel
      ) as HTMLInputElement;

      const imageInput = screen.getByLabelText(imageLabel) as HTMLInputElement;
      const scoreInput = screen.getByLabelText(scoreLabel) as HTMLInputElement;
      const rankInput = screen.getByLabelText(rankLabel) as HTMLInputElement;
      const popularityInput = screen.getByLabelText(
        popularityLabel
      ) as HTMLInputElement;
      const typeInput = screen.getByLabelText(typeLabel) as HTMLInputElement;
      const sourceInput = screen.getByLabelText(
        sourceLabel
      ) as HTMLInputElement;
      const episodesInput = screen.getByLabelText(
        episodesLabel
      ) as HTMLInputElement;
      const statusInput = screen.getByLabelText(
        statusLabel
      ) as HTMLInputElement;
      const durationInput = screen.getByLabelText(
        durationLabel
      ) as HTMLInputElement;
      const synopsisInput = screen.getByLabelText(
        synopsisLabel
      ) as HTMLInputElement;

      await userEvent.type(englishTitleInput, animeMiraiNiki.englishTitle);
      await userEvent.type(japaneseTitleInput, animeMiraiNiki.japaneseTitle);
      await userEvent.type(releaseYearInput, animeMiraiNiki.releaseYear);
      await userEvent.type(ratingInput, animeMiraiNiki.rating);
      await userEvent.type(demographicsInput, animeMiraiNiki.demographics);
      await userEvent.type(genresInput, animeMiraiNiki.genres);
      await userEvent.type(imageInput, animeMiraiNiki.image);
      await userEvent.type(scoreInput, animeMiraiNiki.score);
      await userEvent.type(rankInput, animeMiraiNiki.rank);
      await userEvent.type(popularityInput, animeMiraiNiki.popularity);
      await userEvent.type(typeInput, animeMiraiNiki.type);
      await userEvent.type(sourceInput, animeMiraiNiki.source);
      await userEvent.type(episodesInput, animeMiraiNiki.episodes);
      await userEvent.type(statusInput, animeMiraiNiki.status);
      await userEvent.type(durationInput, animeMiraiNiki.duration);
      await userEvent.type(synopsisInput, animeMiraiNiki.synopsis);

      const expectedSubmitButtonText = "Create";

      const submitButton = screen.getByRole("button", {
        name: expectedSubmitButtonText,
      });

      await userEvent.click(submitButton);

      expect(englishTitleInput).toHaveValue("");
      expect(japaneseTitleInput).toHaveValue("");
      expect(releaseYearInput).toHaveValue("");
      expect(ratingInput).toHaveValue("");
      expect(demographicsInput).toHaveValue("");
      expect(genresInput).toHaveValue("");
      expect(imageInput).toHaveValue("");
      expect(scoreInput).toHaveValue("");
      expect(rankInput).toHaveValue("");
      expect(typeInput).toHaveValue("");
      expect(sourceInput).toHaveValue("");
      expect(episodesInput).toHaveValue("");
      expect(statusInput).toHaveValue("");
      expect(durationInput).toHaveValue("");
      expect(synopsisInput).toHaveValue("");
    });
  });
});
