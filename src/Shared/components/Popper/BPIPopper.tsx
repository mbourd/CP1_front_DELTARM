import React from 'react';
import { Popper as MUIPopper } from '@material-ui/core';
import { BPIPopperStyled } from './BPIPopper.style';
import { IBPIPopper } from './types';

export const BPIPopper: React.FC<IBPIPopper> = ({
  children,
  open,
  element,
  classes,
  placement,
}): React.ReactElement => {
  return (
    <MUIPopper open={open} anchorEl={element} placement={placement}>
      <BPIPopperStyled className={classes || ''}>{children}</BPIPopperStyled>
    </MUIPopper>
  );
};
