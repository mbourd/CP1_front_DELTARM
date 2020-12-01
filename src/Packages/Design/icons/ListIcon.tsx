import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const ListIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
      <circle cx="4" cy="4" r="3" />
      <circle cx="4" cy="12" r="3" />
      <circle cx="4" cy="20" r="3" />
      <rect x="9" y="3" width="14" height="2" />
      <rect x="9" y="11" width="14" height="2" />
      <rect x="9" y="19" width="14" height="2" />
    </SvgIcon>
  );
};
