import React, { SetStateAction, useContext } from 'react';
import { IApiControl } from 'Features/Edit/types';
import {
  TextControl,
  SelectListControl,
  FinancialControl,
  IntegerControl,
  DateControl,
  CommentControl,
  PercentControl,
  UploadControl,
  CheckboxControl,
  InfoBlockControl,
  DecimalControl,
  FormulaControl,
} from './Form';
import { EditValidationContext } from 'Features/Edit';

interface IProps {
  control: IApiControl;
  formState: IApiControl[];
  setFormState: React.Dispatch<SetStateAction<IApiControl[]>>;
}

export const SwitchControlItem: React.FC<IProps> = ({
  control,
  formState,
  setFormState,
}): React.ReactElement | null => {
  const { fileId } = useContext(EditValidationContext);
  switch (control.control_type) {
    case 'text':
      return (
        <TextControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      );
    case 'email':
      return (
        <TextControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      );
    case 'auth_num':
      return (
        <TextControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      );
    case 'formula':
      return (
        <FormulaControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      );
    case 'selectlist':
      return (
        <SelectListControl
          multiple={false}
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      );
    case 'multiple_list':
      return (
        <SelectListControl
          multiple={true}
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      );
    case 'radio':
      return (
        <CheckboxControl
          multiple={false}
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      );
    case 'checkbox':
      return (
        <CheckboxControl
          multiple={true}
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      );
    case 'financial':
      return (
        <FinancialControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      );
    case 'integer':
      return (
        <IntegerControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      );
    case 'decimal':
      return (
        <DecimalControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      );
    case 'date':
      return (
        <DateControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      );
    case 'comment':
      return (
        <CommentControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      );
    case 'percent':
      return (
        <PercentControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
        />
      );
    case 'file_upload':
      return <UploadControl control={control} fileId={fileId} />;
    case 'info_block':
      return <InfoBlockControl control={control} />;
  }

  return null;
};
