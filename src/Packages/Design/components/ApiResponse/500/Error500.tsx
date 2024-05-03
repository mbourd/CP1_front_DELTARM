import React from 'react';
import { IError } from '../types';
import { Error } from '../Error';
import icon from './server.svg';

export const Error500: React.FC<React.PropsWithChildren<IError>> = (
  props,
): React.ReactElement => {
  return <Error {...props} icon={icon} />;
};
