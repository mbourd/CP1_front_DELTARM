import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const HomeIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
      <path d="M23.633,10.226l-11-9a1,1,0,0,0-1.266,0l-11,9a1,1,0,0,0,1.266,1.548L3,10.656V22a1,1,0,0,0,1,1h6V17h4v6h6a1,1,0,0,0,1-1V10.656l1.367,1.118a1,1,0,1,0,1.266-1.548Z" />
    </SvgIcon>
  );
};
