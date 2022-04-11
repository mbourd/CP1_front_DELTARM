import React from 'react';

import 'Services';
import 'Features';
import 'Shared';
import 'Services/Api/registerCallState';
import { security, SecurityProvider, useSecurity } from 'Services';
import { MainContent, MainHeader } from './Shared/components';

interface AppProps {
  isEmbedded: boolean;
}

const App: React.FC<AppProps> = ({ isEmbedded }): React.ReactElement => {
  const { user } = useSecurity();

  return (
    <SecurityProvider security={security}>
      {user.isLogged() && !isEmbedded && <MainHeader />}
      <MainContent />
    </SecurityProvider>
  );
};

export { App };
