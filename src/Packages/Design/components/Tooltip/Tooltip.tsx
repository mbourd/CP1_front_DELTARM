import React from 'react';
import { Tooltip as MUITooltip } from '@material-ui/core';

import { useStyles } from './Tooltip.style';
import { ITooltip } from './types';

export const Tooltip: React.FC<ITooltip> = ({
  children,
  color = '#000000',
  backgroundColor = '#FFFFFF',
  fontFamily = 'inherit',
  fontSize = 'inherit',
  placement = 'bottom',
  title,
}): React.ReactElement => {
  const classes = useStyles({ color, backgroundColor, fontFamily, fontSize });

  return (
    <MUITooltip classes={classes} arrow={true} placement={placement} title={title}>
      {children}
    </MUITooltip>
  );
};
