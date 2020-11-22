import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const PlayerIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
      <path d="M21,2H3A3,3,0,0,0,0,5V19a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V5A3,3,0,0,0,21,2ZM9,17V7l8,5Z" />
    </SvgIcon>
  );
};
