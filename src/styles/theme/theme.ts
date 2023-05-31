import "@fontsource/overpass/500.css";
import "@fontsource/overpass/600.css";
import "@fontsource/overpass/700.css";
import "@fontsource/overpass/800.css";
import DefaultTheme from "./styled";

const PIXELS_ROOT_FONT_SIZE = 16;
const pixelsToRem = (value: number) => `${value / PIXELS_ROOT_FONT_SIZE}rem`;

const theme: DefaultTheme = {
  color: {
    primary: "#404e5c",
    secondary: "#26343f",
    terciary: "#647380",
    quaternary: "#f5f5f5",
    quinary: "#40a3ff",
    senary: "#bcbedc",
    septendary: "#ffffff",
  },

  backgroundColor: {
    primary: "#e4eaf0",
    secondary: "#2a2d41",
    terciary: "#fbfbfb",
    quaternary: "#12acfd",
    quinary: "#e84057",
    senary: "#00bba3",
    septendary: "#8492a6",
    octonary: "#adc0d2",
    nonary: "#ffffff",
  },

  font: {
    fontFamily: "Overpass",
    size: {
      extraSmall: pixelsToRem(16),
      small: pixelsToRem(18),
      medium: pixelsToRem(20),
      large: pixelsToRem(24),
      extraLarge: pixelsToRem(32),
      extraExtraLarge: pixelsToRem(36),
    },
    weight: {
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
  },

  spacing: {
    small: pixelsToRem(10),
    medium: pixelsToRem(15),
    large: pixelsToRem(20),
    extraLarge: pixelsToRem(30),
    extraExtraLarge: pixelsToRem(50),
  },
};

export default theme;
