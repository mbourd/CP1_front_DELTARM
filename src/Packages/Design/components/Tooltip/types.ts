import React from 'react';

export interface ITooltip {
  children: React.ReactElement;
  bgc?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  placement?: 'bottom' | 'left' | 'right' | 'top';
  title: React.ReactElement | string;
}
