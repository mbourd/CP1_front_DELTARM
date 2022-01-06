import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { BPITooltip } from 'Shared/components';
import { UserCheckedIcon, WarningIcon } from 'Styles';
import { IApiControl } from 'Features/Edit/types';

interface IProps {
  control: IApiControl;
}

export const ControlFooter: React.FC<IProps> = ({
  control,
}): React.ReactElement => {
  const prev =
    control.control_previous_value &&
    (control.control_type === 'date'
      ? new Date(control.control_previous_value).toLocaleDateString()
      : control.control_previous_value);

  return (
    <Box position="relative">
      <Grid
        className={'control-footer'}
        container
        component={'span'}
        alignItems={'center'}
        wrap={'nowrap'}
      >
        <Grid item component={'span'}>
          {prev ? (
            <BPITooltip title={prev}>
              <span>
                <UserCheckedIcon fontSize={'small'} />
              </span>
            </BPITooltip>
          ) : null}
        </Grid>
        <Grid item component={'span'}>
          {control.control_desc_2 ? (
            <BPITooltip title={control.control_desc_2}>
              <span>
                <WarningIcon fontSize={'small'} />
              </span>
            </BPITooltip>
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
};
