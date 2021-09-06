import React, { useEffect, useMemo, useContext } from 'react';
import { parse } from 'qs';
import { useLocation } from 'react-router-dom';

import './translations';
import { LoginStyled } from './Login.style';
import { HeadingOne, PageLoader } from 'Shared/components';
import { useTrans, SecurityContext, useSecurity } from 'Services';

const Login: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Login');
  const { login } = useContext(SecurityContext);
  const { user } = useSecurity();

  const location = useLocation();

  const { token } = useMemo<{ token?: string }>(() => {
    return parse(location.search, { ignoreQueryPrefix: true });
  }, [location.search]);

  useEffect(() => {
    if (token) {
      login(token);
    }
  }, [login, token]);
  useEffect(() => {
    if (user.isLogged()) {
      // We need the updated state immediately available
      window.location.href = '/';
    }
  }, [user]);

  return (
    <LoginStyled>
      <HeadingOne>{trans('pageTitle')}</HeadingOne>
      <PageLoader text={trans('loading', { ns: 'Default' })} />
    </LoginStyled>
  );
};

export { Login };
