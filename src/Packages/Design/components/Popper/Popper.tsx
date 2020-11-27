import React from 'react';
import { ClickAwayListener, Popper as MUIPopper } from '@material-ui/core';
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
  onClickAway,
  zIndex = 100000,
}): React.ReactElement => {
  return (
    <MUIPopper className={'_Popper'} open={open} anchorEl={element} placement={placement} style={{ zIndex: zIndex }}>
      {onClickAway ? (
        <ClickAwayListener onClickAway={onClickAway}>
          <PopperStyled border={border} shadow={shadow} bgc={bgc} bdr={bdr}>
            {children}
          </PopperStyled>
        </ClickAwayListener>
      ) : (
        <PopperStyled border={border} shadow={shadow} bgc={bgc} bdr={bdr}>
          {children}
        </PopperStyled>
      )}
    </MUIPopper>
  );
};
