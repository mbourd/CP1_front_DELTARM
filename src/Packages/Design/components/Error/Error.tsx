import React from 'react';
import { ErrorStyled } from './Error.style';
import { IError } from './types';
import image from './server.svg';
import { Button } from '../Button';

export const Error: React.FC<IError> = ({ title, children, message, redirect }): React.ReactElement => {
  return (
    <ErrorStyled>
      <h1>{title}</h1>
      <p>
        <img src={image} alt={title as string} />
      </p>
      {message || children ? <p className={'message'}>{message || children}</p> : null}
      {redirect ? (
        <p>
          <Button component={'a'} href={redirect.link}>
            {redirect.label}
          </Button>
        </p>
      ) : null}
    </ErrorStyled>
  );
};
