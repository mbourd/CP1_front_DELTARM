import React from 'react';

import './translations';
import { LoginStyled, InputContainerStyled } from './Login.style';
import bg from './bg.jpg';
import { HeadingOne, InputPassword, InputUser } from 'Shared/components';
import { useTrans } from 'Services';

const Login: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Login');

  return (
    <LoginStyled>
      <img src={bg} alt={'Login'} />
      <div className={'overlay'}>
        <form className={'form-container'}>
          <HeadingOne variant={'light'}>{trans('pageTitle')}</HeadingOne>
          <InputContainerStyled>
            <InputUser color={'white'} placeholder={trans('username')} autoFocus={true} bgc={'transparent'} />
          </InputContainerStyled>
          <InputContainerStyled>
            <InputPassword color={'white'} placeholder={trans('password')} bgc={'transparent'} />
          </InputContainerStyled>
        </form>
      </div>
    </LoginStyled>
  );
};

export { Login };
