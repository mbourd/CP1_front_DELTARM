import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { PercentControlStyled } from './PercentControl.style';
import { useApi, useRouter } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { checkIfSameValues } from '../../../../../../Packages/Helpers/src/checkIfSameValues';

interface IProps {
  control: IControl;
  fileId: string;
}

export const PercentControl: React.FC<IProps> = ({ control, fileId }): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState(control.value);
  const { currentRoute } = useRouter();

  const saveValue = useCallback(
    (value: string) => {
      if (!checkIfSameValues(value, currentValue)) {
        return;
      }

      if (control.regex && !value.match(control.regex) && value) {
        setErrorMessage(control.regexMsg);

        return;
      }

      if (control.mandatory) {
        try {
          const x = parseFloat(value);
          if (isNaN(x) || x < 0 || x > 100) {
            setErrorMessage('Saisissez un pourcentage');

            return;
          }
        } catch {
          setErrorMessage('Saisissez un pourcentage');

          return;
        }
      }

      setErrorMessage(null);
      setCurrentValue(value);
      send(
        currentRoute?.props?.apiSaveControlRouteName,
        {},
        { file_id: fileId, elm_id: control.id, elm_val: value, control_family: control.family },
      );
    },
    [
      send,
      fileId,
      control.id,
      control.mandatory,
      control.family,
      currentRoute,
      control.regex,
      control.regexMsg,
      currentValue,
      setCurrentValue,
    ],
  );

  useEffect(() => {
    if (control.mandatory && control.editable && !currentValue && !control.value) {
      setErrorMessage('Saisissez un pourcentage');
    }
  }, [control.id, control.mandatory, control.value, control.editable, currentValue]);

  useEffect(() => {
    if (error) {
      setErrorMessage("Une erreur s'est produite durant l'enregistrement");
    }
  }, [error]);

  return (
    <Grid item xs={6}>
      <PercentControlStyled>
        <ControlLabel control={control} />
        <InputBase
          placeholder={control.editable ? control.title : control.value}
          disabled={!control.editable}
          color={control.editable ? 'text' : 'disabled'}
          defaultValue={currentValue || control.value}
          onBlur={(e) => saveValue(e.currentTarget.value)}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ControlFooter control={control} />
      </PercentControlStyled>
    </Grid>
  );
};
