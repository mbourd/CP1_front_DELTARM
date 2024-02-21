import React from 'react';
import { EmbeddedGateStyled } from './EmbeddedGate.style';
import { router, useSecurity } from '../../../../Services';
import { EmbeddedContent } from '../../EmbeddedContent';

export const EmbeddedGate: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement => {
  const { user } = useSecurity();

  return (
    <EmbeddedGateStyled>
      {user.isLogged() && (
        <EmbeddedContent mode={router.getQueries().v2context} />
      )}
      {!user.isLogged() && 'La connexion à CP1 a échoué'}
    </EmbeddedGateStyled>
  );
};
