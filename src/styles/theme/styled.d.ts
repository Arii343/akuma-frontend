import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      terciary: string;
      quaternary: string;
      quinary: string;
      senary: string;
    };

    backgroundColor: {
      primary: string;
      secondary: string;
      terciary: string;
      quaternary: string;
      quinary: string;
      senary: string;
      septendary: string;
      octonary: string;
    };

    font: {
      fontFamily: string;
      size: {
        extraSmall: string;
        small: string;
        medium: string;
        large: string;
        extraLarge: string;
        extraExtraLarge: string;
      };
      weight: {
        medium: number;
        semiBold: number;
        bold: number;
        extraBold: number;
      };
    };

    spacing: {
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
      extraExtraLarge: string;
    };
  }
}

export default DefaultTheme;
