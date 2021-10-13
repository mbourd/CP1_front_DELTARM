import React from 'react';
import { Grid } from '@material-ui/core';
import { DisplayControlStyled } from './DisplayControl.style';
import { IControl } from 'Features/Edit/types';
import { SwitchControlItem } from '..';

export interface IProps {
  controls: IControl[];
}

export const DisplayControl: React.FC<IProps> = ({ controls }): React.ReactElement => {
  // const [formState, setFormState] = useState(controls);

  // const formStateWithDisbaled = injectDisabled(formState)

  console.log('RENDER', controls);

  return (
    <DisplayControlStyled>
      <Grid container className={'control-container'}>
        {controls.map((control, index) => {
          return <SwitchControlItem key={index} control={control} />;
        })}
      </Grid>
    </DisplayControlStyled>
  );
};
