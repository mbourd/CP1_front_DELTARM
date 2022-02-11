import React from 'react';
import { EditValidation } from './EditValidation';
import { BreadCrumb } from 'Shared/components';
import { storage } from 'Services';

interface IProps {
  title: string;
  apiRouteName: string;
}

export const Edit: React.FC<IProps> = (props): React.ReactElement => {
  storage.removeData('edit');

  return (
    <>
      <BreadCrumb values={['Dashboard', 'Edit']} />
      <EditValidation {...props} />
    </>
  );
};
