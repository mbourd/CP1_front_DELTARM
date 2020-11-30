import React from 'react';
import { Grid } from '@material-ui/core';
import { BodyStyled } from './Body.style';
import { ICard } from '../types';
import { FormLabel, FormText } from 'Shared/components';

export const Body: React.FC<Pick<ICard, 'data'>> = ({ data }): React.ReactElement => {
  return (
    <BodyStyled>
      <Grid container>
        {data.map((datum, key) => {
          return (
            <Grid item sm={4} key={key}>
              <FormLabel>{datum.label}</FormLabel>
              <p>
                <FormText>{datum.value}</FormText>
              </p>
            </Grid>
          );
        })}
      </Grid>
    </BodyStyled>
  );
};
