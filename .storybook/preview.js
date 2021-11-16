import React from 'react';
import { BPITheme, BPIGlobalStyle } from '../src/Packages/Design';
import { ThemeProvider } from 'styled-components/macro';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={BPITheme}>
      <BPIGlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
