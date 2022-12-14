import {createGlobalStyle, DefaultTheme} from 'styled-components';
import reset from "styled-reset";
import {media} from "./theme";

export const lightTheme: DefaultTheme = {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
};

export const darkTheme: DefaultTheme = {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
  :focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  html {
    font-size: 11px;
    -webkit-text-size-adjust: none;
    font-family: -apple-system, BlinkMacSystemFont, helvetica, Apple SD Gothic Neo, sans-serif;
    font-display: fallback;

    ${media.tablet} {
      font-size: 10px;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;

    &:disabled {
      cursor: default;
      fill: #f2f3f4;
    }
  }

  .pc-tablet-only {
    display: block;

    ${media.mobile} {
      display: none;
    }
  }

  .tablet-mobile-only {
    display: none;

    ${media.tablet} {
      display: block;
    }
  }

  .mobile-only {
    display: none;

    ${media.mobile} {
      display: block;
    }
  }
`;