import React from 'react';
import { Lock } from '@material-ui/icons';
import { IInputBase } from './types';
import { InputBase } from './InputBase';

export const InputPassword: React.FC<Omit<IInputBase, 'type' | 'icon'>> = (
  props,
): React.ReactElement => {
  return (
    <InputBase
      {...props}
      icon={<Lock />}
      className={
        '_InputPassword' + (props.className ? ' ' + props.className : '')
      }
      type={'password'}
    />
  );
};
