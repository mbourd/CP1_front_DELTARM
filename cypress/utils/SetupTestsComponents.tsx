import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components/macro';
import { BPITheme, BPIGlobalStyle, ITheme } from '../../src/Packages/Design';

type SetupTestsComponentProps = {
  children: React.ReactNode;
  theme?: ITheme;
  style?: React.CSSProperties;
};

const SetupTestsComponents: React.FC<SetupTestsComponentProps> = ({
  children,
  theme,
  style,
}) => {
  return (
    <main id="main-content" style={style}>
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
