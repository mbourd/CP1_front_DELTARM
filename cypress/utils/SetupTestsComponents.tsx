// @ts-check
import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { BPITheme, BPIGlobalStyle, ITheme } from '../../src/Packages/Design';
import { AppContext, AppContextType } from '../../src/AppContext';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist';
import {
  ISecurityProviderContext,
  SecurityContext,
  appStore,
  store,
} from '../../src/Services';
import { BrowserRouter } from 'react-router-dom';
import { Store } from '@reduxjs/toolkit';
import { IAppStore } from '../../src/Packages/ReduxToolkit/types';

type SetupTestsComponentProps = {
  theme?: ITheme;
  style?: React.CSSProperties;
  appContextValue?: AppContextType & Record<'ForCompTests', Record<any, any>>;
  securityContextValue?: ISecurityProviderContext;
  altReduxStore?: Store;
  altAppStore?: IAppStore;
};

const SetupTestsComponents: React.FC<
  React.PropsWithChildren<SetupTestsComponentProps>
> = ({
  children,
  theme,
  style,
  appContextValue = {},
  securityContextValue = {
    user: 'security.getUser()',
    jwt: 'security.getUser().getJwt()',
    data: { context: 'CP1' },
    login: () => undefined,
    logout: () => undefined,
  },
  altReduxStore,
  altAppStore,
}) => {
  return (
    <Provider store={altReduxStore ?? store}>
      <PersistGate
        loading={null}
        persistor={
          altAppStore?.getPersistor() ?? (appStore.getPersistor() as Persistor)
        }
      >
        <AppContext.Provider value={appContextValue}>
          <SecurityContext.Provider value={securityContextValue}>
            <main id="main-content" style={style}>
              <RecoilRoot>
                <BrowserRouter>
                  <ThemeProvider theme={theme ?? BPITheme}>
                    <BPIGlobalStyle />
                    {children}
                  </ThemeProvider>
                </BrowserRouter>
              </RecoilRoot>
            </main>
          </SecurityContext.Provider>
        </AppContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export { SetupTestsComponents };
