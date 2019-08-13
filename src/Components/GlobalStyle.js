import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Blinker', sans-serif;
    font-size: 14px;
    background-color: #141414;
    color: #ffffff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  :root {
    --horizontal_width: 250px;
    --horizontal_height: calc(var(--horizontal_width) / (16 / 9));
    --horizontal_scale: 1.2;
    --vertical_width: 180px;
    --vertical_height: calc(var(--vertical_width) / (2 / 3));
    --vertical_scale: 1.1;
  }
`;

export default GlobalStyle;
