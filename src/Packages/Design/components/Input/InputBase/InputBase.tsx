import React, { useRef } from 'react';
import { TextField as MUIInputBase } from '@material-ui/core';
import { InputBaseStyled, useStyles } from './InputBase.style';
import { useTheme } from 'Styles';
import { IInputBase } from '../types';

// Todo: rename to Input

export const InputBase: React.FC<React.PropsWithChildren<IInputBase>> = ({
  color = 'text',
  bdr,
  status,
  icon = false,
  name,
  autoFocus,
  defaultValue,
  disabled,
  id,
  onChange,
  onKeyPress,
  onBlur,
  placeholder,
  required,
  type = 'text',
  value,
  border = 1,
  bgc = '#FFFFFF',
  className,
  multiline = false,
  multilineRows = 2,
  unit,
  inputRef,
  InputProps,
  fullWidth,
  selectAllOnClick,
  onClick,
}): React.ReactElement => {
  const ref = useRef();
  const theme = useTheme();
  const c = theme.color[color];
  const classes = useStyles({
    fontFamily: theme.font.text.main,
    fontColor: c ? c.main : theme.color.text.main,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { input, ...MUIInputBaseClasse } = classes;

  return (
    <InputBaseStyled
      $borderSize={border}
      $bgc={bgc}
      $fontColor={c ? c.main : theme.color.text.main}
      $bdr={bdr || theme.sizing.radius}
      className={
        '_Input ' + (className || '') + (status ? ' _Input-' + status : '')
      }
    >
      <div
        style={{
          width: icon?.currency_symbol ? 50 : 'auto',
          marginLeft: icon?.currency_symbol ? 5 : 0,
        }}
      >
        {icon?.currency_symbol ? (
          <p style={{ fontSize: 13, fontWeight: 'bolder' }}>
            {icon?.currency_symbol}
          </p>
        ) : (
          icon
        )}
      </div>
      <MUIInputBase
        inputRef={inputRef ?? ref}
        classes={MUIInputBaseClasse}
        name={name}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        multiline={multiline}
        InputProps={InputProps}
        rows={multiline ? multilineRows : undefined}
        fullWidth={fullWidth}
        onClick={(e) => {
          if (selectAllOnClick) (inputRef ?? ref).current.select();

          onClick && onClick(e as any);
        }}
      />
      <span style={{ padding: '5px' }}>{unit}</span>
    </InputBaseStyled>
  );
};
