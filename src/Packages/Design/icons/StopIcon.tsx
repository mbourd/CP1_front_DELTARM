import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const StopIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
      <path d="M23,0c0.552,0,1,0.448,1,1v22c0,0.552-0.448,1-1,1s-1-0.448-1-1V1C22,0.448,22.448,0,23,0z" />
      <path d="M9,19l9-7L9,5v6H1c-0.553,0-1,0.447-1,1s0.447,1,1,1h8V19z" />
    </SvgIcon>
  );
};
