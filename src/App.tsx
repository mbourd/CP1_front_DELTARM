import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'Services';
import 'Features';
import 'Shared';

import { BPIGlobalStyle, BPITheme } from 'Styles';
import { MainHeader } from 'Shared/components';
import { MainContent } from 'Shared/components';

const App = (): React.ReactElement => {
  return (
    <ThemeProvider theme={BPITheme}>
      <BPIGlobalStyle />
      <MainHeader />
      <MainContent />
    </ThemeProvider>
  );
};

export { App };
