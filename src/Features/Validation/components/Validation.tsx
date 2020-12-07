import React from 'react';
import { EditValidation } from 'Features/Edit';
import { BreadCrumb } from 'Shared/components';

interface IProps {
  title: string;
  apiRouteName: string;
}

export const Validation: React.FC<IProps> = (props): React.ReactElement => {
  return (
    <>
      <BreadCrumb values={['Dashboard', 'Manage', 'Validation']} />
      <EditValidation {...props} />
    </>
  );
};
