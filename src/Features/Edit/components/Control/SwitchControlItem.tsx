import React, { useContext } from 'react';
import { IControl } from 'Features/Edit/types';
import { TextControl, SelectListControl, FinancialControl, IntegerControl } from './Form';
import { EditContext } from 'Features/Edit';

interface IProps {
  control: IControl;
}

export const SwitchControlItem: React.FC<IProps> = ({ control }): React.ReactElement | null => {
  const { fileId } = useContext(EditContext);

  switch (control.type) {
    case 'text':
      return <TextControl control={control} fileId={fileId} />;
    case 'selectlist':
      return <SelectListControl control={control} fileId={fileId} />;
    case 'financial':
      return <FinancialControl control={control} fileId={fileId} />;
    case 'integer':
      return <IntegerControl control={control} fileId={fileId} />;
  }

  return null;
};
