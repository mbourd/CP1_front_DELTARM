import React from 'react';

import 'Services';
import 'Features';
import 'Shared';
import 'Services/Api/registerCallState';

import { MainHeader } from 'Shared/components';
import { MainContent } from 'Shared/components';

const App = (): React.ReactElement => {
  return (
    <>
      <MainHeader />
      <MainContent />
    </>
  );
};

export { App };
