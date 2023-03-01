import { createGlobalStyle } from 'styled-components';

export const breakpoint = {
  tablet: '35em',
  desktop: '60em',
};

export const GlobalStyles = createGlobalStyle`
  :root {
    --clr-primary-200: #8fe3f9;
    --clr-primary-300: #71c0d4;
    --clr-primary-400: #4d96a9;
    
    --clr-secondary-200: #d9b8ff;
    --clr-secondary-300: #b18bdd;
    --clr-secondary-400: #855fb1;

    --clr-neutral-300: #fafafa;
    --clr-neutral-400: #87879d;
    --clr-neutral-500: #28283d;
  }

  *, 
  *::after, 
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    color-scheme: light;
  }

  body {
    font-family: 'Red Hat Display', sans-serif;
    min-height: 100vh;
    line-height: 1;
    text-rendering: optimizeSpeed;
    overflow-x: hidden;
    background-color: var(--clr-neutral-300);
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  ::selection {
    background-color: var(--clr-primary-400);
    color: var(--clr-neutral-300);
  }

  *:focus-visible {
    outline: 2px dashed var(--clr-primary-400);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
