import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { BPITheme, BPIGlobalStyle, ITheme } from '../../src/Packages/Design';
import { AppContext, AppContextType } from '../../src/AppContext';
import { Provider } from 'react-redux';
import {
  ISecurityProviderContext,
  SecurityContext,
  appStore,
} from '../../src/Services';
import { BrowserRouter } from 'react-router-dom';

type SetupTestsComponentProps = {
  theme?: ITheme;
  style?: React.CSSProperties;
  appContextValue?: AppContextType & Record<'ForCompTests', Record<any, any>>;
  securityContextValue?: ISecurityProviderContext;
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
}) => {
  return (
    <Provider store={appStore}>
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
    </Provider>
  );
};

export { SetupTestsComponents };
