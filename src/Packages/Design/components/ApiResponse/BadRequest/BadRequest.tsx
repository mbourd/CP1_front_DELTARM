import React from 'react';
import { IError } from '../types';
import { Error } from '../Error';
import icon from './badRequest.svg';

export const BadRequest: React.FC<React.PropsWithChildren<IError>> = (
  props,
): React.ReactElement => {
  return <Error {...props} icon={icon} />;
};
