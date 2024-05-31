import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { FormControlStyled } from './FormControl.style';
import { IChapter } from 'Features/Edit/types';
import { SwitchControlItem } from '..';
import { injectCalculatedFields } from '../../../../../Packages/Helpers/src/injectCalculatedFields';
import { injectDisabledFields } from '../../../../../Packages/Helpers/src/injectDisabledFields';
import { ContentTitle } from '../../ContentTitle/ContentTitle';

export interface IProps {
  chapters: IChapter[];
  context: 'edit' | 'validate';
}

export const FormControls: React.FC<React.PropsWithChildren<IProps>> = ({
  chapters,
  context,
}): React.ReactElement => {
  const [formState, setFormState] = useState(chapters);
  const formStateWithCalculated = injectCalculatedFields(formState);
  const formStateWithDisabledAndCalculated = injectDisabledFields(
    formStateWithCalculated,
  );

  return (
    <FormControlStyled>
      {formStateWithDisabledAndCalculated.map((chapter, index) => (
        <React.Fragment key={index}>
          <ContentTitle>{chapter.label}</ContentTitle>
          <Grid container className={'control-container'}>
            {chapter.controls.map((control, index) => {
              return (
                <React.Fragment key={index}>
                  <SwitchControlItem
                    control={control}
                    formState={formState}
                    setFormState={setFormState}
                    context={context}
                  />
                  {control?.control_carriage_return === true && (
                    <Grid
                      item
                      xs={6}
                      className="FormControl_carriage_return"
                    ></Grid>
                  )}
                </React.Fragment>
              );
            })}
          </Grid>
        </React.Fragment>
      ))}
    </FormControlStyled>
  );
};
