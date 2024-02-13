import React from 'react';
import { EditValidation } from 'Features/Edit';
import { storage } from 'Services';

interface IProps {
  title: string;
  apiRouteName: string;
}

export const Validation: React.FC<React.PropsWithChildren<IProps>> = (
  props,
): React.ReactElement => {
  storage.removeData('validation');

  return <EditValidation {...props} />;
};
