import React from 'react';
import { InputBase as MUIInputBase } from '@material-ui/core';
import { InputBaseStyled } from './InputBase.style';
import { IInputBase } from './types';
import { useTheme } from 'Styles';

export const InputBase: React.FC<IInputBase> = ({
  color = 'text',
  radius = false,
  status,
  icon = false,
  name,
  autoFocus,
  defaultValue,
  disabled,
  id,
  onChange,
  placeholder,
  readOnly,
  required,
  type = 'text',
  value,
  border = 1,
  background = 'transparent',
}): React.ReactElement => {
  const theme = useTheme();

  const c = theme.color[color];

  return (
    <InputBaseStyled
      className={status || ''}
      border={border}
      background={background}
      color={c ? c.main : theme.color.text.main}
      spacing={theme.spacing.xSmall}
      radius={radius === true ? '50px' : radius}
    >
      {icon}
      <MUIInputBase
        name={name}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        type={type}
        value={value}
        onChange={onChange}
      />
    </InputBaseStyled>
  );
};
