import React from 'react';
import { IError } from '../types';
import { Error } from '../Error';
import icon from './notFound.svg';

export const ErrorNotFound: React.FC<IError> = (props): React.ReactElement => {
  return <Error {...props} icon={icon} />;
};
