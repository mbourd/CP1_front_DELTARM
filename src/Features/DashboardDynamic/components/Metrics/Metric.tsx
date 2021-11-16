import React from 'react';

import { LinearProgress } from '@material-ui/core';
import { IMetric } from './types';
import { linearProgressClasses, styled } from '@mui/material';
import { BPITooltip } from '../../../../Shared/components';

export const Metric: React.FC<IMetric> = ({ variant, value, hint, style }) => {
  const CustomLinearProgress = styled(LinearProgress)(() => ({
    height: 12,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: style?.backgroundColor,
      cursor: 'pointer',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: style?.color,
    },
  }));

  return (
    <BPITooltip title={hint}>
      <CustomLinearProgress variant={variant} value={value} style={style} />
    </BPITooltip>
  );
};
