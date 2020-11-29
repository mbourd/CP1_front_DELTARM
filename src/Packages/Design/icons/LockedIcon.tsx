import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const LockedIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
      <path d="M21,10H18V6.01A5.96,5.96,0,0,0,12.1,0h-.09A5.94,5.94,0,0,0,6,5.9V10H3a1,1,0,0,0-1,1V23a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11A1,1,0,0,0,21,10Zm-9,9a2,2,0,1,1,2-2A2,2,0,0,1,12,19Zm4-9H8V5.91A3.957,3.957,0,0,1,11.959,2h.131A3.957,3.957,0,0,1,16,6Z" />
    </SvgIcon>
  );
};
