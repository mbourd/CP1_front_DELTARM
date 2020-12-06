import React, { useCallback } from 'react';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormLabel, Select } from 'Shared/components';
import { SelectListControlStyled } from './SelectListControl.style';
import { useApi } from 'Services';

interface IProps {
  control: IControl;
  fileId: string;
}

export const SelectListControl: React.FC<IProps> = ({ control, fileId }): React.ReactElement => {
  const { send } = useApi<void>();

  const saveValue = useCallback(
    (value: string) => {
      send('setControlValue', {}, { file_id: fileId, elm_id: control.id, elm_val: value });
    },
    [send, fileId, control.id],
  );

  return (
    <Grid item xs={6}>
      <SelectListControlStyled>
        <FormLabel>{control.title}</FormLabel>
        <Select
          name={'selectList' + control.id}
          data={control.answerChoices || {}}
          labelColor={control.editable ? 'text' : 'disabled'}
          labelBdc={control.editable ? 'text' : 'disabled'}
          multiple={false}
          disabled={!control.editable}
          onChange={(selectedValues) => {
            const first = Object.keys(selectedValues)[0];
            saveValue('' + first);
          }}
        >
          {control.title}
        </Select>
      </SelectListControlStyled>
    </Grid>
  );
};
