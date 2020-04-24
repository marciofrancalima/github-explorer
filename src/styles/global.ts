import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/bg.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #f0f0f5;
    background-image: url(${githubBackground});
    background-repeat: no-repeat;
    background-position: 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
  }

  #root {
    max-width: 96rem;
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  button {
    cursor: pointer;
  }
`;
