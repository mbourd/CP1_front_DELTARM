import React from 'react';
import { AccountCircle } from '@mui/icons-material';
import { IInputBase } from './types';
import { InputBase } from './InputBase';

export const InputUser: React.FC<
  React.PropsWithChildren<Omit<IInputBase, 'type' | 'icon'>>
> = (props): React.ReactElement => {
  return (
    <InputBase
      {...props}
      className={'_InputUser' + (props.className ? ' ' + props.className : '')}
      icon={<AccountCircle />}
      type={'text'}
    />
  );
};
