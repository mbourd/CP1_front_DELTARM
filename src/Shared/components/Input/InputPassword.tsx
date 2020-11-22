import React from 'react';
import { Lock } from '@material-ui/icons';
import { IInputBase, InputBase } from './InputBase';

type Props = Omit<IInputBase, 'type' | 'icon'>;

export const InputPassword: React.FC<Props> = (props): React.ReactElement => {
  return <InputBase {...props} icon={<Lock />} type={'password'} />;
};
