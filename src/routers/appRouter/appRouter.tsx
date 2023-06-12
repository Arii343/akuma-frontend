import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";
import { Suspense } from "react";
import {
  LazyCreateAnimePage,
  LazyHomePage,
  LazyLoginPage,
} from "../lazyComponents/lazyComponents";
import { paths } from "../paths/paths";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <LazyHomePage />
          </Suspense>
        ),
      },

      {
        path: paths.login,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: paths.createAnime,
        element: (
          <PrivateRoute>
            <Suspense>
              <LazyCreateAnimePage />
            </Suspense>
          </PrivateRoute>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
