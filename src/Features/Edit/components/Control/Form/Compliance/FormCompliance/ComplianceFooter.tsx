import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { BPITooltip } from 'Shared/components';
import { WarningIcon } from 'Styles';
import { IApiComplianceFields } from 'Features/Edit/types';

interface IProps {
  compliance: IApiComplianceFields;
}

export const ComplianceFooter: React.FC<React.PropsWithChildren<IProps>> = ({
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
          {compliance.compliance_elm_desc_2 ? (
            <BPITooltip title={compliance.compliance_elm_desc_2}>
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
