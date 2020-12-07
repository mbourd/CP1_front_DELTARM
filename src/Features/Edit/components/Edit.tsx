import React from 'react';
import { EditValidation } from './EditValidation';
import { BreadCrumb } from 'Shared/components';

interface IProps {
  title: string;
  apiRouteName: string;
}

export const Edit: React.FC<IProps> = (props): React.ReactElement => {
  return (
    <>
      <BreadCrumb values={['Dashboard', 'Manage', 'Edit']} />
      <EditValidation {...props} />
    </>
  );
};
