import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.3;
  }

  body {
    background-color: ${({ theme }) => theme.whiteBackground};
    font-family: 'Baboo2', sans-serif;
    font-weight: 400;
  }
`;