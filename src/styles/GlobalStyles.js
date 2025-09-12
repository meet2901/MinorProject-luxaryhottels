import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #ED6D05;
    --secondary-color: #FF9A3C;
    --text-color: #333;
    --text-light: #666;
    --background-light: #FFF5E9;
    --white: #ffffff;
    --error: #e74c3c;
    --warning: #f39c12;
    --success: #2ecc71;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--text-color);
    background-color: var(--background-light);
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s ease;
  }

  img {
    max-width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1.25;
  }

  p {
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
    background-color: var(--primary-color);
    color: var(--white);
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    font-weight: 500;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: #E07F1C;
    }
  }

  /* Utility Classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .text-center {
    text-align: center;
  }

  .mb-1 {
    margin-bottom: 0.5rem;
  }

  .mb-2 {
    margin-bottom: 1rem;
  }

  .mb-3 {
    margin-bottom: 1.5rem;
  }

  .mb-4 {
    margin-bottom: 2rem;
  }

  .mt-1 {
    margin-top: 0.5rem;
  }

  .mt-2 {
    margin-top: 1rem;
  }

  .mt-3 {
    margin-top: 1.5rem;
  }

  .mt-4 {
    margin-top: 2rem;
  }
`;

export default GlobalStyles;