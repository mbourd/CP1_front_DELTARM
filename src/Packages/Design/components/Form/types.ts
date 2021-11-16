import { IColor } from '../../types';
import React from 'react';

export interface IFormLabel {
  color?: keyof IColor;
  className?: string;
}

export interface IFormText {
  color?: keyof IColor;
  className?: string;
}

export interface IFormError {
  className?: string;
  style?: React.CSSProperties;
}
