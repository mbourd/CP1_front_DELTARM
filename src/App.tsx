import React, { useState } from 'react';

import 'Services';
import 'Features';
import 'Shared';
import 'Services/Api/registerCallState';

import { MainHeader } from 'Shared/components';
import { MainContent } from 'Shared/components';
import { IUser, security, SecurityProvider } from 'Services';

const App = (): React.ReactElement => {
  const [user] = useState<IUser>(security.getUser());

  return (
    <SecurityProvider security={security}>
      {!user.isJwtExpired() && <MainHeader />}
      <MainContent />
    </SecurityProvider>
  );
};

export { App };
