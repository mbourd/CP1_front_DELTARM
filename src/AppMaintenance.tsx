import React from 'react';

import 'Services';
import 'Features';
import 'Shared';
import 'Services/Api/registerCallState';

import { MainHeader } from 'Shared/components';
import { MainContent } from 'Shared/components';
import { JwtData, security, SecurityProvider, useSecurity } from 'Services';
import { Maintenance } from './Packages/Design/components/ApiResponse/Maintenance/Maintenance';
import { Login } from './Features';

/* Maintenance mode below, use this component for maintenance mode, add admin users below so they still can see the app */
const AppMaintenance = (): React.ReactElement => {
  const adminUsers = [352764, 3, 290346];
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const userId: JwtData | null = security.decodeJwtToken(jwt ? jwt : '');
  const isAdmin = adminUsers.find((user) => userId?.user_id === user);

  return (
    <SecurityProvider security={security}>
      {jwt ? null : <Login />}
      {!!isAdmin ? (
        <>
          <MainHeader />
          <MainContent />
        </>
      ) : (
        <Maintenance message={'Le site est en maintenance'} />
      )}
    </SecurityProvider>
  );
};

export { AppMaintenance };
