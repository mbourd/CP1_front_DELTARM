import React from 'react';
import { Search } from '@mui/icons-material';
import { IInputBase } from './types';
import { InputBase } from './InputBase';

export const InputSearch: React.FC<
  React.PropsWithChildren<Omit<IInputBase, 'type' | 'icon'>>
> = (props): React.ReactElement => {
  return (
    <InputBase
      {...props}
      className={
        '_InputSearch' + (props.className ? ' ' + props.className : '')
      }
      icon={<Search />}
      type={'text'}
    />
  );
};
