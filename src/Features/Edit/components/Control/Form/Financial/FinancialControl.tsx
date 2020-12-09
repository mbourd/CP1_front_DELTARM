import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { FinancialControlStyled } from './FinancialControl.style';
import { EuroIcon } from 'Styles';
import { storage, useApi, useRouter } from 'Services';
import { ControlLabel } from '../ControlLabel';

interface IProps {
  control: IControl;
  fileId: string;
}

export const FinancialControl: React.FC<IProps> = ({ control, fileId }): React.ReactElement => {
  const { send } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentRoute } = useRouter();
  const value = storage.getData<string>('edit.control.' + control.id + '.value');

  const saveValue = useCallback(
    (value: string) => {
      if (control.mandatory && !/^[1-9][0-9]*$/.test(value)) {
        setErrorMessage('Saisissez un nombre');

        return;
      }

      setErrorMessage(null);
      storage.setData('edit.control.' + control.id + '.value', value);
      send(currentRoute?.props?.apiSaveControlRouteName, {}, { file_id: fileId, elm_id: control.id, elm_val: value });
    },
    [send, fileId, control.id, control.mandatory, currentRoute],
  );

  useEffect(() => {
    const val = storage.getData<string>('edit.control.' + control.id + '.value');

    if (control.mandatory && control.editable && !val && !control.value) {
      setErrorMessage('Valeur obligatoire');
    }
  }, [control.id, control.mandatory, control.value, control.editable]);

  return (
    <Grid item xs={6}>
      <FinancialControlStyled>
        <ControlLabel control={control} />
        <InputBase
          placeholder={control.editable ? control.title : control.value}
          disabled={!control.editable}
          color={control.editable ? 'text' : 'disabled'}
          defaultValue={value || control.value}
          icon={<EuroIcon />}
          onBlur={(e) => saveValue(e.currentTarget.value)}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
      </FinancialControlStyled>
    </Grid>
  );
};
