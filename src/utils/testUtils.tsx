import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { RootState, setupStore, store } from "../store";
import { PropsWithChildren } from "react";
import theme from "../styles/theme/theme";
import { Provider } from "react-redux";
import { PreloadedState } from "redux";
import { render } from "@testing-library/react";
import GlobalStyle from "../styles/GlobalStyle/GlobalStyle";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={testStore}>{children}</Provider>
        </ThemeProvider>
      </BrowserRouter>
    );
  };

  render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
