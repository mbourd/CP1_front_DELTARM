import React from 'react';

export interface IError {
  title?: React.ReactNode;
  message?: React.ReactNode;
  icon?: string;
  size?: 'sm' | 'md' | 'lg';
}
