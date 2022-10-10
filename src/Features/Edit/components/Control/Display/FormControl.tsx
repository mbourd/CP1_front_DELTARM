import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
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

export const FormControls: React.FC<IProps> = ({
  chapters,
  context,
}): React.ReactElement => {
  const [formState, setFormState] = useState(chapters);
  const formStateWithCalculated = injectCalculatedFields(formState);
  const formStateWithDisabledAndCalculated = injectDisabledFields(
    formStateWithCalculated,
  );

  useEffect(() => {
    if (chapters) {
      setFormState(chapters);
      console.log(formStateWithDisabledAndCalculated);
    }
  }, [chapters]);

  return (
    <FormControlStyled>
      {formStateWithDisabledAndCalculated.map((chapter, index) => (
        <React.Fragment key={index}>
          <ContentTitle>{chapter.label}</ContentTitle>
          <Grid container className={'control-container'}>
            {chapter.controls.map((control, index) => {
              return (
                <SwitchControlItem
                  key={index}
                  control={control}
                  formState={formState}
                  setFormState={setFormState}
                  context={context}
                />
              );
            })}
          </Grid>
        </React.Fragment>
      ))}
    </FormControlStyled>
  );
};
