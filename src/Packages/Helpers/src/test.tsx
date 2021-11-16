import { ThemeProvider } from 'styled-components/macro';
import { BPITheme } from '../../Design';
import { render } from '@testing-library/react';
import React from 'react';

interface IProps {
  children?: React.ReactElement;
}

export const renderWithTheme: React.FC<IProps> = ({ children }): any =>
  render(<ThemeProvider theme={BPITheme}>{children}</ThemeProvider>);
