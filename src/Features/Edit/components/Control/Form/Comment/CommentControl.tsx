import React, { useCallback, useEffect, useState } from 'react';
import { CommentControlStyled } from './CommentControl.style';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { storage, useApi, useRouter } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';

interface IProps {
  control: IControl;
  fileId: string;
}

export const CommentControl: React.FC<IProps> = ({ control, fileId }): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentRoute } = useRouter();

  const value = storage.getData<string>('edit.control.' + control.id + '.value');

  const saveValue = useCallback(
    (value: string) => {
      if (control.mandatory && !value.trim()) {
        setErrorMessage('Valeur obligatoire');

        return;
      }

      setErrorMessage(null);

      storage.setData('edit.control.' + control.id + '.value', value);
      send(currentRoute?.props?.apiSaveControlRouteName, {}, { file_id: fileId, elm_id: control.id, elm_val: value });
    },
    [send, fileId, control.id, currentRoute, control.mandatory],
  );

  useEffect(() => {
    const val = storage.getData<string>('edit.control.' + control.id + '.value');

    if (control.mandatory && control.editable && !val && !control.value) {
      setErrorMessage('Valeur obligatoire');
    }
  }, [control.id, control.mandatory, control.value, control.editable]);

  useEffect(() => {
    if (error) {
      setErrorMessage("Une erreur s'est produite durant l'enregistrement");
    }
  }, [error]);

  return (
    <Grid item xs={6}>
      <CommentControlStyled>
        <ControlLabel control={control} />
        <InputBase
          multiline
          multilineRows={10}
          placeholder={control.editable ? control.title : control.value}
          disabled={!control.editable}
          color={control.editable ? 'text' : 'disabled'}
          defaultValue={value || control.value}
          onBlur={(e) => saveValue(e.currentTarget.value)}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ControlFooter control={control} />
      </CommentControlStyled>
    </Grid>
  );
};
