import React, { useCallback, useEffect, useState } from 'react';
import { TextControlStyled } from './TextControl.style';
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

export const TextControl: React.FC<IProps> = ({ control, fileId}): React.ReactElement => {
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

      const regexControl = new RegExp(control.regex, 'i');
      if (control.regex && !value.match(regexControl)) {
        setErrorMessage(control.regexMsg);

        return;
      }

      setErrorMessage(null);
      storage.setData('edit.control.' + control.id + '.value', value);
      const q: Record<string, string> = { file_id: fileId, elm_id: control.id, control_family: control.family };

      if (value) {
        q['elm_val'] = value;
      }

      send(currentRoute?.props?.apiSaveControlRouteName, {}, q);
    },
    [
      send,
      fileId,
      control.id,
      currentRoute,
      control.mandatory,
      control.family,
      control.regex,
      control.regexMsg,
    ],
  );

  useEffect(() => {
    const val = storage.getData<string>('edit.control.' + control.id + '.value') || control.value;

    if (control.mandatory && control.editable && !val) {
      setErrorMessage('Valeur obligatoire');
    }

    if (control.editable && val && control.regex && !val.match(new RegExp(control.regex, 'i'))) {
      setErrorMessage(control.regexMsg || '');
    }
  }, [control.id, control.mandatory, control.value, control.editable, control.regex, control.regexMsg]);

  useEffect(() => {
    if (error) {
      setErrorMessage("Une erreur s'est produite durant l'enregistrement");
    }
  }, [error]);

  return (
    <Grid item xs={6}>
      <TextControlStyled>
        <ControlLabel control={control} />
        <InputBase
          placeholder={control.editable ? control.title : control.value}
          disabled={!control.editable}
          color={control.editable ? 'text' : 'disabled'}
          defaultValue={value || control.value}
          onBlur={(e) => saveValue(e.currentTarget.value)}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ControlFooter control={control} />
      </TextControlStyled>
    </Grid>
  );
};
