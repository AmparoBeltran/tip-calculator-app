import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  font-family: 'Space Mono', monospace;
  font-weight: 700;
  box-sizing: border-box;

    
  color: ${({ theme }) => theme.colors.veryDarkCyan};
  background-color: ${({ theme }) => theme.colors.lightGrayishCyan};
  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  }

  
  body {
    margin: 0 auto;
    font-size: 24px;
    min-height: 100vh;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {}

`;

export default GlobalStyles;
