import React, { SetStateAction, useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IApiControl, IChapter } from 'Features/Edit/types';
import { FormError } from 'Shared/components';
import { useApi, useRouter } from 'Services';
import { CheckboxControlStyled } from './CheckboxControl.style';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { Compliance } from '../Compliance/Compliance';
import { CheckboxWrapper } from '../../../../../../Packages/Design/components/Checkbox/CheckboxWrapper';
import { updateFormState } from '../../../../../../Packages/Helpers/src/updateFormState';
import { RejectControl } from '../RejectByPointControl/RejectControl';
import { useTrans } from '../../../../../../Services';

interface IProps {
  control: IApiControl;
  fileId: string;
  multiple: boolean;
  formState: IChapter[];
  setFormState: React.Dispatch<SetStateAction<IChapter[]>>;
  context: 'edit' | 'validate';
}

export const CheckboxControl: React.FC<IProps> = ({
  control,
  fileId,
  multiple,
  formState,
  setFormState,
  context,
}): React.ReactElement => {
  const [trans] = useTrans('Edit');
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState(control.control_value);
  const { currentRoute } = useRouter();
  const [choiceIsKo, setChoiceIsKo] = useState(
    control.compliance?.compliance_checkbox_resolved
      ? control.compliance.compliance_checkbox_resolved
      : false,
  );
  const [isResolved, setIsResolved] = useState(
    control.compliance?.compliance_resolved
      ? control.compliance.compliance_resolved
      : false,
  );
  const [isRejected, setIsRejected] = useState(
    control.control_rejectable?.is_rejected
      ? control.control_rejectable.is_rejected
      : false,
  );

  const selectedValue: Record<string, true> = {
    [currentValue || control.control_value || '']: true,
  };

  useEffect(() => {
    setCurrentValue(control.control_value);
  }, [control.control_value]);

  useEffect(() => {
    updateFormState(formState, control.control_id, currentValue, setFormState);
  }, [formState, control.control_id, currentValue, setFormState]);

  useEffect(() => {
    if (!choiceIsKo) {
      setIsResolved(false);
    }
  }, [choiceIsKo]);

  const saveValue = useCallback(
    (value: string) => {
      if (control.control_regex && !value.match(control.control_regex)) {
        setErrorMessage(trans('expectedFormat'));

        return;
      }
      setErrorMessage(null);
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
  }, [
    control.control_id,
    control.mandatory,
    currentValue,
    control.editable,
    trans,
  ]);

  useEffect(() => {
    if (!isRejected) {
      setIsRejected(false);
    }
  }, [isRejected]);

  useEffect(() => {
    if (error) {
      setErrorMessage(trans('errorReselect'));
    }
  }, [error, trans]);

  return (
    <Grid item xs={6}>
      <CheckboxControlStyled className={'control-container'}>
        <ControlLabel control={control} />
        <CheckboxWrapper
          name={'checkbox' + control.control_id}
          data={control.answerChoices || {}}
          selectedValues={selectedValue}
          multiple={multiple}
          onChange={(selectedValues) => {
            const value =
              Object.keys(selectedValues).length >= 2
                ? Object.keys(selectedValues).join(';')
                : Object.keys(selectedValues)[0];
            const val = value ? value : '';
            saveValue('' + val);
          }}
          choiceIsKo={choiceIsKo}
          setChoiceIsKo={setChoiceIsKo}
          disabled={!control.editable}
          error={!!error}
        />
        {errorMessage ? (
          <FormError style={{ display: 'block' }}>{errorMessage}</FormError>
        ) : null}
        <ControlFooter control={control} />
      </CheckboxControlStyled>
      {control.useCompliance && control.compliance && (
        <Compliance
          label={control.compliance.compliance_lib}
          checked={isResolved}
          setIsResolved={setIsResolved}
          controlId={control.control_id}
          fileId={fileId}
          choiceIsKo={choiceIsKo}
          compliance={control.useCompliance}
        />
      )}
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
