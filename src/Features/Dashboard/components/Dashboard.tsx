import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

import { useTrans, useApi, SwitchCallState } from 'Services';
import { HeadingOne } from 'Shared/components';
import { DashboardStyled } from './Dashboard.style';
import { Card } from './Card/Card';
import { ICard } from './Card/types';
import { IsLoading } from './IsLoading';
import { NoData } from './NoData';

const Dashboard: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Dashboard');
  const { callState, send, data } = useApi<ICard[]>();

  useEffect(() => {
    send('dashboard');
  }, [send]);

  return (
    <SwitchCallState callState={callState} states={{ IS_LOADING: <IsLoading />, NO_DATA: <NoData /> }}>
      <DashboardStyled>
        <HeadingOne>{trans('pageTitle')}</HeadingOne>
        <Grid container>
          {data?.map((card, key) => {
            return (
              <Grid item xs={12} md={6} key={key}>
                <Card {...card} />
              </Grid>
            );
          })}
        </Grid>
      </DashboardStyled>
    </SwitchCallState>
  );
};

export { Dashboard };
