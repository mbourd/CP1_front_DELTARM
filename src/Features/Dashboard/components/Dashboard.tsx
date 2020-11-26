import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

import { useTrans, useApi } from 'Services';
import { Error, HeadingOne, PageLoader } from 'Shared/components';
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
    const label = trans('serverErrorLabel', { ns: 'Default' });

    return (
      <Error title={'Oops!'} redirect={{ label: label, link: '/' }}>
        {trans('serverErrorMessage', { ns: 'Default' })}
      </Error>
    );
  }

  if (isLoading || !data) {
    return (
      <DashboardStyled>
        <HeadingOne>{trans('dashboard')}</HeadingOne>
        <PageLoader text={trans('loading', { ns: 'Default' })} />
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
