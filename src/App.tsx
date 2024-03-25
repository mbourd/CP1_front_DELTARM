import React from 'react';
import 'Services';
import 'Features';
import 'Shared';
import 'Services/Api/registerCallState';
import { security, SecurityProvider, useSecurity } from 'Services';
import { MainContent, MainHeader } from './Shared/components';
import { BPITheme } from 'Styles';
import { ThemeProvider } from 'styled-components';
import { appStore, store } from 'Services';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist';

interface AppProps {
  isEmbedded: boolean;
}

const App: React.FC<AppProps> = ({ isEmbedded }): React.ReactElement => {
  const { user } = useSecurity();

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={appStore.getPersistor() as Persistor}
      >
        <ThemeProvider theme={BPITheme}>
          <SecurityProvider security={security}>
            {user.isLogged() && !isEmbedded && <MainHeader />}
            <MainContent />
          </SecurityProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export { App };
