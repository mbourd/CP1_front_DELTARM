import React, { useEffect, useContext } from 'react';

import './translations';
import { LoginStyled } from './Login.style';
import { PageLoader } from 'Shared/components';
import { useTrans, SecurityContext, useRouter } from 'Services';

const Login: React.FC = (): React.ReactElement | null => {
  const [trans] = useTrans('Login');
  const { login } = useContext(SecurityContext);
  const { queries } = useRouter();
  const { token } = queries;

  useEffect(() => {
    if (token) {
      login(token);
    }
  }, [login, token]);

  return (
    <LoginStyled>
      <PageLoader text={trans('pageTitle')} />
    </LoginStyled>
  );
};

export { Login };
