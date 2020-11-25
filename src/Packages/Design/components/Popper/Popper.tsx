import React from 'react';
import { Popper as MUIPopper } from '@material-ui/core';
import { PopperStyled } from './Popper.style';
import { IPopper } from './types';

export const Popper: React.FC<IPopper> = ({
  children,
  open,
  element,
  border,
  shadow,
  bgc = '#FFFFFF',
  bdr = '4px',
  placement,
}): React.ReactElement => {
  return (
    <MUIPopper className={'_Popper'} open={open} anchorEl={element} placement={placement}>
      <PopperStyled border={border} shadow={shadow} bgc={bgc} bdr={bdr}>
        {children}
      </PopperStyled>
    </MUIPopper>
  );
};
