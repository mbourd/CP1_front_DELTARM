import React from 'react';
import { Button as MUIButton } from '@material-ui/core';
import { useStyles } from './Button.style';
import { useTheme } from 'Styles';
import { IButton } from '../types';

export const Button: React.FC<IButton> = ({
  children,
  color = 'primary',
  size = 'medium',
  type = 'default',
  component = 'button',
  href,
  disabled,
  onClick,
}): React.ReactElement => {
  const theme = useTheme();
  const classes = useStyles({
    color: theme.color[color],
    font: theme.font.medium.main,
    type,
    transition: theme.transition.time,
    disabled,
  });

  return (
    <MUIButton classes={classes} size={size} component={component} disabled={disabled} onClick={onClick} href={href}>
      {children}
    </MUIButton>
  );
};
