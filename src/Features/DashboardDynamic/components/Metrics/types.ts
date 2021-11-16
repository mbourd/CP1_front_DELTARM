import React from 'react';

export interface IMetric {
  variant: 'determinate' | 'indeterminate' | 'buffer' | 'query' | undefined;
  value: number;
  hint: string;
  style?: React.CSSProperties;
}
