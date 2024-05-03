import React from 'react';
import { Button } from '@mui/material';

export const PointsControl: React.FC<
  React.PropsWithChildren<unknown>
> = ({}): React.ReactElement => {
  return (
    <Button style={{ backgroundColor: '#533fd0', color: 'white' }}>
      Embedded CP1 content points control
    </Button>
  );
};
