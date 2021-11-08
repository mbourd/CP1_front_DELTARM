import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import { IInputBase } from './types';
import { InputBase } from './InputBase';

export const InputUser: React.FC<Omit<IInputBase, 'type' | 'icon'>> = (
  props,
): React.ReactElement => {
  return (
    <InputBase
      {...props}
      className={'_InputUser' + (props.className ? ' ' + props.className : '')}
      icon={<AccountCircle />}
      type={'text'}
    />
  );
};
