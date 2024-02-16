import React from 'react';
import { ClickAwayListener, Popper as MUIPopper } from '@mui/material';
import { PopperStyled } from './Popper.style';
import { IPopper } from './types';

type PopperProps = {
  element: IPopper['element'];
  border?: IPopper['$border'];
  shadow?: IPopper['$shadow'];
  /**
   * Background color.
   */
  bgc?: IPopper['$bgc'];
  /**
   * Border radius.
   */
  bdr?: IPopper['$bdr'];
  placement?: IPopper['placement'];
  onClickAway?: IPopper['onClickAway'];
  zIndex?: IPopper['zIndex'];
};

export const Popper: React.FC<React.PropsWithChildren<PopperProps>> = ({
  children,
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
    <MUIPopper
      className={'_Popper'}
      open={!!element}
      anchorEl={element}
      placement={placement}
      style={{ zIndex: zIndex }}
      placeholder={''}
    >
      {onClickAway ? (
        <ClickAwayListener onClickAway={onClickAway}>
          <PopperStyled $border={border} $shadow={shadow} $bgc={bgc} $bdr={bdr}>
            {children}
          </PopperStyled>
        </ClickAwayListener>
      ) : (
        <PopperStyled $border={border} $shadow={shadow} $bgc={bgc} $bdr={bdr}>
          {children}
        </PopperStyled>
      )}
    </MUIPopper>
  );
};
