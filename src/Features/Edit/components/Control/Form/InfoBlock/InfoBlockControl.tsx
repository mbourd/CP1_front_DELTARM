import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IApiControl } from 'Features/Edit/types';
import DOMPurify from 'dompurify';
import { InfoBlockControlStyled } from './InfoBlockControl.style';
import { InfoBlockControlLabel } from './InfoBlockControlLabel';
import { ControlFooter } from '../ControlFooter';
import { RejectControl } from '../RejectByPointControl/RejectControl';

interface IProps {
  control: IApiControl;
  context: 'edit' | 'validate';
}

export const InfoBlockControl: React.FC<IProps> = ({
  control,
  context,
}): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isRejected, setIsRejected] = useState(
    control.control_rejectable?.is_rejected
      ? control.control_rejectable.is_rejected
      : false,
  );

  useEffect(() => {
    if (!isRejected) {
      setIsRejected(false);
    }
  }, [isRejected]);

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
      {control.useRejection && control.control_rejectable && (
        <RejectControl
          isRejected={isRejected}
          setIsRejected={setIsRejected}
          controlId={control.control_id}
          context={context}
          controlRejectable={control.useRejection}
        />
      )}
    </Grid>
  );
};
