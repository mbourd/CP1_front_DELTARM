import React, { SetStateAction, useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IApiControl } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { FinancialControlStyled } from './FinancialControl.style';
import { EuroIcon } from 'Styles';
import { useApi, useRouter } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { checkIfSameValues } from '../../../../../../Packages/Helpers/src/checkIfSameValues';
import { updateFormState } from '../../../../../../Packages/Helpers/src/updateFormState';

interface IProps {
  control: IApiControl;
  fileId: string;
  formState: IApiControl[];
  setFormState: React.Dispatch<SetStateAction<IApiControl[]>>;
}

export const FinancialControl: React.FC<IProps> = ({
  control,
  fileId,
  formState,
  setFormState,
}): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState(control.control_value);
  const { currentRoute } = useRouter();

  useEffect(() => {
    setCurrentValue(control.control_value);
  }, [control.control_value]);

  useEffect(() => {
    updateFormState(formState, control.control_id, currentValue, setFormState);
  }, [formState, control.control_id, currentValue, setFormState]);

  const saveValue = useCallback(
    (value: string) => {
      if (control.control_mandatory) {
        try {
          const v = parseInt(value, 10);

          // specific rules from BPI : API should send args for min/max values
          if (v < 1000) {
            setErrorMessage('Le nombre doit être supérieur ou égal à 1000');

            return;
          }
        } catch {
          setErrorMessage('Valeur obligatoire');

          return;
        }
      }

      if (
        control.control_regex &&
        !value.match(control.control_regex) &&
        value
      ) {
        setErrorMessage(control.control_regex_msg);

        return;
      }

      if (!checkIfSameValues(value, currentValue)) {
        setErrorMessage(null);
        if (control.control_mandatory && !value.trim()) {
          setErrorMessage('Valeur obligatoire');
        }

        return;
      }

      setErrorMessage(null);

      if (control.control_mandatory && !value.trim()) {
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
      control.control_mandatory,
      control.control_family,
      currentRoute,
      control.control_regex,
      control.control_regex_msg,
      currentValue,
      setCurrentValue,
    ],
  );

  useEffect(() => {
    if (
      control.control_mandatory &&
      control.control_editable &&
      !currentValue
    ) {
      setErrorMessage('Valeur obligatoire');
    }
  }, [control.control_mandatory, control.control_editable, currentValue]);

  useEffect(() => {
    if (error) {
      setErrorMessage("Une erreur s'est produite durant l'enregistrement");
    }
  }, [error]);

  const controlValue = currentValue
    ? parseInt(currentValue)?.toLocaleString()
    : currentValue;

  return (
    <Grid item xs={6}>
      <FinancialControlStyled>
        <ControlLabel control={control} />
        <InputBase
          placeholder={
            control.control_editable
              ? control.control_title
              : currentValue
              ? currentValue
              : ''
          }
          disabled={!control.control_editable}
          color={control.control_editable ? 'text' : 'disabled'}
          defaultValue={controlValue ? controlValue : ''}
          icon={<EuroIcon />}
          onBlur={(e) => saveValue(e.currentTarget.value)}
          unit={control.control_options?.unit}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ControlFooter control={control} />
      </FinancialControlStyled>
    </Grid>
  );
};
