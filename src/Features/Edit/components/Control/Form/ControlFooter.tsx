import React from 'react';
import { Grid } from '@material-ui/core';
import { BPITooltip, FormError } from 'Shared/components';
import { WarningIcon } from 'Styles';
import { IControl } from 'Features/Edit/types';

interface IProps {
  control: IControl;
  error: string | null;
}

export const ControlFooter: React.FC<IProps> = ({ control, error }): React.ReactElement => {
  return (
    <>
      <FormError>
        <Grid container component={'span'} alignItems={'center'} wrap={'nowrap'}>
          <Grid item component={'span'} xs={12}>
            {error}
          </Grid>
          <Grid item component={'span'}>
            {control.desc2 ? (
              <BPITooltip title={control.desc2}>
                <span>
                  <WarningIcon fontSize={'small'} />
                </span>
              </BPITooltip>
            ) : null}
          </Grid>
        </Grid>
      </FormError>
    </>
  );
};
