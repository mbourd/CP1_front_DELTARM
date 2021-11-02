import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { InfoBlockControlStyled } from './InfoBlockControl.style';
import { InfoBlockControlLabel } from './InfoBlockControlLabel';
import { ControlFooter } from '../ControlFooter';

interface IProps {
  control: IControl;
}

export const InfoBlockControl: React.FC<IProps> = ({ control }): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Grid item xs={12}>
      <InfoBlockControlStyled>
        <InfoBlockControlLabel control={control} setIsOpen={setIsOpen} isOpen={isOpen} />
        {isOpen && (
          <>
            <div dangerouslySetInnerHTML={{ __html: control.value }} />
            <ControlFooter control={control} />
          </>
        )}
      </InfoBlockControlStyled>
    </Grid>
  );
};
