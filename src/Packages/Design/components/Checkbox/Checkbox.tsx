import React, { useState } from 'react';
import { ICheckbox } from './types';
import './Checkbox.style';
import { CheckboxStyled } from './Checkbox.style';

export const Checkbox: React.FC<ICheckbox> = ({
  checked = false,
  color = 'text',
  checkedColor = 'primary',
  size = 'small',
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
      className={'_Checkbox _Checkbox-' + size + (isChecked ? ' _Checkbox-checked' : '')}
      mainColor={color}
      checkedColor={checkedColor}
      size={size}
    >
      <span>
        <span className={'_Checkbox-input'}>
          <span className={'_Checkbox-mark'} />
        </span>
      </span>
      {label || children ? <span className={'_Checkbox-label'}>{label || children}</span> : null}
      <input type={'checkbox'} name={name} checked={isChecked} onChange={onValueChange} />
    </CheckboxStyled>
  );
};
