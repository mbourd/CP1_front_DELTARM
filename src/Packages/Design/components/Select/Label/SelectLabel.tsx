import React from 'react';
import { Button as MUIButton } from '@material-ui/core';
import { SelectLabelStyled } from './SelectLabel.style';
import { ISelectLabel } from '../types';
import { useSizing } from '../../../hooks';
import { SelectIcon } from '../../../icons';
import { TextEllipsis } from '../../TextEllipsis';

export const SelectLabel: React.FC<ISelectLabel> = ({
  color = 'text',
  bdc = 'disabled',
  bgc = 'transparent',
  onClick,
  bdr,
  isOpen = false,
  containerBdc = 'primary',
  children,
}): React.ReactElement => {
  const sizing = useSizing();

  return (
    <SelectLabelStyled
      bdc={bdc}
      labelColor={color}
      bgc={bgc}
      bdr={bdr || sizing.radius}
      isOpen={isOpen}
      containerBdc={containerBdc}
    >
      <MUIButton className={'_SelectLabelButton'} disableRipple disableElevation onClick={onClick}>
        <span className={'container'}>
          <span className={'right'}>
            <TextEllipsis>{children}</TextEllipsis>
          </span>
          <span className={'left'}>
            <SelectIcon fontSize={'small'} />
          </span>
        </span>
      </MUIButton>
    </SelectLabelStyled>
  );
};
