import React, { SetStateAction, useContext, useEffect, useState } from 'react';
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
  DataGridControl,
} from './Form';
import { EditValidationContext } from 'Features/Edit';
import { SliderControl } from './Form/Slider/SliderControl';
import { Box } from '@mui/material';
import { useApi, useRouter, getEnv, security, IUser } from 'Services';
import axios from 'axios';

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
  const [user] = useState<IUser>(security.getUser());
  const [updated_form_state, setupdated_form_state] = useState([]);

  const jwt = user.getJwt();
  const [get_value_response, setget_value_response] = useState(null);
  useEffect(() => {
    const data = formState[0].controls
      .map((c: any) => {
        return c.control_id;
      })
      .includes(control?.conditional?.conditional_by_field_id);

    if (data) {
      let condition = control.conditional?.conditional_formula;
      const findValueOfField: any = formState[0].controls.find((c: any) => {
        return control?.conditional?.conditional_by_field_id === c.control_id;
      });

      if (findValueOfField) {
        if (findValueOfField.control_value) {
          condition = condition?.replaceAll(
            '$',
            `'${findValueOfField.control_value}'`,
          );
        }
        if (!findValueOfField.control_value) {
          condition = condition?.replaceAll('$', `null`);
        }

        if (condition) {
          const executeCondition = Function('return ' + condition);

          if (executeCondition()) {
            control.editable = true;
            if (control.control_mandatory) {
              control.mandatory = true;
            }
          }
          if (!executeCondition()) {
            control.editable = false;
            if (control.control_mandatory) {
              control.mandatory = false;
            }
          }
          // 2 keys in control object : editable is use in component and control_editable is the initial api state
          if (!control.control_editable) {
            control.editable = false;
          }
        }
      }
      setupdated_form_state((formState: any) => formState.concat(control));
    } else if (control.control_conditional === true) {
      axios
        .get(
          `${getEnv('API_PROTOCOL')}://${getEnv(
            'API_HOST',
          )}/control/get_value?file_id=${fileId}&control_id=${
            control.conditional.conditional_by_field_id
          }`,
          {
            headers: {
              Authorization: jwt,
              'Content-type': 'application/json',
            },
          },
        )
        .then((data: any) => {
          setget_value_response(data?.data);
          let condition = control.conditional?.conditional_formula;
          if (data.data) {
            if (data.data.data) {
              condition = condition?.replaceAll(
                '$',
                `'${data.data.data.value}'`,
              );
            }
            if (!data.data.data) {
              condition = condition?.replaceAll('$', `null`);
            }
            if (condition) {
              const executeCondition = Function('return ' + condition);
              if (executeCondition()) {
                control.editable = true;
                if (control.control_mandatory) {
                  control.mandatory = true;
                }
              }
              if (!executeCondition()) {
                control.editable = false;
                if (control.control_mandatory) {
                  control.mandatory = false;
                }
              }
              // 2 keys in control object : editable is use in component and control_editable is the initial api state
              if (!control.control_editable) {
                control.editable = false;
              }
            }
          }

          setupdated_form_state((formState: any) => formState.concat(control));
          //   console.log(control);
        })
        .catch((error: any) => {
          //   console.log(error);
        });
    } else {
      setupdated_form_state((formState: any) => formState.concat(control));
      setget_value_response(null);
    }
  }, [control, fileId, jwt, formState]);

  switch (control.control_type) {
    case 'text':
      return (
        <TextControl
          control={control}
          fileId={fileId}
          formState={formState}
          setFormState={setFormState}
          context={context}
          get_value_response={get_value_response}
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
          get_value_response={get_value_response}
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
          get_value_response={get_value_response}
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
          get_value_response={get_value_response}
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
          get_value_response={get_value_response}
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
    case 'data_grid':
      return <DataGridControl control={control} fileId={fileId} />;
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
