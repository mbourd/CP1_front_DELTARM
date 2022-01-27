import styled from 'styled-components/macro';
import { LinearProgress } from '@material-ui/core';
import { linearProgressClasses } from '@mui/material';
import React from 'react';

interface ILinearMetricStyled {
  variant: 'determinate' | 'indeterminate' | 'buffer' | 'query' | undefined;
  value: number;
  style?: React.CSSProperties;
}

export const CustomLinearProgress = styled(LinearProgress)(
  (props: ILinearMetricStyled) => {
    return {
      borderRadius: 10,
      marginBottom: 10,
      [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: props.style?.backgroundColor,
        cursor: 'pointer',
      },
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: props.style?.color,
      },
    };
  },
);
