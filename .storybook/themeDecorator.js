import React, { Suspense } from 'react';
import { BPITheme, BPIGlobalStyle } from '../src/Packages/Design';
import { ThemeProvider } from 'styled-components/macro';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={BPITheme}>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={'Loading storybook'}>
        <BPIGlobalStyle />
        {storyFn()}
      </Suspense>
    </I18nextProvider>
  </ThemeProvider>
);

export default ThemeDecorator;
