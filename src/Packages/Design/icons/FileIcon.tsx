import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const FileIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
      <path d="M23,2H1A1,1,0,0,0,0,3V21a1,1,0,0,0,1,1H23a1,1,0,0,0,1-1V3A1,1,0,0,0,23,2ZM12,18H4V16h8Zm8-5H4V11H20Zm0-5H4V6H20Z" />
    </SvgIcon>
  );
};
