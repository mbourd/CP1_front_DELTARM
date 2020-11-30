import React from 'react';
import { FormLabelStyled } from './FormLabel.style';
import { IFormLabel } from '../types';

export const FormLabel: React.FC<IFormLabel> = ({ children, className, color = 'text' }): React.ReactElement => {
  return (
    <FormLabelStyled colorType={color} className={'_FormLabel' + (className ? ' ' + className : '')}>
      {children}
    </FormLabelStyled>
  );
};
