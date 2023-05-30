import { ThemeProvider } from "styled-components";
import Header from "./Header";
import theme from "../../styles/theme/theme";
import { render, screen } from "@testing-library/react";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";

describe("Given a Header component", () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Header />,
    },
  ];
  const router = createMemoryRouter(routes);
  describe("When it renders", () => {
    test("Then it should show a logo 'あKUMA'", () => {
      render(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      );

      const logo = screen.getByRole("img", { name: "akuma logo" });

      expect(logo).toBeInTheDocument();
    });
    test("Then it should show a button menu burger", () => {
      render(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      );

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
