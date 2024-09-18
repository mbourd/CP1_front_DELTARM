import React, { SetStateAction, useCallback, useEffect, useState } from 'react';
import { TextControlStyled } from './TextControl.style';
import { Grid } from '@mui/material';
import { IApiControl, IChapter } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { useApi, useRouter } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { checkIfSameValues } from '../../../../../../Packages/Helpers/src/checkIfSameValues';
import { updateFormState } from '../../../../../../Packages/Helpers/src/updateFormState';
import { RejectControl } from '../RejectByPointControl/RejectControl';

import { useTrans } from '../../../../../../Services';

interface IProps {
  control: IApiControl;
  fileId: string;
  formState: IChapter[];
  setFormState: React.Dispatch<SetStateAction<IChapter[]>>;
  context: 'edit' | 'validate';
  get_value_response?: any;
}

export const TextControl: React.FC<React.PropsWithChildren<IProps>> = ({
  control,
  fileId,
  formState,
  setFormState,
  context,
  // ...rest
}): React.ReactElement => {
  const [trans] = useTrans('Edit');
  const { send, error } = useApi<void>();
  const [canSendApi, setCanSendApi] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(
    control.mandatory && control.editable && !control.control_value
      ? trans('mandatoryValue')
      : '',
  );
  const [currentValue, setCurrentValue] = useState(control.control_value);
  const [isRejected, setIsRejected] = useState(
    control.control_rejectable?.is_rejected
      ? control.control_rejectable.is_rejected
      : false,
  );

  const { currentRoute } = useRouter();
  const [apiRouteName, setApiRouteName] = useState<string>(
    currentRoute?.props?.apiSaveControlRouteName,
  );

  useEffect(() => {
    setCurrentValue(control.control_value);
  }, [control.control_value]);

  useEffect(() => {
    updateFormState(formState, control.control_id, currentValue, setFormState);
  }, [formState, control.control_id, currentValue, setFormState]);

  const saveValue = useCallback(
    (value: string) => {
      if (control.control_regex && value) {
        const regexControl = new RegExp(control.control_regex, 'i');
        if (!value.match(regexControl)) {
          setErrorMessage(control.control_regex_msg);

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
      const q: Record<string, string> = {
        file_id: fileId,
        elm_id: control.control_id,
        control_family: control.control_family,
        elm_val: value,
      };

      if (canSendApi) send(apiRouteName, {}, q);
    },
    [
      send,
      fileId,
      control.control_id,
      control.control_family,
      control.control_regex,
      control.control_regex_msg,
      currentValue,
      setCurrentValue,
      control.mandatory,
      trans,
      canSendApi,
      apiRouteName,
    ],
  );

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

  // expose for Cypress API
  if (
    window?.['Cypress'] ||
    window?.['__STORYBOOK_STORY_STORE__']
    // @ts-ignore
    //rest?.exposeForTestingPurpose //better way
  ) {
    window['Features_Edit_Control_TextControl'] = {
      setErrorMessage,
      setCanSendApi,
      setApiRouteName,
    };
  }

  return (
    <Grid item xs={6}>
      <TextControlStyled>
        <ControlLabel control={control} />
        <InputBase
          placeholder={
            control.editable
              ? control.control_title
              : currentValue
                ? currentValue
                : ''
          }
          disabled={!control.editable}
          color={control.editable ? 'text' : 'disabled'}
          defaultValue={currentValue ? currentValue : ''}
          onBlur={(e) => saveValue(e.currentTarget.value)}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ControlFooter control={control} />
      </TextControlStyled>
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
