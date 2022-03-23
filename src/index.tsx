/* eslint-disable @typescript-eslint/no-var-requires */

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
import { AppEmbedded } from './AppEmbedded';

if (process.env.REACT_APP_ENV !== 'staging') {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    environment: process.env.REACT_APP_ENV,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

// V2 divs to target for embedded features
const rootElementReferentiel = document.getElementById(
  'referentielControlCP1-root',
);
const rootElementControlsPoint = document.getElementById(
  'root-embedded-points-control',
);

if (rootElementReferentiel || rootElementControlsPoint) {
  process.env.REACT_APP_MODE === 'embedded'
    ? ReactDOM.render(
        <StrictMode>
          <AppEmbedded />
        </StrictMode>,
        rootElementReferentiel || rootElementControlsPoint,
      )
    : ReactDOM.render(
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
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}

if (module.hot) {
  module.hot.accept(() => {
    const NextApp =
      process.env.REACT_APP_MODE === 'embedded'
        ? require('./AppEmbedded').default
        : require('./App').default;
    if (rootElementControlsPoint || rootElementReferentiel) {
      ReactDOM.render(
        <NextApp />,
        rootElementControlsPoint || rootElementReferentiel,
      );
    }
  });
}
