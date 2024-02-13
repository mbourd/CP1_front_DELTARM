import React from 'react';
import { getEnv, useTrans } from 'Services';
import { Button, HeadingOne } from 'Shared/components';
import { LoginEmbeddedStyled } from '../LoginEmbedded.style';
import { LoginErrorButtonWrapperStyled } from './LoginErrorEmbedded.style';

const LoginErrorEmbedded: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement => {
  const [trans] = useTrans('Login');

  return (
    <LoginEmbeddedStyled>
      <HeadingOne>{trans('errorTitle')}</HeadingOne>
      <LoginErrorButtonWrapperStyled>
        <Button color="error" size="large" href={getEnv('LOGOUT_REDIRECT')}>
          {trans('logoutButton')}
        </Button>
      </LoginErrorButtonWrapperStyled>
    </LoginEmbeddedStyled>
  );
};

export { LoginErrorEmbedded };
