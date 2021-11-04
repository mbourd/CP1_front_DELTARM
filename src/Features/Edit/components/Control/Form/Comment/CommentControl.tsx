import React, { useCallback, useEffect, useState } from 'react';
import { CommentControlStyled } from './CommentControl.style';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { useApi, useRouter } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { checkIfSameValues } from '../../../../../../Packages/Helpers/src/checkIfSameValues';

interface IProps {
  control: IControl;
  fileId: string;
}

export const CommentControl: React.FC<IProps> = ({ control, fileId }): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState(control.value);
  const { currentRoute } = useRouter();

  const saveValue = useCallback(
    (value: string) => {
      if (control.mandatory && !value.trim()) {
        setErrorMessage('Valeur obligatoire');

        return;
      }

      if (!checkIfSameValues(value, currentValue)) {
        return;
      }

      const regexControl = new RegExp(control.regex, 'i');
      if (control.regex && !value.match(regexControl) && value) {
        setErrorMessage(control.regexMsg);

        return;
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
      currentRoute,
      control.mandatory,
      control.family,
      control.regex,
      control.regexMsg,
      currentValue,
      setCurrentValue,
    ],
  );

  useEffect(() => {
    if (control.mandatory && control.editable && !currentValue && !control.value) {
      setErrorMessage('Valeur obligatoire');
    }
  }, [control.id, control.mandatory, control.value, control.editable, currentValue]);

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
          defaultValue={currentValue || control.value}
          onBlur={(e) => saveValue(e.currentTarget.value)}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ControlFooter control={control} />
      </CommentControlStyled>
    </Grid>
  );
};
