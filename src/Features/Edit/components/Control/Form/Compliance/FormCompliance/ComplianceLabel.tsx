import React from 'react';
import { Grid } from '@mui/material';
import { BPITooltip, FormLabel } from 'Shared/components';
import { HelpIcon } from 'Styles';
import { IApiComplianceFields } from 'Features/Edit/types';

interface IProps {
  compliance: IApiComplianceFields;
}

export const ComplianceLabel: React.FC<React.PropsWithChildren<IProps>> = ({
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
            {compliance.compliance_elm_lib}
          </Grid>
          <Grid item component={'span'}>
            {compliance.compliance_elm_desc_1 ? (
              <BPITooltip title={compliance.compliance_elm_desc_1}>
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
