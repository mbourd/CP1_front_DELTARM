import React from 'react';
import { Search } from '@material-ui/icons';
import { IInputBase, InputBase } from './InputBase';

export const InputSearch: React.FC<Omit<IInputBase, 'type' | 'icon'>> = (props): React.ReactElement => {
  return <InputBase {...props} icon={<Search />} type={'text'} />;
};
