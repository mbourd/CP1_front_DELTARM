import React, { useCallback } from 'react';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormLabel, InputBase } from 'Shared/components';
import { IntegerControlStyled } from './IntegerControl.style';
import { useApi } from 'Services';

interface IProps {
  control: IControl;
  fileId: string;
}

export const IntegerControl: React.FC<IProps> = ({ control, fileId }): React.ReactElement => {
  const { send } = useApi<void>();

  const saveValue = useCallback(
    (value: string) => {
      send('setControlValue', {}, { file_id: fileId, elm_id: control.id, elm_val: value });
    },
    [send, fileId, control.id],
  );

  return (
    <Grid item xs={6}>
      <IntegerControlStyled>
        <FormLabel>{control.title}</FormLabel>
        <InputBase
          placeholder={control.editable ? control.title : control.value}
          disabled={!control.editable}
          color={control.editable ? 'text' : 'disabled'}
          defaultValue={control.value}
          onChange={(e) => saveValue(e.currentTarget.value)}
        />
      </IntegerControlStyled>
    </Grid>
  );
};
