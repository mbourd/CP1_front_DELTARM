import React from 'react';
import { IColor } from '../../types';

export interface IRadio {
  color?: keyof IColor;
  checkedColor?: keyof IColor;
  checked?: boolean;
  name?: string;
  type?: 'checkbox' | 'radio';
  value?: string;
  label?: NonNullable<React.ReactNode>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  disabled?: boolean;
  font_color?: any;
  font_style?: any;
  id?: any;
  background?: any;
}
