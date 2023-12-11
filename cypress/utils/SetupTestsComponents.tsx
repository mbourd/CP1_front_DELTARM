import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components/macro';
import { BPITheme, BPIGlobalStyle, ITheme } from '../../src/Packages/Design';

type SetupTestsComponentProps = {
  children: React.ReactNode;
  theme?: ITheme;
};

const SetupTestsComponents: React.FC<SetupTestsComponentProps> = ({
  children,
  theme,
}) => {
  return (
    <main id="main-content">
      <RecoilRoot>
        <ThemeProvider theme={theme ?? BPITheme}>
          <BPIGlobalStyle />
          {children}
        </ThemeProvider>
      </RecoilRoot>
    </main>
  );
};

export { SetupTestsComponents };
