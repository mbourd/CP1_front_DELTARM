import React from 'react';
import { Grid } from '@material-ui/core';
import { ContentHeaderStyled } from './ContentHeader.style';
import { Button, BPIBadge } from 'Shared/components';
import { CommentIcon, StopIcon, UserCheckedIcon } from 'Styles';
import { useTrans } from 'Services';

export const ContentHeader: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Edit');

  return (
    <ContentHeaderStyled>
      <Grid container alignItems={'center'} wrap={'nowrap'}>
        <Grid item className={'left'}>
          <BPIBadge content={5}>
            <CommentIcon fontSize={'large'} />
          </BPIBadge>
        </Grid>
        <Grid item className={'right'}>
          <Button color={'success'} type={'alt'} startIcon={<UserCheckedIcon />}>
            {trans('submitForValidation')}
          </Button>
          <Button color={'error'} type={'alt'} startIcon={<StopIcon />}>
            {trans('classifyWithoutContinuation')}
          </Button>
        </Grid>
      </Grid>
    </ContentHeaderStyled>
  );
};
