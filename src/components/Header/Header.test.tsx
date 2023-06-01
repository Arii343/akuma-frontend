import Header from "./Header";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should show a logo 'あKUMA'", () => {
      renderWithProviders(<Header />);

      const logo = screen.getByRole("img", { name: "akuma logo" });

      expect(logo).toBeInTheDocument();
    });

    test("Then it should show a button menu burger", () => {
      renderWithProviders(<Header />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
