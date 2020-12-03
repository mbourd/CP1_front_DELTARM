import React from 'react';
import { Grid } from '@material-ui/core';
import { DisplayControlStyled } from './DisplayControl.style';
import { IControl } from 'Features/Edit/types';
import { ControlItem } from '..';

interface IProps {
  controls: IControl[];
}

export const DisplayControl: React.FC<IProps> = ({ controls }): React.ReactElement => {
  return (
    <DisplayControlStyled>
      <Grid container>
        {controls.map((control) => {
          return <ControlItem key={control.id} control={control} />;
        })}
      </Grid>
    </DisplayControlStyled>
  );
};
