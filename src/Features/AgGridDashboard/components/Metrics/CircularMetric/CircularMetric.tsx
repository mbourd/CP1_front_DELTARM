import React from 'react';

import { CircularProgress } from '@mui/material';
import { BPITooltip } from '../../../../../Shared/components';
import { ICircularMetric } from './types';

export const CircularMetric: React.FC<ICircularMetric> = ({
  variant,
  value,
  hint,
  style,
}) => {
  return (
    <BPITooltip title={hint}>
      <CircularProgress variant={variant} value={value} style={style} />
    </BPITooltip>
  );
};
