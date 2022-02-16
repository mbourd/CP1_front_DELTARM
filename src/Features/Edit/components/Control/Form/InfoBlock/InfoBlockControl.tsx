import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { IApiControl } from 'Features/Edit/types';
import DOMPurify from 'dompurify';
import { InfoBlockControlStyled } from './InfoBlockControl.style';
import { InfoBlockControlLabel } from './InfoBlockControlLabel';
import { ControlFooter } from '../ControlFooter';

interface IProps {
  control: IApiControl;
}

export const InfoBlockControl: React.FC<IProps> = ({
  control,
}): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Grid item xs={12}>
      <InfoBlockControlStyled>
        <InfoBlockControlLabel
          control={control}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
        {isOpen && (
          <>
            <div
              dangerouslySetInnerHTML={{
                __html: control.control_value
                  ? DOMPurify.sanitize(control.control_value)
                  : '',
              }}
            />
            <ControlFooter control={control} />
          </>
        )}
      </InfoBlockControlStyled>
    </Grid>
  );
};
