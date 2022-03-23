import React, { useCallback, useContext, useEffect } from 'react';
import { EmbeddedContentStyled } from './EmbeddedContent.style';
import { SecurityContext, useSecurity } from '../../../Services';
import { SwitchReferentialAndPointsControl } from '../../../Features/Embedded/components/SwitchReferentialAndPointsControl/SwitchReferentialAndPointsControl';

export const EmbeddedContent: React.FC = (): React.ReactElement => {
  const { user } = useSecurity();
  const { login } = useContext(SecurityContext);

  const logUser = useCallback(
    async (token: string) => {
      await login(token);
    },
    [login],
  );

  useEffect(() => {
    if (window.cp1_token) {
      logUser(window.cp1_token);
    }
  }, [login, logUser]);

  return (
    <EmbeddedContentStyled>
      {user.isLogged() && (
        <SwitchReferentialAndPointsControl mode={window.context} />
      )}
      {!user.isLogged() && 'La connexion à CP1 a échoué'}
    </EmbeddedContentStyled>
  );
};
