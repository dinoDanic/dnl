import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  li {
    list-style: none;
  }
  h3 {
    margin-bottom: ${({ theme }) => theme.sizes.margin.md};
  }
  h5 {
    font-weight: normal;
  }
`;
export default GlobalStyle;
