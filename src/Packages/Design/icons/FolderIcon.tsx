import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const FolderIcon: React.FC<React.PropsWithChildren<SvgIconProps>> = (
  props,
) => {
  return (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
      <path d="M12.5,5l-3-4H1A1,1,0,0,0,0,2V20a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V6a1,1,0,0,0-1-1Z" />
    </SvgIcon>
  );
};
