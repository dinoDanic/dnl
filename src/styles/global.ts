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
    font-family: 'Nunito', sans-serif;
  }
  li {
    list-style: none;
  }
  h2 {
    margin-bottom: ${({ theme }) => theme.sizes.margin.lg};
  }
  h3 {
    margin-bottom: ${({ theme }) => theme.sizes.margin.md};
  }
  h4 {
    font-weight: normal;
    margin-bottom: ${({ theme }) => theme.sizes.margin.md};
  }
  h5 {
    font-weight: normal;
  }
  textarea { 
    font-family: 'Nunito', sans-serif;
  }
`;
export default GlobalStyle;
