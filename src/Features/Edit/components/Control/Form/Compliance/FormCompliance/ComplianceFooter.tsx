import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { BPITooltip } from 'Shared/components';
import { WarningIcon } from 'Styles';
import { IComplianceData } from 'Features/Edit/types';

interface IProps {
  compliance: IComplianceData;
}

export const ComplianceFooter: React.FC<IProps> = ({
  compliance,
}): React.ReactElement => {
  return (
    <Box position="relative">
      <Grid
        className={'compliance-footer'}
        container
        component={'span'}
        alignItems={'center'}
        wrap={'nowrap'}
      >
        <Grid item component={'span'}>
          {compliance.desc2 ? (
            <BPITooltip title={compliance.desc2}>
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
