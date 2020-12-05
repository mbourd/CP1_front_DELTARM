import React from 'react';
import { IError } from '../types';
import { ErrorLarge } from './Large/ErrorLarge';
import { ErrorSmall } from './Small/ErrorSmall';
import { ErrorMedium } from './Medium/ErrorMedium';

export const Error: React.FC<IError> = (props): React.ReactElement => {
  switch (props.size) {
    case 'sm':
      return <ErrorSmall {...props} />;
    case 'md':
      return <ErrorMedium {...props} />;
  }

  return <ErrorLarge {...props} />;
};
