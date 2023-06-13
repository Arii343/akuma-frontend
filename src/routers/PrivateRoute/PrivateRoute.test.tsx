import { RouterProvider, createMemoryRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { renderWithProviders } from "../../utils/testUtils";
import { emptyUserMock, loggedInUserMock } from "../../mocks/user/userMocks";
import { screen } from "@testing-library/react";

describe("Given a PrivateRoute component", () => {
  const routes = [
    {
      path: "/private",
      element: (
        <PrivateRoute>
          <h1>Private Route</h1>
        </PrivateRoute>
      ),
    },
    {
      path: "/",
      element: <h1>Public Route</h1>,
    },
  ];
  describe("When it renders with a children and isLogged prop from state is true", () => {
    test("Then it should render the children component", () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/private"],
      });

      const preloadedState = {
        user: loggedInUserMock,
      };

      renderWithProviders(<RouterProvider router={router} />, preloadedState);

      const privateRouteTitle = screen.getByRole("heading", {
        name: "Private Route",
      });

      expect(privateRouteTitle).toBeInTheDocument();
    });
  });

  describe("When it renders with a children and isLogged prop from state is false", () => {
    test("Then it should navigate to '/'", () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/private"],
      });

      const preloadedState = {
        user: emptyUserMock,
      };

      renderWithProviders(<RouterProvider router={router} />, preloadedState);

      const publicRouteTitle = screen.getByRole("heading", {
        name: "Public Route",
      });

      expect(publicRouteTitle).toBeInTheDocument();
      expect(router.state.location.pathname).toBe("/");
    });
  });
});
