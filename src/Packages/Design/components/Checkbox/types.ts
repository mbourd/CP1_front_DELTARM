import React from 'react';
import { IColor } from '../../types';

export interface ICheckbox {
  color?: keyof IColor;
  checkedColor?: keyof IColor;
  checked?: boolean;
  size?: 'small' | 'medium' | 'large';
  name?: string;
  label?: React.ReactNode;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onUnChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
