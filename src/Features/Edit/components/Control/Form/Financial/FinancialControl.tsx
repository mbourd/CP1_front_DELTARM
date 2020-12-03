import React from 'react';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormLabel, InputBase } from 'Shared/components';
import { FinancialControlStyled } from './FinancialControl.style';
import { EuroIcon } from 'Styles';

interface IProps {
  control: IControl;
}

export const FinancialControl: React.FC<IProps> = ({ control }): React.ReactElement => {
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
        />
      </FinancialControlStyled>
    </Grid>
  );
};
