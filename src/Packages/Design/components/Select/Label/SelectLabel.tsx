import React from 'react';
import { Button as MUIButton } from '@mui/material';
import { SelectLabelStyled } from './SelectLabel.style';
import { ISelectLabel } from '../types';
import { useSizing } from '../../../hooks';
import { SelectIcon } from '../../../icons';
import { TextEllipsis } from '../../TextEllipsis';

export const SelectLabel: React.FC<React.PropsWithChildren<ISelectLabel>> = ({
  color = 'text',
  bdc = 'disabled',
  bgc = 'transparent',
  onClick,
  bdr,
  isOpen = false,
  isDisabled = false,
  containerBdc = 'primary',
  children,
  current_value_styles,
}): React.ReactElement => {
  const sizing = useSizing();

  return (
    <SelectLabelStyled
      $bdc={bdc}
      $labelColor={color}
      $bgc={bgc}
      $bdr={bdr || sizing.radius}
      $isOpen={isOpen}
      $containerBdc={containerBdc}
      $font_color={current_value_styles[0]?.font_color}
      $font_style={current_value_styles[0]?.font_style}
      $background={current_value_styles[0]?.background}
    >
      <MUIButton
        className={'_SelectLabelButton'}
        disableRipple
        disableElevation
        onClick={onClick}
        disabled={isDisabled}
      >
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
