import React, { SetStateAction, useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IApiControl, IChapter } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { FinancialControlStyled } from './FinancialControl.style';
import { EuroIcon } from 'Styles';
import { useApi, useRouter } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { checkIfSameValues } from '../../../../../../Packages/Helpers/src/checkIfSameValues';
import { updateFormState } from '../../../../../../Packages/Helpers/src/updateFormState';
import { minMax } from '../../../../../../Packages/Helpers/src/minMax';
import useFocus from '../../../../../../Packages/Helpers/src/useFocus';
import { RejectControl } from '../RejectByPointControl/RejectControl';
import { numberWithSpaces } from '../../../../../../Packages/Helpers/src/numberWithSpaces';

interface IProps {
  control: IApiControl;
  fileId: string;
  formState: IChapter[];
  setFormState: React.Dispatch<SetStateAction<IChapter[]>>;
  context: 'edit' | 'validate';
}

export const FinancialControl: React.FC<IProps> = ({
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
  const [inputRef, setInputFocus] = useFocus();
  const { currentRoute } = useRouter();

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
        (control.control_options?.min_value ||
          control.control_options?.max_value) &&
        value.trim()
      ) {
        if (
          minMax(
            value,
            control.control_options.min_value,
            control.control_options.max_value,
          )
        ) {
          setErrorMessage(null);
        }
        if (
          !minMax(
            value,
            control.control_options.min_value,
            control.control_options.max_value,
          )
        ) {
          setInputFocus();
          setErrorMessage(
            'La valeur saisie ne respecte pas les contraintes définies',
          );

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
      control.mandatory,
      control.control_family,
      currentRoute,
      control.control_regex,
      control.control_regex_msg,
      currentValue,
      setCurrentValue,
      control.control_options,
      setInputFocus,
    ],
  );

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
    console.log(control);
  }, []);

  useEffect(() => {
    if (!isRejected) {
      setIsRejected(false);
    }
  }, [isRejected]);

  const controlValue = currentValue
    ? parseFloat(currentValue)?.toFixed(
        control.control_options?.precision
          ? control.control_options?.precision
          : control.control_options?.precision === 0
          ? control.control_options.precision
          : 2,
      )
    : currentValue;

  return (
    <Grid item xs={6}>
      <FinancialControlStyled>
        <ControlLabel control={control} />
        <InputBase
          inputRef={inputRef}
          placeholder={
            control.editable
              ? control.control_title
              : currentValue
              ? currentValue
              : ''
          }
          disabled={!control.editable}
          color={control.editable ? 'text' : 'disabled'}
          defaultValue={controlValue ? numberWithSpaces(controlValue) : ''}
          icon={
            control?.control_options?.currency_symbol ? (
              control?.control_options
            ) : (
              <EuroIcon />
            )
          }
          onBlur={(e) => saveValue(e.currentTarget.value)}
          unit={control.control_options?.unit}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ControlFooter control={control} />
      </FinancialControlStyled>
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
