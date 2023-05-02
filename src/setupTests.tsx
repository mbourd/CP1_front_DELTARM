import { ThemeProvider } from 'styled-components/macro';
import { BPITheme } from 'Packages/Design';
import { render, RenderOptions } from '@testing-library/react';
import React, { FC, ReactElement, Suspense } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { server } from './mocks/server';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/mocks/i18n-test-config';

beforeAll(() => server?.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => server?.resetHandlers());
afterAll(() => server?.close());

const AllTheProviders: FC = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={BPITheme}>
        <Suspense fallback={'Loading tests'}>{children}</Suspense>
      </ThemeProvider>
    </I18nextProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
