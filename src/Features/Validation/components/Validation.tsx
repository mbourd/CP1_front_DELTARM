import React from 'react';
import { EditValidation } from 'Features/Edit';

interface IProps {
  title: string;
  apiRouteName: string;
}

export const Validation: React.FC<IProps> = (props): React.ReactElement => {
  return <EditValidation {...props} />;
};
