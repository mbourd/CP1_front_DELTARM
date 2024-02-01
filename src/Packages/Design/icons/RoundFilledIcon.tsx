import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const RoundFilledIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
      <path
        d="M 12,0
          C 18.29,0 24,5.71 24,12
          C 24,18.29 18.29,24 12,24
          C 5.71,24 0,18.29 0,12
          C 0,5.71 5.71,0 12,0 Z"
        fill="black"
      />
    </SvgIcon>
  );
};
