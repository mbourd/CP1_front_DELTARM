import React from 'react';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormLabel, InputBase } from 'Shared/components';
import { IntegerControlStyled } from './IntegerControl.style';

interface IProps {
  control: IControl;
}

export const IntegerControl: React.FC<IProps> = ({ control }): React.ReactElement => {
  return (
    <Grid item xs={6}>
      <IntegerControlStyled>
        <FormLabel>{control.title}</FormLabel>
        <InputBase
          placeholder={control.editable ? control.title : control.value}
          disabled={!control.editable}
          color={control.editable ? 'text' : 'disabled'}
          defaultValue={control.value}
        />
      </IntegerControlStyled>
    </Grid>
  );
};
