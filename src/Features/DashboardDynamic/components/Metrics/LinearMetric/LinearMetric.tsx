import React from 'react';

import { LinearProgress } from '@material-ui/core';
import { ILinearMetric } from './types';
import { linearProgressClasses, styled } from '@mui/material';
import { BPITooltip } from '../../../../../Shared/components';

export const LinearMetric: React.FC<ILinearMetric> = ({
  variant,
  value,
  hint,
  style,
}) => {
  const CustomLinearProgress = styled(LinearProgress)(() => ({
    height: 12,
    borderRadius: 10,
    marginBottom: 10,
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
