import React from 'react';
import { FormErrorStyled } from './FormError.style';
import { IFormError } from '../types';

export const FormError: React.FC<IFormError> = ({ children, className, style }): React.ReactElement => {
  return (
    <FormErrorStyled style={style} className={'_FormError' + (className ? ' ' + className : '')}>
      {children}
    </FormErrorStyled>
  );
};
