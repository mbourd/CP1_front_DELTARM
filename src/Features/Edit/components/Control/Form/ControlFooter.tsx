import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { BPITooltip } from 'Shared/components';
import { UserCheckedIcon, WarningIcon } from 'Styles';
import { IControl } from 'Features/Edit/types';

interface IProps {
  control: IControl;
}

export const ControlFooter: React.FC<IProps> = ({
  control,
}): React.ReactElement => {
  const prev =
    control.previousValue &&
    (control.type === 'date'
      ? new Date(control.previousValue).toLocaleDateString()
      : control.previousValue);

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
          {control.desc2 ? (
            <BPITooltip title={control.desc2}>
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
