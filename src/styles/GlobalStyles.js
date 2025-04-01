// src/styles/GlobalStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #121212;
    color: #fff;
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  button {
    cursor: pointer;
    background-color: #1e1e1e;
    border: none;
    padding: 10px 20px;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #3a3a3a;
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .center {
    text-align: center;
  }

  .hidden {
    display: none;
  }

  .max-width {
    max-width: 100%;
  }

  .hidden-scrollbar {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default GlobalStyles;
