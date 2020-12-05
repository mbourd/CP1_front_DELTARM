import { createGlobalStyle } from 'styled-components/macro';

import './reset.css';
import './fonts/deltarm.scss';
import { theme } from './themes';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.color.background.main};
    color: ${theme.color.text.main};
    font-family: ${({ theme }) => theme.font.text.main};
  }

  body, #root {
    min-height: 100vh;
  }

  #root {
    padding-top: ${({ theme }) => theme.data.header.height};
  }

  a {
    color: ${({ theme }) => theme.color.text.main};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.color.icon.main};
    cursor: pointer;
    transition: all ${({ theme }) => theme.transition.time};

    &:hover {
      color: ${({ theme }) => theme.color.hover.main};
    }
  }
`;
