import React from 'react';
import 'Services';
import 'Features';
import 'Shared';
import 'Services/Api/registerCallState';
import { security, SecurityProvider, useSecurity } from 'Services';
import { MainContent, MainHeader } from './Shared/components';
import jwtDecode from 'jwt-decode';
import { BPITheme } from 'Styles';
import { ThemeProvider } from 'styled-components/macro';

interface AppProps {
  isEmbedded: boolean;
}

const App: React.FC<AppProps> = ({ isEmbedded }): React.ReactElement => {
  const { user } = useSecurity();

  const abc: any = user;

  console.log(jwtDecode(abc?._jwt));

  return (
    // <ThemeProvider theme={BPITheme}>
    <SecurityProvider security={security}>
      {user.isLogged() && !isEmbedded && <MainHeader />}
      <MainContent />
    </SecurityProvider>
    // </ThemeProvider>
  );
};

export { App };
