import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    font: 16px 'Raleway', sans-serif;
    font-weight: 500;
    background: ${({ theme }) => theme.colors.primary};
    -webkit-font-smoothing: antialiased;
  }

  input, button {
    font: 16px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    background: none;
    border: 0;
  }
`;