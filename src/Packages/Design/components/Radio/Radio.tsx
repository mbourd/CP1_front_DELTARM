import React from 'react';
import { IRadio } from './types';
import { RadioStyled } from './Radio.style';

export const Radio: React.FC<IRadio> = ({
  checked = false,
  color = 'text',
  checkedColor = 'primary',
  type = 'radio',
  name,
  value,
  label,
  children,
  onChange,
}) => {
  return (
    <RadioStyled className={'_CheckboxRadio'} mainColor={color} checkedColor={checkedColor} inputType={type}>
      <input
        type={type}
        className={'_CheckboxRadioInput'}
        name={name}
        value={value}
        defaultChecked={checked}
        onChange={onChange}
      />
      <span className={'_CheckboxRadioCheckmark'} />
      {label || children ? <span className={'_CheckboxRadioLabel'}>{label || children}</span> : null}
    </RadioStyled>
  );
};
