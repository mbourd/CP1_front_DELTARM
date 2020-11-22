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
`;
