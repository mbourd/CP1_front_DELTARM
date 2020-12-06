import React, { useCallback } from 'react';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormLabel, InputBase } from 'Shared/components';
import { FinancialControlStyled } from './FinancialControl.style';
import { EuroIcon } from 'Styles';
import { useApi } from 'Services';

interface IProps {
  control: IControl;
  fileId: string;
}

export const FinancialControl: React.FC<IProps> = ({ control, fileId }): React.ReactElement => {
  const { send } = useApi<void>();

  const saveValue = useCallback(
    (value: string) => {
      send('setControlValue', {}, { file_id: fileId, elm_id: control.id, elm_val: value });
    },
    [send, fileId, control.id],
  );

  return (
    <Grid item xs={6}>
      <FinancialControlStyled>
        <FormLabel>{control.title}</FormLabel>
        <InputBase
          placeholder={control.editable ? control.title : control.value}
          disabled={!control.editable}
          color={control.editable ? 'text' : 'disabled'}
          defaultValue={control.value}
          icon={<EuroIcon />}
          onChange={(e) => saveValue(e.currentTarget.value)}
        />
      </FinancialControlStyled>
    </Grid>
  );
};
