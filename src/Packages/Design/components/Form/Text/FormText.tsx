import React from 'react';
import { FormTextStyled } from './FormText.style';
import { IFormText } from '../types';

export const FormText: React.FC<React.PropsWithChildren<IFormText>> = ({
  children,
  className,
  color = 'text',
}): React.ReactElement => {
  return (
    <FormTextStyled
      $colorType={color}
      className={'_FormText' + (className ? ' ' + className : '')}
    >
      {children}
    </FormTextStyled>
  );
};
