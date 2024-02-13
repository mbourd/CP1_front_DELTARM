import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const ReturnIcon: React.FC<React.PropsWithChildren<SvgIconProps>> = (
  props,
) => {
  return (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
      <path d="M16,1H8v2h8c3.309,0,6,2.691,6,6s-2.691,6-6,6H8V9l-8,7l8,7v-6h8c4.411,0,8-3.589,8-8S20.411,1,16,1z" />
    </SvgIcon>
  );
};
