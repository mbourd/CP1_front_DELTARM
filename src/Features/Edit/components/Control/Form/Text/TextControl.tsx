import React, { useCallback, useEffect, useState } from 'react';
import { TextControlStyled } from './TextControl.style';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormError, FormLabel, InputBase } from 'Shared/components';
import { storage, useApi, useRouter } from 'Services';

interface IProps {
  control: IControl;
  fileId: string;
}

export const TextControl: React.FC<IProps> = ({ control, fileId }): React.ReactElement => {
  const { send } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentRoute } = useRouter();

  const value = storage.getData<string>('edit.control.' + control.id + '.value');

  const saveValue = useCallback(
    (value: string) => {
      storage.setData('edit.control.' + control.id + '.value', value);
      send(currentRoute?.props?.apiSaveControlRouteName, {}, { file_id: fileId, elm_id: control.id, elm_val: value });
    },
    [send, fileId, control.id, currentRoute],
  );

  useEffect(() => {
    const val = storage.getData<string>('edit.control.' + control.id + '.value');

    if (control.mandatory && control.editable && !val && !control.value) {
      setErrorMessage('Valeur obligatoire');
    }
  }, [control.id, control.mandatory, control.value, control.editable]);

  return (
    <Grid item xs={6}>
      <TextControlStyled>
        <FormLabel>{control.title}</FormLabel>
        <InputBase
          placeholder={control.editable ? control.title : control.value}
          disabled={!control.editable}
          color={control.editable ? 'text' : 'disabled'}
          defaultValue={value || control.value}
          onChange={(e) => saveValue(e.currentTarget.value)}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
      </TextControlStyled>
    </Grid>
  );
};
