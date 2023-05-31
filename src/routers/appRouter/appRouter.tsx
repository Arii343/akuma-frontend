import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";
import LoginPage from "../../pages/LoginPage/LoginPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
