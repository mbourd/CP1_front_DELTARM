import React from 'react';
import { ISelectContext } from './types';

export const SelectContext = React.createContext<ISelectContext>({
  data: {},
  multiple: true,
  name: '',
  selectedValues: {},
  onChange: undefined,
});
