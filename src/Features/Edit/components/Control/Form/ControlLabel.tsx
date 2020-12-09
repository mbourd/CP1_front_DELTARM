import React from 'react';
import { Grid } from '@material-ui/core';
import { BPITooltip, FormLabel } from 'Shared/components';
import { HelpIcon } from 'Styles';
import { IControl } from 'Features/Edit/types';

interface IProps {
  control: IControl;
}

export const ControlLabel: React.FC<IProps> = ({ control }): React.ReactElement => {
  return (
    <>
      <FormLabel>
        <Grid container component={'span'} alignItems={'center'} wrap={'nowrap'}>
          <Grid item component={'span'} xs={12}>
            {control.title}
          </Grid>
          <Grid item component={'span'}>
            {control.desc1 ? (
              <BPITooltip title={control.desc1}>
                <span>
                  <HelpIcon fontSize={'small'} />
                </span>
              </BPITooltip>
            ) : null}
          </Grid>
        </Grid>
      </FormLabel>
    </>
  );
};
