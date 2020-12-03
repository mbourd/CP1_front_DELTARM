import React from 'react';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormLabel, Select } from 'Shared/components';
import { SelectListControlStyled } from './SelectListControl.style';

interface IProps {
  control: IControl;
}

export const SelectListControl: React.FC<IProps> = ({ control }): React.ReactElement => {
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
        >
          {control.title}
        </Select>
      </SelectListControlStyled>
    </Grid>
  );
};
