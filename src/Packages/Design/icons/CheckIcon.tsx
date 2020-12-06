import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const CheckIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
      <path d="M0,12,2.4,9.5l4.8,3.6A32.9,32.9,0,0,1,22.8,3.5L24,5.9S12.52,10.68,7,21Z" />
    </SvgIcon>
  );
};
