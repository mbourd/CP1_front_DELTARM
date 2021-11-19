import React from 'react';
import { ILinearMetric } from './types';
import { BPITooltip } from '../../../../../Shared/components';
import { CustomLinearProgress } from './LinearMetric.style';

export const LinearMetric: React.FC<ILinearMetric> = ({
  variant,
  value,
  hint,
  style,
}) => {
  return (
    <BPITooltip title={hint}>
      <CustomLinearProgress variant={variant} value={value} style={style} />
    </BPITooltip>
  );
};
