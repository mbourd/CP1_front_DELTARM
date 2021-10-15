import React, { useContext } from 'react';
import { IControl } from 'Features/Edit/types';
import {
  TextControl,
  SelectListControl,
  FinancialControl,
  IntegerControl,
  DateControl,
  CommentControl,
  PercentControl,
  UploadControl,
  InfoBlockControl,
} from './Form';
import { EditValidationContext } from 'Features/Edit';

interface IProps {
  control: IControl;
}

export const SwitchControlItem: React.FC<IProps> = ({ control }): React.ReactElement | null => {
  const { fileId } = useContext(EditValidationContext);

  switch (control.type) {
    case 'text':
      return <TextControl control={control} fileId={fileId} />;
    case 'email':
      return <TextControl control={control} fileId={fileId} />;
    case 'auth_num':
      return <TextControl control={control} fileId={fileId} />;
    case 'selectlist':
      return <SelectListControl multiple={false} control={control} fileId={fileId} />;
    case 'multiple_list':
      return <SelectListControl multiple={true} control={control} fileId={fileId} />;
    case 'financial':
      return <FinancialControl control={control} fileId={fileId} />;
    case 'integer':
      return <IntegerControl control={control} fileId={fileId} />;
    case 'date':
      return <DateControl control={control} fileId={fileId} />;
    case 'comment':
      return <CommentControl control={control} fileId={fileId} />;
    case 'percent':
      return <PercentControl control={control} fileId={fileId} />;
    case 'file_upload':
      return <UploadControl control={control} fileId={fileId} />;
    case 'info_block':
      return <InfoBlockControl control={control} />;
  }

  return null;
};
