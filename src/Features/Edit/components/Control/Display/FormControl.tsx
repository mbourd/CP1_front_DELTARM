import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { FormControlStyled } from './FormControl.style';
import { IApiControl } from 'Features/Edit/types';
import { SwitchControlItem } from '..';
import { injectCalculatedFields } from '../../../../../Packages/Helpers/src/injectCalculatedFields';
import { injectDisabledFields } from '../../../../../Packages/Helpers/src/injectDisabledFields';

export interface IProps {
  controls: IApiControl[];
}

export const FormControls: React.FC<IProps> = ({
  controls,
}): React.ReactElement => {
  const [formState, setFormState] = useState(controls);
  const formStateWithCalculated = injectCalculatedFields(formState);
  const formStateWithDisabledAndCalculated = injectDisabledFields(
    formStateWithCalculated,
  );

  useEffect(() => {
    if (controls) {
      setFormState(controls);
    }
  }, [controls]);

  return (
    <FormControlStyled>
      <Grid container className={'control-container'}>
        {formStateWithDisabledAndCalculated.map((control, index) => {
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
    </FormControlStyled>
  );
};
