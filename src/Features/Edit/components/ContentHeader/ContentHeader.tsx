import React from 'react';
import { Grid } from '@material-ui/core';
import { ContentHeaderStyled } from './ContentHeader.style';

import { SubmitForValidation, Classify, Accept, Reject } from '../Actions';
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
          {/*<Accept />*/}
          {/*<Reject />*/}
        </Grid>
      </Grid>
    </ContentHeaderStyled>
  );
};
