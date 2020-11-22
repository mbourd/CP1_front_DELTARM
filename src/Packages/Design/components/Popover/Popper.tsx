import React from 'react';
import { Card, Popper as MUIPopper } from '@material-ui/core';
import { PopperStyled } from './Popper.style';
import { ReferenceObject } from 'popper.js';

interface IPopper {
  open: boolean;
  element: null | ReferenceObject | (() => ReferenceObject);
}

export const Popper: React.FC<IPopper> = ({ open, element }): React.ReactElement => {
  return (
    <MUIPopper open={open} anchorEl={element}>
      <PopperStyled>
        <Card elevation={0}>
          <p>Popper.tsx</p>
        </Card>
      </PopperStyled>
    </MUIPopper>
  );
};
