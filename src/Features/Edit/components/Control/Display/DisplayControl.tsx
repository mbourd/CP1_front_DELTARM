import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { DisplayControlStyled } from './DisplayControl.style';
import { IControl } from 'Features/Edit/types';
import { SwitchControlItem } from '..';

export interface IProps {
  controls: IControl[];
}

export const DisplayControl: React.FC<IProps> = ({
  controls,
}): React.ReactElement => {
  const [formState, setFormState] = useState(controls);
  // const formStateWithDisabled = injectDisabled(formState)

  return (
    <DisplayControlStyled>
      <Grid container className={'control-container'}>
        {formState.map((control, index) => {
          return (
            <SwitchControlItem
              key={index}
              control={control}
              formState={formState}
              setFormState={setFormState}
            />
          );
        })}
      </Grid>
    </DisplayControlStyled>
  );
};
