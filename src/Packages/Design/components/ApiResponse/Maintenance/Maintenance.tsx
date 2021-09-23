import React from 'react';
import { IError } from '../types';
import { Error } from '../Error';
import icon from './empty.svg';

export const Maintenance: React.FC<IError> = (props): React.ReactElement => {
  return <Error {...props} icon={icon} />;
};
