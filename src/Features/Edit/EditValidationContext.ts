import { IData } from './types';
import React from 'react';

export interface IEditValidationContext {
  data: IData | null;
  fileId: string;
}

export const EditValidationContext = React.createContext<
  IEditValidationContext
>({
  data: null,
  fileId: '',
});
