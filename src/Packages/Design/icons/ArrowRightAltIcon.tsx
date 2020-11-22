import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const ArrowRightAltIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
      <path d="M24,12L14,5v6H1c-0.553,0-1,0.448-1,1s0.447,1,1,1h13v6L24,12z" />
    </SvgIcon>
  );
};
