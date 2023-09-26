import { createGlobalStyle } from "styled-components";

const resolution: number = window.innerWidth;
const defaultResolution = 1440;

const percentagePerRes = (resolution * 100) / defaultResolution;
const percentageInPx = (16 * percentagePerRes) / 100;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.3;
    font-weight: 400;
    font-family: "Baloo 2", sans-serif;
  }

  :root {
    font-size: ${`${percentageInPx}px`};
  }

  body {    
    /* display: flex;
    align-items: center;
    justify-content: center; */
    background-color: ${({ theme }) => theme.whiteBackground};
  }
`;

