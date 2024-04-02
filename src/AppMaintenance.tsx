import React from 'react';

import 'Services';
import 'Features';
import 'Shared';
import 'Services/Api/registerCallState';

import { MainHeader } from 'Shared/components';
import { MainContent } from 'Shared/components';
import {
  appStore,
  JwtData,
  security,
  SecurityProvider,
  store,
  useSecurity,
} from 'Services';
import { Maintenance } from './Packages/Design/components/ApiResponse/Maintenance/Maintenance';
import { Login } from './Features';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist';

/* Maintenance mode below, use this component for maintenance mode, add admin users below so they still can see the app */
const AppMaintenance = (): React.ReactElement => {
  const adminUsers = [352764, 3, 290346, 329563, 329565, 365010];
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const userId: JwtData | null = security.decodeJwtToken(jwt ? jwt : '');
  const isAdmin = adminUsers.find((user) => userId?.user_id === user);

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={appStore.getPersistor() as Persistor}
      >
        <SecurityProvider security={security}>
          {jwt ? null : <Login />}
          {isAdmin !== undefined ? (
            <>
              <MainHeader />
              <MainContent />
            </>
          ) : (
            <Maintenance message={'Le site est en maintenance'} />
          )}
        </SecurityProvider>
      </PersistGate>
    </Provider>
  );
};

export { AppMaintenance };
