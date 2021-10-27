import React from 'react';
import { ICheckboxContext } from './types';

export const CheckboxContext = React.createContext<ICheckboxContext>({
  data: {},
  multiple: true,
  name: '',
  selectedValues: {},
  onChange: undefined,
  disabled: false,
});
