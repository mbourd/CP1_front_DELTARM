import React from 'react';
import { Grid } from '@material-ui/core';
import { ContentHeaderStyled } from './ContentHeader.style';

import { SubmitForValidation, Classify } from '../Actions';
import { FileComment } from 'Features';

export const ContentHeader: React.FC = (): React.ReactElement => {
  return (
    <ContentHeaderStyled>
      <Grid container alignItems={'center'} wrap={'nowrap'}>
        <Grid item className={'left'}>
          <FileComment />
        </Grid>
        <Grid item className={'right'}>
          <SubmitForValidation />
          <Classify />
        </Grid>
      </Grid>
    </ContentHeaderStyled>
  );
};
