import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import AnimeForm from "./AnimeForm";
import userEvent from "@testing-library/user-event";

describe("Given a AnimeForm component", () => {
  describe("When it renders", () => {
    test("Then it should show the 'English title' input", () => {
      renderWithProviders(<AnimeForm />);

      const label = "English title";

      const expectedInput = screen.getByLabelText(label);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show the 'Japanese title' input", () => {
      renderWithProviders(<AnimeForm />);

      const label = "Japanese title";

      const expectedInput = screen.getByLabelText(label);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show the 'Release year' input", () => {
      renderWithProviders(<AnimeForm />);

      const label = "Release year";

      const expectedInput = screen.getByLabelText(label);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show the 'Rating' input", () => {
      renderWithProviders(<AnimeForm />);

      const label = "Rating";

      const expectedInput = screen.getByLabelText(label);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show the 'Demographics' input", () => {
      renderWithProviders(<AnimeForm />);

      const label = "Demographics";

      const expectedInput = screen.getByLabelText(label);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show the 'Genres' input", () => {
      renderWithProviders(<AnimeForm />);

      const label = "Genres";

      const expectedInput = screen.getByLabelText(label);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show the 'Image' input", () => {
      renderWithProviders(<AnimeForm />);

      const label = "Image";

      const expectedInput = screen.getByLabelText(label);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show the 'Score' input", () => {
      renderWithProviders(<AnimeForm />);

      const label = "Score";

      const expectedInput = screen.getByLabelText(label);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show the 'Rank' input", () => {
      renderWithProviders(<AnimeForm />);

      const label = "Rank";

      const expectedInput = screen.getByLabelText(label);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show the 'Popularity' input", () => {
      renderWithProviders(<AnimeForm />);

      const label = "Popularity";

      const expectedInput = screen.getByLabelText(label);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show the 'Type' input", () => {
      renderWithProviders(<AnimeForm />);

      const label = "Type";

      const expectedInput = screen.getByLabelText(label);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show the 'Source' input", () => {
      renderWithProviders(<AnimeForm />);

      const label = "Source";

      const expectedInput = screen.getByLabelText(label);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show the 'Episodes' input", () => {
      renderWithProviders(<AnimeForm />);

      const label = "Episodes";

      const expectedInput = screen.getByLabelText(label);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show the 'Status' input", () => {
      renderWithProviders(<AnimeForm />);

      const label = "Status";

      const expectedInput = screen.getByLabelText(label);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show the 'Duration' input", () => {
      renderWithProviders(<AnimeForm />);

      const label = "Duration";

      const expectedInput = screen.getByLabelText(label);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show the 'Synopsis' input", () => {
      renderWithProviders(<AnimeForm />);

      const label = "Synopsis";

      const expectedInput = screen.getByLabelText(label);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show a button with the 'Create' text", () => {
      renderWithProviders(<AnimeForm />);

      const expectedButtonText = "Create";

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user types 'My Hero Academia Season 6' in the englishTitle input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<AnimeForm />);

      const inputEnglishTitle: HTMLInputElement = screen.getByRole("textbox", {
        name: "Write the anime english title",
      });
      const expectedText = "My Hero Academia Season 6";

      await userEvent.type(inputEnglishTitle, expectedText);

      expect(inputEnglishTitle).toHaveValue(expectedText);
    });
  });

  describe("When the user types '僕のヒーローアカデミア' in the japaneseTitle input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<AnimeForm />);

      const inputJapaneseTitle: HTMLInputElement = screen.getByRole("textbox", {
        name: "Write the anime japanese title",
      });
      const expectedText = "僕のヒーローアカデミア";

      await userEvent.type(inputJapaneseTitle, expectedText);

      expect(inputJapaneseTitle).toHaveValue(expectedText);
    });
  });

  describe("When the user types '2022' in the releaseYear input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<AnimeForm />);

      const inputReleaseYear: HTMLInputElement = screen.getByRole("textbox", {
        name: "Write the anime release year",
      });
      const expectedText = "2022";

      await userEvent.type(inputReleaseYear, expectedText);

      expect(inputReleaseYear).toHaveValue(expectedText);
    });
  });

  describe("When the user types 'PG-13 - Teens 13 or older' in the rating input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<AnimeForm />);

      const inputRating: HTMLInputElement = screen.getByRole("textbox", {
        name: "Write the anime rating",
      });
      const expectedText = "PG-13 - Teens 13 or older";

      await userEvent.type(inputRating, expectedText);

      expect(inputRating).toHaveValue(expectedText);
    });
  });

  describe("When the user types 'Shounen, Seinen' in the demographics input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<AnimeForm />);

      const inputDemographics: HTMLInputElement = screen.getByRole("textbox", {
        name: "Write the demographics of the anime",
      });
      const expectedText = "Shounen, Seinen";

      await userEvent.type(inputDemographics, expectedText);

      expect(inputDemographics).toHaveValue(expectedText);
    });
  });

  describe("When the user types 'Action, Drama' in the genres input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<AnimeForm />);

      const inputGenres: HTMLInputElement = screen.getByRole("textbox", {
        name: "Write the anime genres",
      });
      const expectedText = "Action, Drama";

      await userEvent.type(inputGenres, expectedText);

      expect(inputGenres).toHaveValue(expectedText);
    });
  });

  describe("When the user types 'https://anime-image.png' in the image input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<AnimeForm />);

      const inputImage: HTMLInputElement = screen.getByRole("textbox", {
        name: "Insert anime image url",
      });
      const expectedText = "https://anime-image.png";

      await userEvent.type(inputImage, expectedText);

      expect(inputImage).toHaveValue(expectedText);
    });
  });

  describe("When the user types '8.37' in the score input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<AnimeForm />);

      const inputScore: HTMLInputElement = screen.getByRole("textbox", {
        name: "Write the anime score out of ten",
      });
      const expectedText = "8.37";

      await userEvent.type(inputScore, expectedText);

      expect(inputScore).toHaveValue(expectedText);
    });
  });

  describe("When the user types '194' in the rank input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<AnimeForm />);

      const inputRank: HTMLInputElement = screen.getByRole("textbox", {
        name: "Write the anime rank",
      });
      const expectedText = "194";

      await userEvent.type(inputRank, expectedText);

      expect(inputRank).toHaveValue(expectedText);
    });
  });

  describe("When the user types '380' in the pupularity input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<AnimeForm />);

      const inputPopularity: HTMLInputElement = screen.getByRole("textbox", {
        name: "Write the anime popularity",
      });
      const expectedText = "380";

      await userEvent.type(inputPopularity, expectedText);

      expect(inputPopularity).toHaveValue(expectedText);
    });
  });

  describe("When the user types 'TV' in the type input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<AnimeForm />);

      const inputType: HTMLInputElement = screen.getByRole("textbox", {
        name: "Write the anime type",
      });
      const expectedText = "TV";

      await userEvent.type(inputType, expectedText);

      expect(inputType).toHaveValue(expectedText);
    });
  });

  describe("When the user types 'Mange' in the source input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<AnimeForm />);

      const inputSource: HTMLInputElement = screen.getByRole("textbox", {
        name: "Write the anime source",
      });
      const expectedText = "Mange";

      await userEvent.type(inputSource, expectedText);

      expect(inputSource).toHaveValue(expectedText);
    });
  });

  describe("When the user types '25' in th episodes input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<AnimeForm />);

      const inputEpisodes: HTMLInputElement = screen.getByRole("textbox", {
        name: "Write the anime episodes",
      });
      const expectedText = "25";

      await userEvent.type(inputEpisodes, expectedText);

      expect(inputEpisodes).toHaveValue(expectedText);
    });
  });

  describe("When the user types 'Finished Airing' in the status input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<AnimeForm />);

      const inputStatus: HTMLInputElement = screen.getByRole("textbox", {
        name: "Write the anime status",
      });
      const expectedText = "Finished Airing";

      await userEvent.type(inputStatus, expectedText);

      expect(inputStatus).toHaveValue(expectedText);
    });
  });

  describe("When the user types '23 min' in the duration input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<AnimeForm />);

      const inputDuration: HTMLInputElement = screen.getByRole("textbox", {
        name: "Write the anime duration",
      });
      const expectedText = "23 min";

      await userEvent.type(inputDuration, expectedText);

      expect(inputDuration).toHaveValue(expectedText);
    });
  });

  describe("When the user types 'With Tomura Shigaraki at its helm, the former...' in the synopsis textarea", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<AnimeForm />);

      const inputSynopsis: HTMLInputElement = screen.getByRole("textbox", {
        name: "Write the anime synopsis",
      });
      const expectedText = "With Tomura Shigaraki at its helm, the former...";

      await userEvent.type(inputSynopsis, expectedText);

      expect(inputSynopsis).toHaveValue(expectedText);
    });
  });
});
