import React from 'react';
import { Grid } from '@material-ui/core';
import { ContentHeaderStyled } from './ContentHeader.style';
import { BPIBadge } from 'Shared/components';
import { CommentIcon } from 'Styles';
import { SubmitForValidation, Classify } from '../Actions';

export const ContentHeader: React.FC = (): React.ReactElement => {
  return (
    <ContentHeaderStyled>
      <Grid container alignItems={'center'} wrap={'nowrap'}>
        <Grid item className={'left'}>
          <BPIBadge content={5}>
            <CommentIcon fontSize={'large'} />
          </BPIBadge>
        </Grid>
        <Grid item className={'right'}>
          <SubmitForValidation />
          <Classify />
        </Grid>
      </Grid>
    </ContentHeaderStyled>
  );
};
