import React from 'react';
import { BPITheme } from '../src/Packages/Design';
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

export const decorators = [
  (Story) => (
    <ThemeProvider theme={BPITheme}>
      <Story />
    </ThemeProvider>
  ),
];
