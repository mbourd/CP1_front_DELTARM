import styled from 'styled-components/macro';
import { LinearProgress } from '@material-ui/core';
import { linearProgressClasses } from '@mui/material';

export const CustomLinearProgress = styled(LinearProgress)((style: any) => ({
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
