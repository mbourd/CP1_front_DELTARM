import React from 'react';
import { TextControlStyled } from './TextControl.style';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormLabel, InputBase } from 'Shared/components';

interface IProps {
  control: IControl;
}

export const TextControl: React.FC<IProps> = ({ control }): React.ReactElement => {
  return (
    <Grid item xs={6}>
      <TextControlStyled>
        <FormLabel>{control.title}</FormLabel>
        <InputBase
          placeholder={control.editable ? control.title : control.value}
          disabled={!control.editable}
          color={control.editable ? 'text' : 'icon'}
          defaultValue={control.editable ? control.value : ''}
        />
      </TextControlStyled>
    </Grid>
  );
};
