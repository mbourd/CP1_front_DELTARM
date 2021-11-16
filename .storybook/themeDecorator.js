import React from 'react';
import { BPITheme, BPIGlobalStyle } from '../src/Packages/Design';
import { ThemeProvider } from 'styled-components/macro';

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={BPITheme}>
    <BPIGlobalStyle />
    {storyFn()}
  </ThemeProvider>
);

export default ThemeDecorator;
