import React from 'react';
import { Container } from '@material-ui/core';

export const Logout: React.FC = (): React.ReactElement | null => {
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        maxHeight: '300px',
        marginTop: '1.5em',
      }}
    >
      <img
        src={
          'https://s3-drm-cp1.s3.eu-west-3.amazonaws.com/ressources/images/quitting_time.svg'
        }
        alt={'logout-image'}
      />
    </Container>
  );
};
