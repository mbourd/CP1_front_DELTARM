import React, { useEffect, useMemo, useContext, useCallback } from 'react';
import { parse } from 'qs';
import { useLocation } from 'react-router-dom';

import './translations';
import { LoginStyled } from './Login.style';
import { HeadingOne, PageLoader } from 'Shared/components';
import { useTrans, SecurityContext, router } from 'Services';

const Login: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement => {
  const [trans] = useTrans('Login');
  const { login } = useContext(SecurityContext);

  const location = useLocation();

  const { token: v2Token } = useMemo<{ token?: string }>(() => {
    return parse(location.search, { ignoreQueryPrefix: true });
  }, [location.search]);

  const logUser = useCallback(
    async (token: string) => {
      await login(token);
    },
    [login],
  );

  useEffect(() => {
    if (v2Token) {
      logUser(v2Token)
        .then(() => {
          window.location.href = '/';
        })
        .catch(() => {
          router.redirectTo('loginError');
        });
    } else if (!v2Token) {
      router.redirectTo('dashboard');
    }
  }, [login, v2Token, logUser]);

  return (
    <LoginStyled>
      <HeadingOne>{trans('pageTitle')}</HeadingOne>
      <PageLoader text={trans('loading', { ns: 'Default' })} />
    </LoginStyled>
  );
};

export { Login };
