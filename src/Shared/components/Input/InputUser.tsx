import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import { IInputBase, InputBase } from './InputBase';

type Props = Omit<IInputBase, 'type' | 'icon'>;

export const InputUser: React.FC<Props> = (props): React.ReactElement => {
  return <InputBase {...props} icon={<AccountCircle />} type={'text'} />;
};
