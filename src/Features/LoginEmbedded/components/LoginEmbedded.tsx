import React, { useEffect, useMemo, useContext, useCallback } from 'react';
import { parse } from 'qs';
import { useLocation } from 'react-router-dom';

import './translations';
import { LoginEmbeddedStyled } from './LoginEmbedded.style';
import { HeadingOne, PageLoader } from 'Shared/components';
import { useTrans, SecurityContext, router } from 'Services';

const LoginEmbedded: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement => {
  const [trans] = useTrans('Login');
  const { login } = useContext(SecurityContext);

  const location = useLocation();

  const { token: v2Token } = useMemo<{ token?: string }>(() => {
    return parse(location.search, { ignoreQueryPrefix: true });
  }, [location.search]);

  const { menu: v2menu } = useMemo<{ menu?: string }>(() => {
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
          router.redirectTo('embedded', {}, { v2context: v2menu });
        })
        .catch(() => {
          router.redirectTo('loginEmbeddedError');
        });
    }
  }, [logUser, v2Token, v2menu]);

  return (
    <LoginEmbeddedStyled>
      <HeadingOne>{trans('pageTitle')}</HeadingOne>
      <PageLoader text={trans('loading', { ns: 'Default' })} />
    </LoginEmbeddedStyled>
  );
};

export { LoginEmbedded };
