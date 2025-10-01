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

    /* Enhanced Color Palette */
    --primary-gradient: linear-gradient(135deg, #ED6D05 0%, #FF9A3C 100%);
    --primary-gradient-hover: linear-gradient(135deg, #D45A04 0%, #E8882A 100%);
    --navbar-bg: rgba(255, 255, 255, 0.95);
    --navbar-bg-mobile: rgba(237, 109, 5, 0.98);
    --navbar-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    --navbar-shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.15);
    --dropdown-bg: rgba(255, 255, 255, 0.98);
    --dropdown-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    --border-light: rgba(237, 109, 5, 0.2);
    --hover-overlay: rgba(237, 109, 5, 0.1);
    --active-overlay: rgba(237, 109, 5, 0.2);

    /* Spacing Scale */
    --space-xs: 0.25rem;   /* 4px */
    --space-sm: 0.5rem;    /* 8px */
    --space-md: 1rem;      /* 16px */
    --space-lg: 1.5rem;    /* 24px */
    --space-xl: 2rem;      /* 32px */
    --space-2xl: 3rem;     /* 48px */
    --space-3xl: 4rem;     /* 64px */
    --space-4xl: 6rem;     /* 96px */

    /* Container Sizes */
    --container-sm: 640px;
    --container-md: 768px;
    --container-lg: 1024px;
    --container-xl: 1280px;
    --container-2xl: 1536px;

    /* Navbar Specific */
    --navbar-height: 80px;
    --navbar-height-mobile: 70px;
    --nav-item-spacing: 0.5rem;
    --dropdown-width: 280px;
    --dropdown-item-height: 48px;
    --border-radius: 12px;
    --border-radius-small: 8px;
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.4s ease;
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
    line-height: 1.6;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: var(--space-lg);
    line-height: 1.2;
    font-weight: 600;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: var(--space-xl);
  }

  h2 {
    font-size: 2rem;
    margin-bottom: var(--space-lg);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--space-md);
  }

  p {
    margin-bottom: var(--space-md);
    line-height: 1.7;
  }

  button {
    cursor: pointer;
    background-color: var(--primary-color);
    color: var(--white);
    border: none;
    padding: var(--space-sm) var(--space-lg);
    border-radius: 6px;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: #E07F1C;
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  /* Enhanced Container System */
  .container {
    width: 100%;
    max-width: var(--container-xl);
    margin: 0 auto;
    padding: 0 var(--space-md);
  }

  .container-sm {
    max-width: var(--container-sm);
  }

  .container-md {
    max-width: var(--container-md);
  }

  .container-lg {
    max-width: var(--container-lg);
  }

  .container-xl {
    max-width: var(--container-xl);
  }

  .container-2xl {
    max-width: var(--container-2xl);
  }

  /* Comprehensive Spacing Utilities */
  /* Margins */
  .m-0 { margin: 0; }
  .m-xs { margin: var(--space-xs); }
  .m-sm { margin: var(--space-sm); }
  .m-md { margin: var(--space-md); }
  .m-lg { margin: var(--space-lg); }
  .m-xl { margin: var(--space-xl); }
  .m-2xl { margin: var(--space-2xl); }
  .m-3xl { margin: var(--space-3xl); }
  .m-4xl { margin: var(--space-4xl); }

  .mx-auto { margin-left: auto; margin-right: auto; }
  .mx-0 { margin-left: 0; margin-right: 0; }
  .mx-xs { margin-left: var(--space-xs); margin-right: var(--space-xs); }
  .mx-sm { margin-left: var(--space-sm); margin-right: var(--space-sm); }
  .mx-md { margin-left: var(--space-md); margin-right: var(--space-md); }
  .mx-lg { margin-left: var(--space-lg); margin-right: var(--space-lg); }
  .mx-xl { margin-left: var(--space-xl); margin-right: var(--space-xl); }

  .my-0 { margin-top: 0; margin-bottom: 0; }
  .my-xs { margin-top: var(--space-xs); margin-bottom: var(--space-xs); }
  .my-sm { margin-top: var(--space-sm); margin-bottom: var(--space-sm); }
  .my-md { margin-top: var(--space-md); margin-bottom: var(--space-md); }
  .my-lg { margin-top: var(--space-lg); margin-bottom: var(--space-lg); }
  .my-xl { margin-top: var(--space-xl); margin-bottom: var(--space-xl); }

  .mt-0 { margin-top: 0; }
  .mt-xs { margin-top: var(--space-xs); }
  .mt-sm { margin-top: var(--space-sm); }
  .mt-md { margin-top: var(--space-md); }
  .mt-lg { margin-top: var(--space-lg); }
  .mt-xl { margin-top: var(--space-xl); }
  .mt-2xl { margin-top: var(--space-2xl); }
  .mt-3xl { margin-top: var(--space-3xl); }
  .mt-4xl { margin-top: var(--space-4xl); }

  .mb-0 { margin-bottom: 0; }
  .mb-xs { margin-bottom: var(--space-xs); }
  .mb-sm { margin-bottom: var(--space-sm); }
  .mb-md { margin-bottom: var(--space-md); }
  .mb-lg { margin-bottom: var(--space-lg); }
  .mb-xl { margin-bottom: var(--space-xl); }
  .mb-2xl { margin-bottom: var(--space-2xl); }
  .mb-3xl { margin-bottom: var(--space-3xl); }
  .mb-4xl { margin-bottom: var(--space-4xl); }

  .ml-0 { margin-left: 0; }
  .ml-xs { margin-left: var(--space-xs); }
  .ml-sm { margin-left: var(--space-sm); }
  .ml-md { margin-left: var(--space-md); }
  .ml-lg { margin-left: var(--space-lg); }
  .ml-xl { margin-left: var(--space-xl); }

  .mr-0 { margin-right: 0; }
  .mr-xs { margin-right: var(--space-xs); }
  .mr-sm { margin-right: var(--space-sm); }
  .mr-md { margin-right: var(--space-md); }
  .mr-lg { margin-right: var(--space-lg); }
  .mr-xl { margin-right: var(--space-xl); }

  /* Padding */
  .p-0 { padding: 0; }
  .p-xs { padding: var(--space-xs); }
  .p-sm { padding: var(--space-sm); }
  .p-md { padding: var(--space-md); }
  .p-lg { padding: var(--space-lg); }
  .p-xl { padding: var(--space-xl); }
  .p-2xl { padding: var(--space-2xl); }
  .p-3xl { padding: var(--space-3xl); }
  .p-4xl { padding: var(--space-4xl); }

  .px-0 { padding-left: 0; padding-right: 0; }
  .px-xs { padding-left: var(--space-xs); padding-right: var(--space-xs); }
  .px-sm { padding-left: var(--space-sm); padding-right: var(--space-sm); }
  .px-md { padding-left: var(--space-md); padding-right: var(--space-md); }
  .px-lg { padding-left: var(--space-lg); padding-right: var(--space-lg); }
  .px-xl { padding-left: var(--space-xl); padding-right: var(--space-xl); }

  .py-0 { padding-top: 0; padding-bottom: 0; }
  .py-xs { padding-top: var(--space-xs); padding-bottom: var(--space-xs); }
  .py-sm { padding-top: var(--space-sm); padding-bottom: var(--space-sm); }
  .py-md { padding-top: var(--space-md); padding-bottom: var(--space-md); }
  .py-lg { padding-top: var(--space-lg); padding-bottom: var(--space-lg); }
  .py-xl { padding-top: var(--space-xl); padding-bottom: var(--space-xl); }

  .pt-0 { padding-top: 0; }
  .pt-xs { padding-top: var(--space-xs); }
  .pt-sm { padding-top: var(--space-sm); }
  .pt-md { padding-top: var(--space-md); }
  .pt-lg { padding-top: var(--space-lg); }
  .pt-xl { padding-top: var(--space-xl); }

  .pb-0 { padding-bottom: 0; }
  .pb-xs { padding-bottom: var(--space-xs); }
  .pb-sm { padding-bottom: var(--space-sm); }
  .pb-md { padding-bottom: var(--space-md); }
  .pb-lg { padding-bottom: var(--space-lg); }
  .pb-xl { padding-bottom: var(--space-xl); }

  .pl-0 { padding-left: 0; }
  .pl-xs { padding-left: var(--space-xs); }
  .pl-sm { padding-left: var(--space-sm); }
  .pl-md { padding-left: var(--space-md); }
  .pl-lg { padding-left: var(--space-lg); }
  .pl-xl { padding-left: var(--space-xl); }

  .pr-0 { padding-right: 0; }
  .pr-xs { padding-right: var(--space-xs); }
  .pr-sm { padding-right: var(--space-sm); }
  .pr-md { padding-right: var(--space-md); }
  .pr-lg { padding-right: var(--space-lg); }
  .pr-xl { padding-right: var(--space-xl); }

  /* Gap Utilities for Flexbox and Grid */
  .gap-0 { gap: 0; }
  .gap-xs { gap: var(--space-xs); }
  .gap-sm { gap: var(--space-sm); }
  .gap-md { gap: var(--space-md); }
  .gap-lg { gap: var(--space-lg); }
  .gap-xl { gap: var(--space-xl); }
  .gap-2xl { gap: var(--space-2xl); }

  /* Text Alignment */
  .text-left { text-align: left; }
  .text-center { text-align: center; }
  .text-right { text-align: right; }

  /* Display Utilities */
  .block { display: block; }
  .inline-block { display: inline-block; }
  .inline { display: inline; }
  .flex { display: flex; }
  .inline-flex { display: inline-flex; }
  .grid { display: grid; }

  /* Flexbox Utilities */
  .flex-row { flex-direction: row; }
  .flex-col { flex-direction: column; }
  .flex-wrap { flex-wrap: wrap; }
  .flex-nowrap { flex-wrap: nowrap; }

  .justify-start { justify-content: flex-start; }
  .justify-center { justify-content: center; }
  .justify-end { justify-content: flex-end; }
  .justify-between { justify-content: space-between; }
  .justify-around { justify-content: space-around; }
  .justify-evenly { justify-content: space-evenly; }

  .items-start { align-items: flex-start; }
  .items-center { align-items: center; }
  .items-end { align-items: flex-end; }
  .items-stretch { align-items: stretch; }

  .flex-1 { flex: 1; }
  .flex-auto { flex: auto; }
  .flex-none { flex: none; }

  /* Responsive Utilities */
  @media (max-width: 640px) {
    .container { padding: 0 var(--space-sm); }
    h1 { font-size: 2rem; }
    h2 { font-size: 1.75rem; }
    h3 { font-size: 1.375rem; }

    .sm\:m-0 { margin: 0; }
    .sm\:m-xs { margin: var(--space-xs); }
    .sm\:m-sm { margin: var(--space-sm); }
    .sm\:m-md { margin: var(--space-md); }
    .sm\:m-lg { margin: var(--space-lg); }

    .sm\:p-0 { padding: 0; }
    .sm\:p-xs { padding: var(--space-xs); }
    .sm\:p-sm { padding: var(--space-sm); }
    .sm\:p-md { padding: var(--space-md); }
    .sm\:p-lg { padding: var(--space-lg); }

    .sm\:gap-xs { gap: var(--space-xs); }
    .sm\:gap-sm { gap: var(--space-sm); }
    .sm\:gap-md { gap: var(--space-md); }
    .sm\:gap-lg { gap: var(--space-lg); }

    .sm\:text-left { text-align: left; }
    .sm\:text-center { text-align: center; }
    .sm\:text-right { text-align: right; }
  }

  @media (max-width: 768px) {
    .md\:m-0 { margin: 0; }
    .md\:m-xs { margin: var(--space-xs); }
    .md\:m-sm { margin: var(--space-sm); }
    .md\:m-md { margin: var(--space-md); }
    .md\:m-lg { margin: var(--space-lg); }

    .md\:p-0 { padding: 0; }
    .md\:p-xs { padding: var(--space-xs); }
    .md\:p-sm { padding: var(--space-sm); }
    .md\:p-md { padding: var(--space-md); }
    .md\:p-lg { padding: var(--space-lg); }

    .md\:gap-xs { gap: var(--space-xs); }
    .md\:gap-sm { gap: var(--space-sm); }
    .md\:gap-md { gap: var(--space-md); }
    .md\:gap-lg { gap: var(--space-lg); }
  }

  /* Section Spacing */
  section {
    padding: var(--space-3xl) 0;
  }

  section:first-of-type {
    padding-top: var(--space-4xl);
  }

  section:last-of-type {
    padding-bottom: var(--space-4xl);
  }

  /* Form Elements */
  input, select, textarea {
    padding: var(--space-sm) var(--space-md);
    border: 2px solid #e9ecef;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    }
  }

  /* Card Components */
  .card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
  }

  /* Utility Classes for Common Patterns */
  .section-padding {
    padding: var(--space-3xl) var(--space-md);
  }

  .section-margin {
    margin: var(--space-2xl) 0;
  }

  .content-width {
    max-width: 65ch;
    margin: 0 auto;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export default GlobalStyles;
