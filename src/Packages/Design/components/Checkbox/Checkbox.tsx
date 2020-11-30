import React, { useState } from 'react';
import { ICheckbox } from './types';
import './Checkbox.style';
import { CheckboxStyled } from './Checkbox.style';

export const Checkbox: React.FC<ICheckbox> = ({
  checked = false,
  color = 'text',
  checkedColor = 'primary',
  name,
  label,
  children,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <CheckboxStyled
      className={'_Checkbox' + (isChecked ? ' _CheckboxChecked' : '')}
      mainColor={color}
      checkedColor={checkedColor}
    >
      <span>
        <span className={'_CheckboxInput'}>
          <span className={'_CheckboxMark'} />
        </span>
      </span>
      {label || children ? <span className={'_CheckboxLabel'}>{label || children}</span> : null}
      <input type={'checkbox'} name={name} checked={isChecked} onChange={onValueChange} />
    </CheckboxStyled>
  );
};
