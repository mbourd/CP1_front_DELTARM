import React from 'react';
import { Button as MUIButton } from '@material-ui/core';
import { ButtonStyled } from './Button.style';
import { useTheme } from 'Styles';
import { IButton } from '../types';

export const Button: React.FC<IButton> = ({
  children,
  color = 'primary',
  size = 'small',
  type = 'default',
  component = 'button',
  startIcon,
  endIcon,
  href,
  disabled,
  onClick,
}): React.ReactElement => {
  const theme = useTheme();

  let startIconCloned = null;
  let endIconCloned = null;

  if (React.isValidElement(startIcon)) {
    startIconCloned = React.cloneElement(startIcon, { className: '_ButtonIcon _ButtonStartIcon' });
  }

  if (React.isValidElement(endIcon)) {
    endIconCloned = React.cloneElement(endIcon, { className: '_ButtonIcon _ButtonEndIcon' });
  }

  return (
    <ButtonStyled className={'_Button'} colorType={theme.color[color]} type={type} disabled={disabled}>
      <MUIButton
        size={size}
        component={component}
        disabled={disabled}
        onClick={onClick}
        href={href}
        startIcon={startIconCloned}
        endIcon={endIconCloned}
      >
        {children}
      </MUIButton>
    </ButtonStyled>
  );
};
