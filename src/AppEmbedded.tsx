import React from 'react';

import 'Services';
import 'Features';
import 'Shared';
import 'Services/Api/registerCallState';
import { EmbeddedContent } from 'Shared/components';
import { security, SecurityProvider } from 'Services';

declare global {
  interface Window {
    cp1_token: string;
    context: 'referential' | 'control-points';
  }
}

const AppEmbedded = (): React.ReactElement => {
  return (
    <SecurityProvider security={security}>
      <EmbeddedContent />
    </SecurityProvider>
  );
};

export { AppEmbedded };
