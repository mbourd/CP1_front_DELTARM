import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const CheckboxIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
      <path d="M23,5H12a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" />
      <rect x="1" y="2" width="8" height="8" rx="1" ry="1" />
      <path d="M23,17H12a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" />
      <path d="M10,12.586l-6,6-2-2L.586,18l2.707,2.707a1,1,0,0,0,1.414,0L11.414,14Z" />
    </SvgIcon>
  );
};
