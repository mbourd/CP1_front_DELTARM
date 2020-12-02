import React from 'react';
import { InputBase as MUIInputBase } from '@material-ui/core';
import { InputBaseStyled, useStyles } from './InputBase.style';
import { useTheme } from 'Styles';
import { IInputBase } from '../types';

// Todo: rename to Input

export const InputBase: React.FC<IInputBase> = ({
  color = 'text',
  bdr = '50px',
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
  bgc = '#FFFFFF',
  className,
}): React.ReactElement => {
  const theme = useTheme();
  const c = theme.color[color];
  const classes = useStyles({ fontFamily: theme.font.text.main, fontColor: c ? c.main : theme.color.text.main });

  return (
    <InputBaseStyled
      borderSize={border}
      bgc={bgc}
      fontColor={c ? c.main : theme.color.text.main}
      radiusSize={bdr}
      className={'_Input ' + (className || '') + (status ? ' _Input-' + status : '')}
    >
      {icon}
      <MUIInputBase
        classes={classes}
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
