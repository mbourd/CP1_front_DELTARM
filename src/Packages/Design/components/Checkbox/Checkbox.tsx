import React from 'react';
import { Checkbox as MUICheckbox } from '@material-ui/core';
import { ICheckbox } from './types';
import './Checkbox.style';
import { CheckboxStyled } from './Checkbox.style';

export const Checkbox: React.FC<ICheckbox> = ({ color = '' }) => {
  return (
    <CheckboxStyled>
      <MUICheckbox disableRipple />
    </CheckboxStyled>
  );
};
