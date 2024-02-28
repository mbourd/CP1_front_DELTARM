import { IData } from './types';
import React from 'react';

export interface IEditValidationContext {
  data: IData | null;
  fileId: string;
  setSectionsLabels?: React.Dispatch<
    React.SetStateAction<Record<any, any> | undefined>
  >;
  sectionId?: string | null;
}

export const EditValidationContext =
  React.createContext<IEditValidationContext>({
    data: null,
    fileId: '',
  });
