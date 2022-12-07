import React from 'react';

export interface IError {
  title?: React.ReactNode;
  message?: React.ReactNode | any;
  icon?: string;
  size?: 'sm' | 'md' | 'lg';
  validate?: string;
}
