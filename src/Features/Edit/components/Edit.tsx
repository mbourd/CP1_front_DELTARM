import React from 'react';
import { EditValidation } from './EditValidation';
import { storage } from 'Services';

interface IProps {
  title: string;
  apiRouteName: string;
}

export const Edit: React.FC<IProps> = (props): React.ReactElement => {
  storage.removeData('edit');

  return <EditValidation {...props} />;
};
