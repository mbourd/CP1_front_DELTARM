import React from 'react';
import { ErrorStyled } from './Error.style';
import { IError } from './types';
import image from './server.svg';
import { Button } from '../Button';

export const Error: React.FC<IError> = ({ title, children, message, redirect }): React.ReactElement => {
  return (
    <ErrorStyled className={'_Error'}>
      <h1 className={'_Error-title'}>{title}</h1>
      <p className={'_Error-text'}>
        <img src={image} alt={title as string} className={'_Error-picture'} />
      </p>
      {message || children ? <p className={'_Error-message _Error-text'}>{message || children}</p> : null}
      {redirect ? (
        <p className={'_Error-text'}>
          <Button component={'a'} href={redirect.link}>
            {redirect.label}
          </Button>
        </p>
      ) : null}
    </ErrorStyled>
  );
};
