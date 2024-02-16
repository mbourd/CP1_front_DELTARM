import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const SelectIcon: React.FC<React.PropsWithChildren<SvgIconProps>> = (
  props,
) => {
  return (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
      <polygon points="12 1 18 9 6 9 12 1" />
      <polygon points="12 23 18 15 6 15 12 23" />
    </SvgIcon>
  );
};
