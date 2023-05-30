import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import Layout from "./Layout";

describe("Given a Leyout component", () => {
  describe("When it reders", () => {
    const routes: RouteObject[] = [
      {
        path: "/",
        element: <Layout />,
      },
    ];
    const router = createMemoryRouter(routes);
    test("Then it should show a Header component", () => {
      render(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      );

      const header = screen.getByRole("banner");

      expect(header).toBeInTheDocument();
    });
  });
});
