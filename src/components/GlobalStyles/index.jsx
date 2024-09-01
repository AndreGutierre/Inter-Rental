// GlobalStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font: 'Red Hat Display', sans-serif;
    --blanco: #ffffff;
    --grisOscuro: #262626;
    --celeste: #6BD1FF;
    --azul: #2271D1;
    --azulOscuro: #03122F;
    --negro: #000000;
  }

  html {
  scroll-behavior: smooth;
}

  body {
    margin: 0;
    font-family: var(--font);
    background-color: var(--blanco);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Otros estilos globales según tus necesidades */
`;

export default GlobalStyles;
