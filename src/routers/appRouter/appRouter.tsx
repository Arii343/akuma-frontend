import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";
import { Suspense } from "react";
import { LazyLoginPage } from "../lazyComponents/lazyComponents";
import { paths } from "../paths/paths";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <LazyLoginPage />
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
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
