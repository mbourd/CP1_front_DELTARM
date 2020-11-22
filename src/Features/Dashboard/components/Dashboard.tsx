import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

import { useTrans, useApi } from 'Services';
import { HeadingOne, PageLoader } from 'Shared/components';
import { DashboardStyled } from './Dashboard.style';
import { Card } from './Card/Card';
import { ICard } from './Card/types';

const Dashboard: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Dashboard');
  const { error, isLoading, send, data } = useApi<ICard[]>();

  useEffect(() => {
    send('dashboard');
  }, [send]);

  if (error) {
    return <DashboardStyled>Error</DashboardStyled>;
    // Todo: Show toast
  }

  if (isLoading || !data) {
    return (
      <DashboardStyled>
        <HeadingOne>{trans('dashboard')}</HeadingOne>
        <PageLoader text={trans('loading')} />
      </DashboardStyled>
    );
  }

  return (
    <DashboardStyled>
      <HeadingOne>{trans('dashboard')}</HeadingOne>
      <Grid container>
        {data.map((card, key) => {
          return (
            <Grid item xs={12} md={6} key={key}>
              <Card {...card} />
            </Grid>
          );
        })}
      </Grid>
    </DashboardStyled>
  );
};

export { Dashboard };
