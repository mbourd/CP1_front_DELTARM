// @ts-check
import React from 'react';
import { RecoilRoot } from 'recoil';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Store } from '@reduxjs/toolkit';
import { StyledEngineProvider } from '@mui/material';
// import { ThemeProvider } from 'styled-components';
// import { BPITheme, BPIGlobalStyle, ITheme } from '../src/Packages/Design';
import { AppContext, AppContextType } from '../AppContext';
import {
  ISecurityProviderContext,
  SecurityContext,
  appStore,
  store,
} from '../Services';
import type { IAppStore } from '../Packages/ReduxToolkit/types';

import '../Services';
import '../Features';
import '../Shared';
import '../Services/Api/registerCallState';

export type SetupTestsComponentPropsType = Record<
  string | number | symbol,
  any
> & {
  // theme?: ITheme;
  style?: React.CSSProperties;
  appContextValue?: AppContextType & Record<'ForCompTests', Record<any, any>>;
  securityContextValue?: ISecurityProviderContext;
  altReduxStore?: Store;
  altAppStore?: IAppStore;
  hasReduxPersist?: boolean;
};

const SetupTestsComponents: React.FC<
  React.PropsWithChildren<SetupTestsComponentPropsType>
> = ({
  children,
  // theme,
  style,
  appContextValue = {},
  securityContextValue = {
    user: 'security.getUser()',
    jwt: 'security.getUser().getJwt()',
    data: { context: 'CP1' },
    login: () => undefined,
    logout: () => undefined,
  } as any as ISecurityProviderContext,
  altReduxStore,
  hasReduxPersist,
  altAppStore,
  ...rest
}) => {
  let content = (
    <main style={style}>
      <AppContext.Provider value={appContextValue}>
        <SecurityContext.Provider value={securityContextValue}>
          <RecoilRoot>
            <BrowserRouter>
              <StyledEngineProvider injectFirst>
                {children}
              </StyledEngineProvider>
            </BrowserRouter>
          </RecoilRoot>
        </SecurityContext.Provider>
      </AppContext.Provider>
    </main>
  );

  if (hasReduxPersist) {
    content = (
      <PersistGate
        loading={null}
        persistor={
          altAppStore?.getPersistor() ?? (appStore.getPersistor() as Persistor)
        }
      >
        {content}
      </PersistGate>
    );
  }

  return <Provider store={altReduxStore ?? store}>{content}</Provider>;
};

export { SetupTestsComponents };
