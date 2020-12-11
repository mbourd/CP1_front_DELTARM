import React from 'react';

import 'Services';
import 'Features';
import 'Shared';
import 'Services/Api/registerCallState';

import { MainHeader } from 'Shared/components';
import { MainContent } from 'Shared/components';
import { security, SecurityProvider } from 'Services';

const App = (): React.ReactElement => {
  return (
    <SecurityProvider security={security}>
      <MainHeader />
      <MainContent />
    </SecurityProvider>
  );
};

export { App };
