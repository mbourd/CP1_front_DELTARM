import React from 'react';
import { EditValidation } from './EditValidation';

interface IProps {
  title: string;
  apiRouteName: string;
}

export const Edit: React.FC<IProps> = (props): React.ReactElement => {
  return <EditValidation {...props} />;
};
