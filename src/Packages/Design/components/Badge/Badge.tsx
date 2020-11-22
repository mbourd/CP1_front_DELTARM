import React from 'react';
import { Badge as MUIBadge } from '@material-ui/core';
import { IBadge } from './types';
import { useStyles } from './Badge.style';

export const Badge: React.FC<IBadge> = ({
  children,
  showZero = false,
  content,
  color = '#FFFFFF',
  backgroundColor = '#000000',
  fontFamily = 'inherit',
}): React.ReactElement => {
  const classes = useStyles({ color, backgroundColor, fontFamily });

  return (
    <MUIBadge classes={classes} badgeContent={content} showZero={showZero}>
      {children}
    </MUIBadge>
  );
};
