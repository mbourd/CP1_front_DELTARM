import React from 'react';

export interface ILinearMetric {
  variant: 'determinate' | 'indeterminate' | 'buffer' | 'query' | undefined;
  value: number;
  hint: string;
  style?: React.CSSProperties;
}
