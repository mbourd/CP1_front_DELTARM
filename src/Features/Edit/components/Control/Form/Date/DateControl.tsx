import React, { SetStateAction, useCallback, useEffect, useState } from 'react';
import { DateControlStyled } from './DateControl.style';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { useApi, useRouter } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { checkIfSameValues } from '../../../../../../Packages/Helpers/src/checkIfSameValues';
import { updateFormState } from '../../../../../../Packages/Helpers/src/updateFormState';

interface IProps {
  control: IControl;
  fileId: string;
  formState: IControl[];
  setFormState: React.Dispatch<SetStateAction<IControl[]>>;
}

export const DateControl: React.FC<IProps> = ({
  control,
  fileId,
  formState,
  setFormState,
}): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState(control.value);
  const { currentRoute } = useRouter();

  useEffect(() => {
    updateFormState(formState, control.id, currentValue, setFormState);
  }, [formState, control.id, currentValue, setFormState]);

  const saveValue = useCallback(
    (value: string) => {
      if (control.regex && !value.match(control.regex) && value) {
        setErrorMessage(control.regexMsg);

        return;
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
          elm_id: control.id,
          elm_val: value,
          control_family: control.family,
        },
      );
    },
    [
      send,
      fileId,
      control.id,
      control.family,
      currentRoute,
      control.regex,
      control.regexMsg,
      currentValue,
      setCurrentValue,
      control.mandatory,
    ],
  );

  useEffect(() => {
    if (control.mandatory && control.editable && !currentValue) {
      setErrorMessage('Valeur obligatoire');
    }
  }, [control.mandatory, control.editable, currentValue]);

  useEffect(() => {
    if (error) {
      setErrorMessage("Une erreur s'est produite durant l'enregistrement");
    }
  }, [error]);

  return (
    <Grid item xs={6}>
      <DateControlStyled>
        <ControlLabel control={control} />
        <InputBase
          placeholder={control.editable ? control.title : control.value}
          disabled={!control.editable}
          color={control.editable ? 'text' : 'disabled'}
          defaultValue={currentValue || control.value}
          onBlur={(e) => saveValue(e.currentTarget.value)}
          type={'date'}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ControlFooter control={control} />
      </DateControlStyled>
    </Grid>
  );
};
