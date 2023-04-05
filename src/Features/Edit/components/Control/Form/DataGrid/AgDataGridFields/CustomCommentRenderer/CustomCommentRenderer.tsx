import React, { useCallback, useState } from 'react';
import { CustomCommentRendererStyled } from './CustomCommentRenderer.style';
import { FormError, InputBase } from 'Shared/components';
import { useApi, useRouter, useTrans } from 'Services';
import { checkIfSameValues } from 'Packages/Helpers/src/checkIfSameValues';
import { ControlFooter } from '../../../ControlFooter';
import { ControlLabel } from '../../../ControlLabel';

const CustomCommentRenderer = ({ props, field_data, control }: any) => {
  const { currentRoute } = useRouter();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [trans] = useTrans('Edit');
  const { send, error } = useApi<void>();

  const [currentValue, setCurrentValue] = useState(field_data.control_value);
  const handleChange = (event: any) => {
    props.setValue(event.target.value);
    field_data.value = event?.target?.value;
  };
  const saveValue = useCallback(
    (value: string) => {
      if (field_data.control_regex && value) {
        const regexControl = new RegExp(field_data.control_regex, 'i');
        if (!value.match(regexControl)) {
          setErrorMessage(field_data.control_regex_msg);

          return;
        }
      }

      if (!checkIfSameValues(value, currentValue)) {
        setErrorMessage(null);
        if (field_data?.control_mandatory?.mandatory && !value.trim()) {
          setErrorMessage(trans('mandatoryValue'));
        }

        return;
      }

      setErrorMessage(null);

      if (field_data?.control_mandatory?.mandatory && !value.trim()) {
        setErrorMessage(trans('mandatoryValue'));
      }

      setCurrentValue(value);
      send(
        currentRoute?.props?.apiSaveControlRouteName,
        {},
        {
          //   file_id: fileId,
          elm_id: field_data.col_elm_id,
          elm_val: value,
          //   control_family: field_data.control_family,
        },
      );
    },
    [
      //   send,
      //   fileId,
      //   field_data.col_elm_id,
      //   currentRoute,
      field_data.control_family,
      field_data.control_regex,
      field_data.control_regex_msg,
      currentValue,
      setCurrentValue,
      field_data.control_mandatory,
      trans,
    ],
  );

  return (
    <CustomCommentRendererStyled>
      <InputBase
        multiline
        multilineRows={10}
        placeholder={field_data?.value}
        disabled={!field_data?.control_editable}
        value={field_data?.value}
        color={field_data?.control_editable ? 'text' : 'disabled'}
        defaultValue={field_data?.value ? field_data?.value : ''}
        onBlur={(e) => saveValue(e.currentTarget.value)}
        onChange={(event) => handleChange(event)}
      />
      {errorMessage ? <FormError>{errorMessage}</FormError> : null}
      <ControlFooter control={control} />
    </CustomCommentRendererStyled>
  );
};

export default CustomCommentRenderer;
