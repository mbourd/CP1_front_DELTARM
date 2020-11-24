import React from 'react';

export interface IError {
  title: React.ReactNode;
  message?: React.ReactNode;
  image?: string;
  redirect?: {
    label: string;
    link: string;
  };
}
