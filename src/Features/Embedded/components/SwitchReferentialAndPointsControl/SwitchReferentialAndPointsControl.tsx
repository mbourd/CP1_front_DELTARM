import React from 'react';
import { Button } from '@mui/material';

interface IProps {
  mode: 'referential' | 'control-points';
}

export const SwitchReferentialAndPointsControl: React.FC<IProps> = ({
  mode,
}): React.ReactElement | null => {
  switch (mode) {
    case 'referential':
      return (
        <Button style={{ backgroundColor: '#533fd0', color: 'white' }}>
          Embedded CP1 content referential
        </Button>
      );
    case 'control-points':
      return (
        <Button style={{ backgroundColor: '#533fd0', color: 'white' }}>
          Embedded CP1 content points control
        </Button>
      );
  }

  return null;
};
