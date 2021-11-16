import React, { useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import {
  useTrans,
  useApi,
  SwitchCallState,
  useSecurity,
  SecurityContext,
} from 'Services';
import { BreadCrumb, HeadingOne } from 'Shared/components';
import { DashboardStyled } from './Dashboard.style';
import { Card } from './Card/Card';
import { ICard } from './Card/types';
import { IsLoading } from './IsLoading';
import { NoData } from './NoData';
import { DashboardSearch } from './Search/DashboardSearch';

const Dashboard: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Dashboard');
  const { callState, send, data } = useApi<ICard[]>();

  const { user } = useSecurity();
  const { logout } = useContext(SecurityContext);

  if (!user.isLogged()) {
    logout();
  }

  useEffect(() => {
    send('dashboard');
  }, [send]);

  return (
    <>
      <BreadCrumb values={['Dashboard']} />
      <SwitchCallState
        callState={callState}
        states={{
          IS_LOADING: <IsLoading />,
          NO_DATA: <NoData />,
          SERVER_ERROR: <NoData />,
        }}
      >
        <DashboardStyled>
          <HeadingOne>{trans('pageTitle')}</HeadingOne>
          <DashboardSearch />
          <Grid container>
            {data?.map((card, index) => {
              return (
                <Grid item xs={12} md={6} key={index}>
                  <Card {...card} />
                </Grid>
              );
            })}
          </Grid>
        </DashboardStyled>
      </SwitchCallState>
    </>
  );
};

export { Dashboard };
