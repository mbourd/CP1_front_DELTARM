import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const CommentIcon: React.FC<React.PropsWithChildren<SvgIconProps>> = (
  props,
) => {
  return (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
      <path d="M22,1H2A2,2,0,0,0,0,3V16a2,2,0,0,0,2,2H5v6l8-6h9a2,2,0,0,0,2-2V3A2,2,0,0,0,22,1Z" />
    </SvgIcon>
  );
};
