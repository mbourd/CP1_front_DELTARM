import React from 'react';
import { Grid } from '@material-ui/core';
import { LinearMetric } from './LinearMetric/LinearMetric';
import { BPITooltip } from '../../../../Shared/components';
import { HelpIcon } from '../../../../Packages/Design';
import { CircularMetric } from './CircularMetric/CircularMetric';
import { IIndicator } from '../types';

interface ISwitchMetric {
  indicator: IIndicator;
}

export const SwitchMetric: React.FC<ISwitchMetric> = ({
  indicator,
}): React.ReactElement => {
  switch (indicator.style) {
    case 'linear':
      return (
        <>
          <Grid item component={'span'}>
            <LinearMetric
              variant={'determinate'}
              value={indicator.value}
              hint={indicator.hint}
              style={{
                color: indicator.bar_color,
              }}
            />
            <p>
              {indicator.lib} {indicator.value}%
            </p>
          </Grid>
          <Grid item component={'span'}>
            <BPITooltip title={indicator.info}>
              <span>
                <HelpIcon fontSize={'small'} />
              </span>
            </BPITooltip>
          </Grid>
        </>
      );
    case 'circular':
      return (
        <>
          <Grid item component={'span'}>
            <CircularMetric
              variant={'determinate'}
              value={indicator.value}
              hint={indicator.hint}
              style={{
                color: indicator.bar_color,
                cursor: 'pointer',
              }}
            />
            <p>
              {indicator.lib} {indicator.value}%
            </p>
          </Grid>
          <Grid item component={'span'}>
            <BPITooltip title={indicator.info}>
              <span>
                <HelpIcon fontSize={'small'} />
              </span>
            </BPITooltip>
          </Grid>
        </>
      );
  }
};
