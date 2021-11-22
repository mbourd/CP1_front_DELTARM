import { ThemeProvider } from 'styled-components/macro';
import { BPITheme } from 'Packages/Design';
import { render, RenderOptions } from '@testing-library/react';
import React, { FC, ReactElement, Suspense } from 'react';
import '@testing-library/jest-dom/extend-expect';

const AllTheProviders: FC = ({ children }) => {
  return (
    <ThemeProvider theme={BPITheme}>
      <Suspense fallback={'Loading tests'}>{children}</Suspense>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
