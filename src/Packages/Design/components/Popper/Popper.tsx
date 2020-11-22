import React from 'react';
import { Popper as MUIPopper } from '@material-ui/core';
import { PopperStyled } from './Popper.style';
import { IPopper } from './types';

export const Popper: React.FC<IPopper> = ({
  children,
  open,
  element,
  classes,
  border,
  shadow,
  bgc = '#FFFFFF',
  bdr = '4px',
  placement,
  x,
  y,
}): React.ReactElement => {
  return (
    <MUIPopper open={open} anchorEl={element} placement={placement}>
      <PopperStyled x={x} y={y} border={border} shadow={shadow} bgc={bgc} bdr={bdr} className={classes || ''}>
        {children}
      </PopperStyled>
    </MUIPopper>
  );
};
