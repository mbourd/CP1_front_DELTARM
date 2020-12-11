import React from 'react';

import 'Services';
import 'Features';
import 'Shared';
import 'Services/Api/registerCallState';

import { MainHeader } from 'Shared/components';
import { MainContent } from 'Shared/components';
import { security, SecurityProvider } from 'Services';
import { useSecurity } from './Packages/Security';

const App = (): React.ReactElement => {
  const { user } = useSecurity();

  return (
    <SecurityProvider security={security}>
      {user.isLogged() ? <MainHeader /> : null}
      <MainContent />
    </SecurityProvider>
  );
};

export { App };
