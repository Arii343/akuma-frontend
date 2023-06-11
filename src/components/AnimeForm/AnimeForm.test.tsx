import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import AnimeForm from "./AnimeForm";

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
});
