import React from 'react';
import 'Services';
import 'Features';
import 'Shared';
import 'Services/Api/registerCallState';
import {
  appStore,
  security,
  SecurityProvider,
  store,
  useSecurity,
} from 'Services';
import { MainContent, MainHeader } from './Shared/components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist';
import { Toaster } from 'sonner';
import { AuthProvider } from 'contexts';

interface AppProps {
  isEmbedded: boolean;
}

const App: React.FC<AppProps> = ({ isEmbedded }): React.ReactElement => {
  /**
   * -----------------------------------------------------------
   * HOOKS
   * -----------------------------------------------------------
   */
  const { user } = useSecurity();

  /**
   * -----------------------------------------------------------
   * RENDER
   * -----------------------------------------------------------
   */
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={appStore.getPersistor() as Persistor}
      >
        <SecurityProvider security={security}>
          <AuthProvider>
            {user.isLogged() && !isEmbedded && <MainHeader />}
            <MainContent />
            <Toaster
              richColors
              toastOptions={{
                style: {
                  padding: 20,
                },
              }}
            />
          </AuthProvider>
        </SecurityProvider>
      </PersistGate>
    </Provider>
  );
};

export { App };
