import { IData } from './types';
import React from 'react';

export interface IEditContext {
  data: IData | null;
  fileId: string;
}

export const EditContext = React.createContext<IEditContext>({
  data: null,
  fileId: '',
});
