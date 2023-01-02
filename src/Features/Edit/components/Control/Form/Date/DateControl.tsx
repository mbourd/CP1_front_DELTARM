import React, { SetStateAction, useCallback, useEffect, useState } from 'react';
import { DateControlStyled } from './DateControl.style';
import { Grid } from '@material-ui/core';
import { IApiControl, IChapter } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { useApi, useRouter } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { checkIfSameValues } from '../../../../../../Packages/Helpers/src/checkIfSameValues';
import { updateFormState } from '../../../../../../Packages/Helpers/src/updateFormState';
import { minMax } from '../../../../../../Packages/Helpers/src/minMax';
import useFocus from '../../../../../../Packages/Helpers/src/useFocus';
import { RejectControl } from '../RejectByPointControl/RejectControl';
import { useTrans } from '../../../../../../Services';

interface IProps {
  control: IApiControl;
  fileId: string;
  formState: IChapter[];
  setFormState: React.Dispatch<SetStateAction<IChapter[]>>;
  context: 'edit' | 'validate';
}

export const DateControl: React.FC<IProps> = ({
  control,
  fileId,
  formState,
  setFormState,
  context,
}): React.ReactElement => {
  // const today = new Date();
  // const yesterday = new Date(today);
  // const tomorrow = new Date(today);

  // yesterday.setDate(yesterday.getDate() - 1);
  // tomorrow.setDate(tomorrow.getDate() + 1);

  // const today_min_date = `${today.toLocaleDateString().split('/')[2]}-${
  //   today.toLocaleDateString().split('/')[0]
  // }-${today.toLocaleDateString().split('/')[1]}`;

  // const yesterday_min_date = `${yesterday.toLocaleDateString().split('/')[2]}-${
  //   yesterday.toLocaleDateString().split('/')[0]
  // }-${yesterday.toLocaleDateString().split('/')[1]}`;

  // const tomorrow_min_date = `${tomorrow.toLocaleDateString().split('/')[2]}-${
  //   tomorrow.toLocaleDateString().split('/')[0]
  // }-${tomorrow.toLocaleDateString().split('/')[1]}`;

  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState(control.control_value);
  const [isRejected, setIsRejected] = useState(
    control.control_rejectable?.is_rejected
      ? control.control_rejectable.is_rejected
      : false,
  );
  const [inputRef, setInputFocus] = useFocus();
  const { currentRoute } = useRouter();
  const [trans] = useTrans('Edit');

  useEffect(() => {
    setCurrentValue(control.control_value);
  }, [control.control_value]);

  useEffect(() => {
    updateFormState(formState, control.control_id, currentValue, setFormState);
  }, [formState, control.control_id, currentValue, setFormState]);

  const saveValue = useCallback(
    (value: string) => {
      if (
        control.control_regex &&
        !value.match(control.control_regex) &&
        value
      ) {
        setErrorMessage(control.control_regex_msg);

        return;
      }

      if (
        (control.control_options?.min || control.control_options?.max) &&
        value.trim()
      ) {
        if (
          minMax(
            value,
            control.control_options.min,
            control.control_options.max,
          )
        ) {
          setErrorMessage(null);
        }
        if (
          !minMax(
            value,
            control.control_options.min,
            control.control_options.max,
          )
        ) {
          setInputFocus();
          setErrorMessage(trans('enteredValueConstraints'));

          return;
        }
      }

      if (!checkIfSameValues(value, currentValue)) {
        setErrorMessage(null);
        if (control.mandatory && !value.trim()) {
          setErrorMessage(trans('mandatoryValue'));
        }

        return;
      }

      setErrorMessage(null);

      if (control.mandatory && !value.trim()) {
        setErrorMessage(trans('mandatoryValue'));
      }

      setCurrentValue(value);
      send(
        currentRoute?.props?.apiSaveControlRouteName,
        {},
        {
          file_id: fileId,
          elm_id: control.control_id,
          elm_val: value,
          control_family: control.control_family,
        },
      );
    },
    [
      send,
      fileId,
      control.control_id,
      control.control_family,
      currentRoute,
      control.control_regex,
      control.control_regex_msg,
      currentValue,
      setCurrentValue,
      control.mandatory,
      control.control_options,
      setInputFocus,
      trans,
    ],
  );

  useEffect(() => {
    if (control.mandatory && control.editable && !currentValue) {
      setErrorMessage(trans('mandatoryValue'));
    }
    if (!control.mandatory) {
      setErrorMessage(null);
    }
  }, [control.mandatory, control.editable, currentValue, trans]);

  useEffect(() => {
    if (error) {
      setErrorMessage(trans('errorRecording'));
    }
  }, [error, trans]);

  useEffect(() => {
    if (!isRejected) {
      setIsRejected(false);
    }
  }, [isRejected]);

  return (
    <Grid item xs={6}>
      <DateControlStyled>
        <ControlLabel control={control} />
        <InputBase
          inputRef={inputRef}
          placeholder={
            control.editable
              ? control.control_title
              : control.control_value
              ? control.control_value
              : ''
          }
          disabled={!control.editable}
          color={control.editable ? 'text' : 'disabled'}
          defaultValue={currentValue ? currentValue : ''}
          onBlur={(e) => saveValue(e.currentTarget.value)}
          type={'date'}
          // InputProps={{ inputProps: { min: tomorrow_min_date } }}
          // InputProps={{ inputProps: { min: '2022-05-04', max: '2022-05-22' } }}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ControlFooter control={control} />
      </DateControlStyled>
      {control.useRejection && control.control_rejectable && (
        <RejectControl
          isRejected={isRejected}
          setIsRejected={setIsRejected}
          controlId={control.control_id}
          context={context}
          controlRejectable={control.useRejection}
        />
      )}
    </Grid>
  );
};
