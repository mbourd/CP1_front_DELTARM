import React from 'react';
import { ILinearMetric } from './types';
import { BPITooltip } from '../../../../../Shared/components';
import { CustomLinearProgress } from './LinearMetric.style';

export const LinearMetric: React.FC<React.PropsWithChildren<ILinearMetric>> = ({
  variant,
  value,
  hint,
  style,
}) => {
  return (
    <BPITooltip title={hint}>
      <CustomLinearProgress
        className="_CustomMetricProgress"
        variant={variant}
        value={value}
        style={style}
      />
    </BPITooltip>
  );
};
