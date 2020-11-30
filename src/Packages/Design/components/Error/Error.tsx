import React from 'react';
import { ErrorStyled } from './Error.style';
import { IError } from './types';
import img from './server.svg';
import { Button } from '../Button';

export const Error: React.FC<IError> = ({ title, children, message, redirect, image = img }): React.ReactElement => {
  return (
    <ErrorStyled className={'_Error'}>
      <h1 className={'_ErrorTitle'}>{title}</h1>
      <p className={'_ErrorText'}>
        <img src={image} alt={title as string} className={'_ErrorPicture'} />
      </p>
      {message || children ? <p className={'_ErrorMessage _ErrorText'}>{message || children}</p> : null}
      {redirect ? (
        <p className={'_ErrorText'}>
          <Button component={'a'} href={redirect.link}>
            {redirect.label}
          </Button>
        </p>
      ) : null}
    </ErrorStyled>
  );
};
