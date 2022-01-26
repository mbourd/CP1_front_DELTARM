import React, { SetStateAction, useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IApiControl } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { IntegerControlStyled } from './IntegerControl.style';
import { useApi, useRouter } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { checkIfSameValues } from '../../../../../../Packages/Helpers/src/checkIfSameValues';
import { updateFormState } from '../../../../../../Packages/Helpers/src/updateFormState';
import { between } from '../../../../../../Packages/Helpers/src/between';

interface IProps {
  control: IApiControl;
  fileId: string;
  formState: IApiControl[];
  setFormState: React.Dispatch<SetStateAction<IApiControl[]>>;
}

export const IntegerControl: React.FC<IProps> = ({
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
      if (
        control.control_regex &&
        !value.match(control.control_regex) &&
        value
      ) {
        setErrorMessage(control.control_regex_msg);

        return;
      }

      if (control.control_options) {
        if (
          between(
            value,
            control.control_options.min,
            control.control_options.max,
          )
        ) {
          setErrorMessage(null);
        }
        if (
          !between(
            value,
            control.control_options.min,
            control.control_options.max,
          )
        ) {
          setErrorMessage(
            'La valeur saisie ne respecte pas les contraintes définies',
          );

          return;
        }
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
      control.control_family,
      currentRoute,
      control.control_regex,
      control.control_regex_msg,
      currentValue,
      setCurrentValue,
      control.control_mandatory,
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

  return (
    <Grid item xs={6}>
      <IntegerControlStyled>
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
          unit={control.control_options?.unit}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ControlFooter control={control} />
      </IntegerControlStyled>
    </Grid>
  );
};
