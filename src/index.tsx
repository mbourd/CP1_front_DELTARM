/* eslint-disable @typescript-eslint/no-var-requires */

import './polyfills';
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { PageLoader } from './Shared/components';
import { RecoilRoot } from 'recoil';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { BPIGlobalStyle, BPITheme } from 'Styles';
import { AppMaintenance } from './AppMaintenance';
import { StyledEngineProvider } from '@mui/material';

const maintenanceMode = false;

if (process.env.REACT_APP_ENV !== 'staging') {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    environment: process.env.REACT_APP_ENV,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

let isEmbedded = false;

// to know if we are embedded or not
function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

if (inIframe()) {
  isEmbedded = true;
}

root.render(
  <RecoilRoot>
    <Router>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <Suspense fallback={<PageLoader text={'...'} />}>
            {maintenanceMode ? (
              <AppMaintenance />
            ) : (
              <App isEmbedded={isEmbedded} />
            )}
          </Suspense>
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  </RecoilRoot>,
);
