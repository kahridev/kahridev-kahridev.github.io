import { createGlobalStyle } from 'styled-components';
import '@fontsource/playfair-display';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Playfair Display', serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    font-family: inherit;
    border: none;
    outline: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;