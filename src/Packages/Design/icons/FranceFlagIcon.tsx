import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const FranceFlagIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox={'0 0 48 48'} {...props}>
      <path fill="#01209F" d="M16,42H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h14V42z" />
      <path fill="#EF4234" d="M48,40c0,1.105-0.895,2-2,2H32V6h14c1.105,0,2,0.895,2,2V40z" />
    </SvgIcon>
  );
};
