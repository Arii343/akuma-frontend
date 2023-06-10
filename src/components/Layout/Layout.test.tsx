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
  describe("When it reders and showSpinner is true", () => {
    test("Then it should show a Loader component", () => {
      const preloadedState = {
        ui: {
          showSkeleton: false,
          showSpinner: true,
        },
      };
      renderWithProviders(wrapWithRouter(<Layout />), preloadedState);

      const loader = screen.getByRole("generic", {
        name: "loader",
      });

      expect(loader).toBeInTheDocument();
    });
  });
});
