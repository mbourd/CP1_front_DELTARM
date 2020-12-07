import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormError, FormLabel, Select } from 'Shared/components';
import { SelectListControlStyled } from './SelectListControl.style';
import { storage, useApi, useRouter } from 'Services';

interface IProps {
  control: IControl;
  fileId: string;
}

export const SelectListControl: React.FC<IProps> = ({ control, fileId }): React.ReactElement => {
  const { send } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentRoute } = useRouter();

  const value = storage.getData<string>('edit.control.' + control.id + '.value');
  // const first = Object.keys(control.answerChoices || {})[0];

  const selectedValue: Record<string, true> = { [value || control.value || '']: true };

  // if (control.mandatory) {
  //   selectedValue = { [value || first]: true };
  // }

  const saveValue = useCallback(
    (value: string) => {
      setErrorMessage(null);
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
      <SelectListControlStyled>
        <FormLabel>{control.title}</FormLabel>
        <Select
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
        >
          {'Sélectionez une valeur'}
        </Select>
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
      </SelectListControlStyled>
    </Grid>
  );
};
