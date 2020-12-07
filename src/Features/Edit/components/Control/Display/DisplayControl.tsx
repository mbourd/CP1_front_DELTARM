import React from 'react';
import { Grid } from '@material-ui/core';
import { DisplayControlStyled } from './DisplayControl.style';
import { IControl } from 'Features/Edit/types';
import { SwitchControlItem } from '..';

interface IProps {
  controls: IControl[];
}

export const DisplayControl: React.FC<IProps> = ({ controls }): React.ReactElement => {
  return (
    <DisplayControlStyled>
      <Grid container>
        {controls.map((control, index) => {
          return <SwitchControlItem key={index} control={control} />;
        })}
      </Grid>
    </DisplayControlStyled>
  );
};
