import React from 'react';
import { Search } from '@material-ui/icons';
import { IInputBase, InputBase } from './InputBase';

type Props = Omit<IInputBase, 'type' | 'icon'>;

export const InputSearch: React.FC<Props> = (props): React.ReactElement => {
  return <InputBase {...props} icon={<Search />} type={'text'} />;
};
