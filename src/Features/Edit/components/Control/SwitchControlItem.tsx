import React, { SetStateAction, useContext } from 'react';
import { IApiControl, IChapter } from 'Features/Edit/types';
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
  LongTextControl,
  TimeControl,
  DateTimeControl,
  BooleanControl,
  RichTextControl,
} from './Form';
import { EditValidationContext } from 'Features/Edit';
import { SliderControl } from './Form/Slider/SliderControl';
import { Box } from '@mui/material';

interface IProps {
  control: IApiControl;
  formState: IChapter[];
  setFormState: React.Dispatch<SetStateAction<IChapter[]>>;
  context: 'edit' | 'validate';
}

export const SwitchControlItem: React.FC<IProps> = ({
  control,
  formState,
  setFormState,
  context,
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
          context={context}
        />
      );
    case 'email':
      return (
        <TextControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
          context={context}
        />
      );
    case 'auth_num':
      return (
        <TextControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
          context={context}
        />
      );
    case 'formula':
      return (
        <FormulaControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
          context={context}
        />
      );
    case 'select_list':
      return (
        <SelectListControl
          multiple={false}
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
          context={context}
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
          context={context}
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
          context={context}
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
          context={context}
        />
      );
    case 'financial':
      return (
        <FinancialControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
          context={context}
        />
      );
    case 'integer':
      return (
        <IntegerControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
          context={context}
        />
      );
    case 'decimal':
      return (
        <DecimalControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
          context={context}
        />
      );
    case 'date':
      return (
        <DateControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
          context={context}
        />
      );
    case 'time':
      return (
        <TimeControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
          context={context}
        />
      );
    case 'timestamp':
      return (
        <DateTimeControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
          context={context}
        />
      );
    case 'comment':
      return (
        <CommentControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
          context={context}
        />
      );
    case 'long_text':
      return (
        <LongTextControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
          context={context}
        />
      );
    case 'percent':
      return (
        <PercentControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
          context={context}
        />
      );
    case 'slider':
      return (
        <SliderControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
          context={context}
        />
      );
    case 'boolean':
      return (
        <BooleanControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
          context={context}
        />
      );
    case 'rich_text':
      return (
        <RichTextControl control={control} fileId={fileId} context={context} />
      );
    case 'file_upload':
      return (
        <UploadControl control={control} fileId={fileId} context={context} />
      );
    case 'info_block':
      return <InfoBlockControl control={control} context={context} />;
    case 'line_break':
      return <Box width="100%" />;
  }

  return null;
};
