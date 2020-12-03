import React from 'react';
import { IControl } from 'Features/Edit/types';
import { TextControl } from '../Form';

interface IProps {
  control: IControl;
}

export const ControlItem: React.FC<IProps> = ({ control }): React.ReactElement | null => {
  switch (control.type) {
    case 'text':
      return <TextControl control={control} />;
  }

  return null;
};
