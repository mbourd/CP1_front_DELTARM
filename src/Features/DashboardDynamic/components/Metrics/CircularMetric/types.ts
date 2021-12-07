import React from 'react';

export interface ICircularMetric {
  variant: 'determinate' | 'indeterminate' | undefined;
  value: number;
  hint: string;
  style?: React.CSSProperties;
}
