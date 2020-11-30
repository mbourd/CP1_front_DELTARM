import React from 'react';
import { FormErrorStyled } from './FormError.style';
import { IFormError } from '../types';

export const FormError: React.FC<IFormError> = ({ children, className }): React.ReactElement => {
  return <FormErrorStyled className={'_FormError' + (className ? ' ' + className : '')}>{children}</FormErrorStyled>;
};
