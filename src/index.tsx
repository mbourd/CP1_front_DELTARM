import './polyfills';
import React, { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components/macro';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { PageLoader } from './Shared/components';
import { RecoilRoot } from 'recoil';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import { BPIGlobalStyle, BPITheme } from 'Styles';
import { AppMaintenance } from './AppMaintenance';
const maintenanceMode = false;

if (process.env.REACT_APP_ENV !== 'staging') {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    environment: process.env.REACT_APP_ENV,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <Router>
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Suspense fallback={<PageLoader text={'...'} />}>
            {maintenanceMode ? <AppMaintenance /> : <App />}
          </Suspense>
        </ThemeProvider>
      </Router>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root'),
);
