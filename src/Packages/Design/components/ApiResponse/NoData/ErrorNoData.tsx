import React from 'react';
import { IError } from '../types';
import { Error } from '../Error';
import icon from './empty.svg';

export const ErrorNoData: React.FC<React.PropsWithChildren<IError>> = (
  props,
): React.ReactElement => {
  return <Error {...props} icon={icon} />;
};
