import React, { Suspense } from 'react';
import { BPITheme, BPIGlobalStyle } from '../src/Packages/Design';
import { ThemeProvider } from 'styled-components/macro';

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={BPITheme}>
    <Suspense fallback={'Loading storybook'}>
      <BPIGlobalStyle />
      {storyFn()}
    </Suspense>
  </ThemeProvider>
);

export default ThemeDecorator;
