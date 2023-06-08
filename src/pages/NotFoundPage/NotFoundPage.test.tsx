import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import NotFoundPage from "./NotFoundPage";
import HomePage from "../HomePage/HomePage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Given a NotFoundPage page", () => {
  describe("When it renders", () => {
    test("Then it should show a goku image", () => {
      renderWithProviders(wrapWithRouter(<NotFoundPage />));

      const imageAltText = "Goku expelling rainbow with the number 404";

      const image = screen.getByRole("img", { name: imageAltText });

      expect(image).toBeInTheDocument();
    });

    test("Then it should show a 'Ooops! Page not found' text", () => {
      renderWithProviders(wrapWithRouter(<NotFoundPage />));

      const errorTitleText = "Ooops!";
      const errorSubtitleText = "Page not found";

      const titleText = screen.getByText(errorTitleText);
      const subtitleText = screen.getByText(errorSubtitleText);

      expect(titleText).toBeInTheDocument();
      expect(subtitleText).toBeInTheDocument();
    });

    test("Then it should show a button with 'Go back to Home' text", () => {
      renderWithProviders(wrapWithRouter(<NotFoundPage />));

      const buttonText = "Go back to Home";

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it renders and button with 'Go back to Home' text is click", () => {
    test("Then it should redirect the user to the home page", async () => {
      const routes = [
        {
          path: "/notFound",
          element: <NotFoundPage />,
        },
        {
          path: "/",
          element: <HomePage />,
        },
      ];

      const router = createMemoryRouter(routes, {
        initialEntries: ["/notFound"],
        initialIndex: 0,
      });

      renderWithProviders(<RouterProvider router={router} />);

      const buttonText = "Go back to Home";

      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.click(button);
      expect(router.state.location.pathname).toBe("/");
    });
  });
});
