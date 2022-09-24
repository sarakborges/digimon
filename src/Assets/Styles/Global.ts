import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --hue: 230;

    --background: hsl(var(--hue) 30% 20% / 100%);
    --background1: hsl(var(--hue) 30% 18% / 100%);
    --background2: hsl(var(--hue) 30% 15% / 100%);
    --background3: hsl(var(--hue) 30% 12% / 100%);

    --text: hsl(var(--hue) 30% 80% / 100%);
    --title: hsl(var(--hue) 60% 60% / 100%);

    --primaryButtonBackground: hsl(var(--hue) 60% 60% / 100%);
    --primaryButtonBorder: hsl(var(--hue) 60% 60% / 100%);
    --primaryButtonText: hsl(var(--hue) 30% 80% / 100%);
    --primaryButtonShadow: hsl(var(--hue) 30% 10% / 100%);

    --progressBarBackground: hsl(var(--hue) 30% 80% / 100%);
    --progressBarInnerBackground: hsl(30 70% 50% / 100%);
    --progressBarText: hsl(var(--hue) 30% 30% / 100%);

    --fontFamily: "Roboto", sans-serif;
  }

  html{
    scrollbar-width: thin;
  }

  body {
    background-color: var(--background);
    
    font-family: var(--fontFamily);
    color: var(--text);
    letter-spacing: 1.5px;

    * {
      box-sizing: border-box;
      scrollbar-width: thin;
      outline: none;
      
      font-family: inherit;
      color: inherit;
      letter-spacing: inherit;
    }

    a {
      text-decoration: none;
    }
  }
`
