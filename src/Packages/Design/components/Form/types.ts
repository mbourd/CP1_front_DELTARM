import { IColor } from '../../types';

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
}
