import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const UserIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
      <path d="M12,13c3.309,0,6-2.691,6-6V6c0-3.309-2.691-6-6-6S6,2.691,6,6v1C6,10.309,8.691,13,12,13z" />{' '}
      <path d="M19.322,15.981c-4.704-1.303-9.939-1.303-14.644,0C2.513,16.581,1,18.564,1,20.805V24h22 v-3.195C23,18.564,21.487,16.581,19.322,15.981z" />
    </SvgIcon>
  );
};
