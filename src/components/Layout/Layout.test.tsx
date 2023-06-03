import { screen } from "@testing-library/react";
import Layout from "./Layout";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a Leyout component", () => {
  describe("When it reders", () => {
    test("Then it should show a Header component", () => {
      renderWithProviders(wrapWithRouter(<Layout />));

      const header = screen.getByRole("banner");

      expect(header).toBeInTheDocument();
    });
  });
});
