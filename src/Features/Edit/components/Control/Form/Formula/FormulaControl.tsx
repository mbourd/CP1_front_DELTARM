import React, { SetStateAction, useCallback, useEffect, useState } from 'react';
import { FormulaControlStyled } from './FormulaControl.style';
import { Grid } from '@material-ui/core';
import { IApiControl, IChapter } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { useApi, useRouter } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { checkIfSameValues } from '../../../../../../Packages/Helpers/src/checkIfSameValues';
import { updateFormState } from '../../../../../../Packages/Helpers/src/updateFormState';
import { RejectControl } from '../RejectByPointControl/RejectControl';

interface IProps {
  control: IApiControl;
  fileId: string;
  formState: IChapter[];
  setFormState: React.Dispatch<SetStateAction<IChapter[]>>;
  context: 'edit' | 'validate';
}

export const FormulaControl: React.FC<IProps> = ({
  control,
  fileId,
  formState,
  setFormState,
  context,
}): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState(control.control_value);
  const [isRejected, setIsRejected] = useState(
    control.control_rejectable?.is_rejected
      ? control.control_rejectable.is_rejected
      : false,
  );
  const { currentRoute } = useRouter();

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
          setErrorMessage('Valeur obligatoire');
        }

        return;
      }

      setErrorMessage(null);

      if (control.mandatory && !value.trim()) {
        setErrorMessage('Valeur obligatoire');
      }

      setCurrentValue(value);
      const q: Record<string, string> = {
        file_id: fileId,
        elm_id: control.control_id,
        control_family: control.control_family,
        elm_val: value,
      };

      send(currentRoute?.props?.apiSaveControlRouteName, {}, q);
    },
    [
      send,
      fileId,
      control.control_id,
      currentRoute,
      control.control_family,
      control.control_regex,
      control.control_regex_msg,
      currentValue,
      setCurrentValue,
      control.mandatory,
    ],
  );

  useEffect(() => {
    if (control.calculatedValue) {
      saveValue(control.calculatedValue);
    }
  }, [control.calculatedValue, saveValue]);

  useEffect(() => {
    if (control.mandatory && control.editable && !currentValue) {
      setErrorMessage('Valeur obligatoire');
    }
    if (!control.mandatory) {
      setErrorMessage(null);
    }
  }, [control.mandatory, control.editable, currentValue]);

  useEffect(() => {
    if (error) {
      setErrorMessage("Une erreur s'est produite durant l'enregistrement");
    }
  }, [error]);

  useEffect(() => {
    if (!isRejected) {
      setIsRejected(false);
    }
  }, [isRejected]);

  const controlValue =
    currentValue && !isNaN(Number(currentValue))
      ? parseFloat(currentValue)?.toFixed(
          control.control_options?.precision
            ? control.control_options?.precision
            : 2,
        )
      : currentValue;

  return (
    <Grid item xs={6}>
      <FormulaControlStyled>
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
          value={controlValue ? controlValue : ''}
          onBlur={(e) => saveValue(e.currentTarget.value)}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ControlFooter control={control} />
      </FormulaControlStyled>
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
