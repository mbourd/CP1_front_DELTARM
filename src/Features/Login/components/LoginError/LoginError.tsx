import React from 'react';
import { getEnv, useTrans } from 'Services';
import { Button, HeadingOne } from 'Shared/components';
import { LoginStyled } from '../Login.style';
import { LoginErrorButtonWrapperStyled } from './LoginError.style';

const LoginError: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Login');

  return (
    <LoginStyled>
      <HeadingOne>{trans('errorTitle')}</HeadingOne>
      <LoginErrorButtonWrapperStyled>
        <Button color="error" size="large" href={getEnv('LOGOUT_REDIRECT')}>
          {trans('logoutButton')}
        </Button>
      </LoginErrorButtonWrapperStyled>
    </LoginStyled>
  );
};

export { LoginError };
