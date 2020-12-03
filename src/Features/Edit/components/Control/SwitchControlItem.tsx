import React from 'react';
import { IControl } from 'Features/Edit/types';
import { TextControl, SelectListControl, FinancialControl, IntegerControl } from './Form';

interface IProps {
  control: IControl;
}

export const SwitchControlItem: React.FC<IProps> = ({ control }): React.ReactElement | null => {
  switch (control.type) {
    case 'text':
      return <TextControl control={control} />;
    case 'selectlist':
      return <SelectListControl control={control} />;
    case 'financial':
      return <FinancialControl control={control} />;
    case 'integer':
      return <IntegerControl control={control} />;
  }

  return null;
};
