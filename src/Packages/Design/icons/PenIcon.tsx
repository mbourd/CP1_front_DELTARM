import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const PenIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
      <path d="M1.915,17.329L1.02,21.804c-0.066,0.328,0.037,0.667,0.273,0.903C1.482,22.896,1.737,23,2,23 c0.065,0,0.131-0.006,0.196-0.02l4.475-0.895L1.915,17.329z" />
      <polygon fill="#000000" points="13.586,5 11,7.586 3,15.586 8.414,21 19,10.414 " />
      <path d="M22.707,5.293l-4-4c-0.391-0.391-1.023-0.391-1.414,0L15,3.586L20.414,9l2.293-2.293 C23.098,6.316,23.098,5.684,22.707,5.293z" />
    </SvgIcon>
  );
};
