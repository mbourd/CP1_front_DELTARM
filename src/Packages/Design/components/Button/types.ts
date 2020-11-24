import { IColor } from '../../types';
import React from 'react';

export interface IButton {
  color?: keyof IColor;
  size?: 'small' | 'medium' | 'large';
  type?: 'default' | 'alt';
  component?: 'button' | 'a';
  href?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}
