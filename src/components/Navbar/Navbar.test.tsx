import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";

describe("Given a Navbar component", () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Navbar />,
    },
  ];

  describe("When it renders", () => {
    test("Then it should show a burger menu button", () => {
      const router = createMemoryRouter(routes);

      render(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      );

      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("When menu button is click", () => {
    test("Then it should show a link Home, Create and Login", () => {
      const router = createMemoryRouter(routes);

      render(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      );

      const button = screen.getByRole("button");

      fireEvent.click(button);

      const homelink = screen.getByRole("link", { name: "Home" });
      const createlink = screen.getByRole("link", { name: "Create" });
      const loginlink = screen.getByRole("link", { name: "Login" });

      expect(homelink).toBeInTheDocument();
      expect(createlink).toBeInTheDocument();
      expect(loginlink).toBeInTheDocument();
    });
  });
});
