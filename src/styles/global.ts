import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #282828;

    --neonGreen: #42ff73;
    --neonPink: #dc5ef8;
    --neonBlue: #53d3ff;
    
    --hover: #ffffff;
    --text: #f2f2f2;
    --anchor: #CACACA;
    --tags: #666666;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  select,
  button{
    font: 400 1rem "Montserrat", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
