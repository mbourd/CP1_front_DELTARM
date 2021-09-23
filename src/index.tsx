import React, { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components/macro';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { PageLoader } from './Shared/components';

import { BPIGlobalStyle, BPITheme } from 'Styles';
import { AppMaintenance } from './AppMaintenance';
const maintenanceMode = true;

ReactDOM.render(
  <StrictMode>
    <Router>
      <ThemeProvider theme={BPITheme}>
        <BPIGlobalStyle />
        <Suspense fallback={<PageLoader text={'...'} />}>{maintenanceMode ? <AppMaintenance /> : <App />}</Suspense>
      </ThemeProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root'),
);
