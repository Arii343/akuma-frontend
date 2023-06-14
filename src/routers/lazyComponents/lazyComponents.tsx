import { lazy } from "react";

export const LazyLoginPage = lazy(
  () => import("../../pages/LoginPage/LoginPage")
);

export const LazyHomePage = lazy(() => import("../../pages/HomePage/HomePage"));

export const LazyCreateAnimePage = lazy(
  () => import("../../pages/CreateAnimePage/CreateAnimePage")
);

export const LaztNotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage")
);
