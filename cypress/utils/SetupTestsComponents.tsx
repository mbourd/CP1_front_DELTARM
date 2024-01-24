import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components/macro';
import { BPITheme, BPIGlobalStyle, ITheme } from '../../src/Packages/Design';
import { AppContext, AppContextType } from '../../src/AppContext';

type SetupTestsComponentProps = {
  children: React.ReactNode;
  theme?: ITheme;
  style?: React.CSSProperties;
  appContextValue?: AppContextType & Record<'ForCompTests', Record<any, any>>;
};

const SetupTestsComponents: React.FC<SetupTestsComponentProps> = ({
  children,
  theme,
  style,
  appContextValue = {},
}) => {
  return (
    <AppContext.Provider value={appContextValue}>
      <main id="main-content" style={style}>
        <RecoilRoot>
          <ThemeProvider theme={theme ?? BPITheme}>
            <BPIGlobalStyle />
            {children}
          </ThemeProvider>
        </RecoilRoot>
      </main>
    </AppContext.Provider>
  );
};

export { SetupTestsComponents };
