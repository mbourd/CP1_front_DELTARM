import './polyfills';
import React, { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components/macro';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { PageLoader } from './Shared/components';
import { RecoilRoot } from 'recoil';

import { BPIGlobalStyle, BPITheme } from 'Styles';

ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <Router>
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Suspense fallback={<PageLoader text={'...'} />}>
            <App />
          </Suspense>
        </ThemeProvider>
      </Router>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root'),
);
