import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormError, Select } from 'Shared/components';
import { storage, useApi, useRouter } from 'Services';
import { SelectListControlStyled } from './SelectListControl.style';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';

interface IProps {
  control: IControl;
  fileId: string;
}

export const SelectListControl: React.FC<IProps> = ({ control, fileId }): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentRoute } = useRouter();

  const value = storage.getData<string>('edit.control.' + control.id + '.value');
  const selectedValue: Record<string, true> = { [value || control.value || '']: true };

  const saveValue = useCallback(
    (value: string) => {
      if (control.regex && !value.match(control.regex)) {
        setErrorMessage("Le format attendu n'est pas valide");

        return;
      }
      setErrorMessage(null);
      storage.setData('edit.control.' + control.id + '.value', value);
      send(
        currentRoute?.props?.apiSaveControlRouteName,
        {},
        { file_id: fileId, elm_id: control.id, elm_val: value, control_family: control.family },
      );
    },
    [send, fileId, control.id, control.family, currentRoute, control.regex],
  );

  useEffect(() => {
    const val = storage.getData<string>('edit.control.' + control.id + '.value');

    if (control.mandatory && control.editable && !val && !control.value) {
      setErrorMessage('Valeur obligatoire');
    }
  }, [control.id, control.mandatory, control.value, control.editable]);

  useEffect(() => {
    if (error) {
      setErrorMessage("Une erreur s'est produite, veuillez re-sélectionner une valeur");
    }
  }, [error]);

  return (
    <Grid item xs={6}>
      <SelectListControlStyled className={'control-container'}>
        <ControlLabel control={control} />
        <Select
          closeOnSelect
          name={'selectList' + control.id}
          data={control.answerChoices || {}}
          selectedValues={selectedValue}
          labelColor={control.editable ? 'text' : 'disabled'}
          labelBdc={control.editable ? 'text' : 'disabled'}
          multiple={false}
          disabled={!control.editable}
          onChange={(selectedValues) => {
            const first = Object.keys(selectedValues)[0];
            saveValue('' + first);
          }}
          error={!!error}
        >
          {'Sélectionner une valeur'}
        </Select>
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ControlFooter control={control} />
      </SelectListControlStyled>
    </Grid>
  );
};
