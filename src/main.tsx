import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/theme";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers/appRouter/appRouter";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SnackbarProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <RouterProvider router={appRouter} />
        </Provider>
      </ThemeProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
