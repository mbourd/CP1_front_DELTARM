import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { FinancialControlStyled } from './FinancialControl.style';
import { EuroIcon } from 'Styles';
import { useApi, useRouter } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { checkIfSameValues } from '../../../../../../Packages/Helpers/src/checkIfSameValues';

interface IProps {
  control: IControl;
  fileId: string;
}

export const FinancialControl: React.FC<IProps> = ({
  control,
  fileId,
}): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState(control.value);
  const { currentRoute } = useRouter();

  const saveValue = useCallback(
    (value: string) => {
      if (control.mandatory) {
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
    if (control.mandatory && control.editable && !currentValue) {
      setErrorMessage('Valeur obligatoire');
    }
  }, [control.mandatory, control.editable, currentValue]);

  useEffect(() => {
    if (error) {
      setErrorMessage("Une erreur s'est produite durant l'enregistrement");
    }
  }, [error]);

  const controlValue = control.value
    ? parseInt(control.value)?.toLocaleString()
    : control.value;

  return (
    <Grid item xs={6}>
      <FinancialControlStyled>
        <ControlLabel control={control} />
        <InputBase
          placeholder={control.editable ? control.title : control.value}
          disabled={!control.editable}
          color={control.editable ? 'text' : 'disabled'}
          defaultValue={currentValue || controlValue}
          icon={<EuroIcon />}
          onBlur={(e) => saveValue(e.currentTarget.value)}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ControlFooter control={control} />
      </FinancialControlStyled>
    </Grid>
  );
};
