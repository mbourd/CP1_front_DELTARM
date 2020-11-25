import React from 'react';
import { Badge as MUIBadge } from '@material-ui/core';
import { IBadge } from './types';
import { useStyles } from './Badge.style';

export const Badge: React.FC<IBadge> = ({
  children,
  showZero = false,
  content,
  color = '#FFFFFF',
  bgc = '#000000',
  fontFamily = 'inherit',
}): React.ReactElement => {
  const classes = useStyles({ color, bgc, fontFamily });

  return (
    <MUIBadge className={'_Badge'} classes={classes} badgeContent={content} showZero={showZero}>
      {children}
    </MUIBadge>
  );
};
