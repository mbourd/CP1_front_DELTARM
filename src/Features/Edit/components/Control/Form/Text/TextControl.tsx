import React, { useCallback, useEffect, useState } from 'react';
import { TextControlStyled } from './TextControl.style';
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

export const TextControl: React.FC<IProps> = ({ control, fileId }): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState(control.value);
  const { currentRoute } = useRouter();
  // console.log(control.conditional);
  // // console.log(control.isConditional);
  // console.log(control.conditionalInitState);

  const saveValue = useCallback(
    (value: string) => {
      const regexControl = new RegExp(control.regex, 'i');
      if (control.regex && !value.match(regexControl) && value) {
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
      const q: Record<string, string> = {
        file_id: fileId,
        elm_id: control.id,
        control_family: control.family,
        elm_val: value,
      };

      send(currentRoute?.props?.apiSaveControlRouteName, {}, q);
    },
    [
      send,
      fileId,
      control.id,
      currentRoute,
      control.family,
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
      // Todo instead of set a error message put a star in side of label
    }
  }, [control.mandatory, control.editable, currentValue]);

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
          defaultValue={currentValue || control.value}
          onBlur={(e) => saveValue(e.currentTarget.value)}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ControlFooter control={control} />
      </TextControlStyled>
    </Grid>
  );
};
