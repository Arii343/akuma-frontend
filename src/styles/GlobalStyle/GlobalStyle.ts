import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

html {
@font-face {
  font-family: ${(props) => props.theme.font.fontFamily}, sans-serif;
  font-display: swap;
  src: url('https://fonts.googleapis.com/css2?family=Overpass:wght@300;400;500;600;700;800'),
}
}

body,
h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

button,
input {
  font-family: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyle;
