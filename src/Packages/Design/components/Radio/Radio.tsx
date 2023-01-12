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
  font_color,
  font_style,
  id,
}) => {
  return (
    <RadioStyled
      className={'_CheckboxRadio'}
      mainColor={color}
      checkedColor={checkedColor}
      inputType={type}
      checked={checked}
      font_color={font_color}
      font_style={font_style}
    >
      <input
        type={type}
        className={'_CheckboxRadioInput'}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className={'_CheckboxRadioCheckmark'} />
      {label || children ? (
        <span
          className={'_CheckboxRadioLabel'}
          style={{
            color: font_color ? `#${font_color}` : '#000000',
            fontWeight: font_style ? `${font_style}` : 0,
            textDecoration: font_style ? `${font_style}` : 'none',
          }}
        >
          {label || children}
        </span>
      ) : null}
    </RadioStyled>
  );
};
