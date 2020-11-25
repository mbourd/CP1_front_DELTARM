import React from 'react';

import 'Services';
import 'Features';
import 'Shared';

import { BPIGlobalStyle } from 'Styles';
import { MainHeader } from 'Shared/components';
import { MainContent } from 'Shared/components';

const App = (): React.ReactElement => {
  return (
    <>
      <BPIGlobalStyle />
      <MainHeader />
      <MainContent />
    </>
  );
};

export { App };
