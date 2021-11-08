import React from 'react';
import { Grid } from '@material-ui/core';
import { BPITooltip, FormLabel } from 'Shared/components';
import { HelpIcon } from 'Styles';
import { IComplianceData } from 'Features/Edit/types';

interface IProps {
  compliance: IComplianceData;
}

export const ComplianceLabel: React.FC<IProps> = ({
  compliance,
}): React.ReactElement => {
  return (
    <>
      <FormLabel>
        <Grid
          container
          component={'span'}
          alignItems={'center'}
          wrap={'nowrap'}
        >
          <Grid item component={'span'} xs={12}>
            {compliance.lib}
          </Grid>
          <Grid item component={'span'}>
            {compliance.desc1 ? (
              <BPITooltip title={compliance.desc1}>
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
