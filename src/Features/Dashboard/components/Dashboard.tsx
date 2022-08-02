import React, { useContext, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import {
  useTrans,
  useApi,
  SwitchCallState,
  useSecurity,
  SecurityContext,
  translation,
} from 'Services';
import { BreadCrumb, HeadingOne, ErrorNoData } from 'Shared/components';
import { DashboardStyled } from './Dashboard.style';
import { Card } from './Card/Card';
import { ICard } from './Card/types';
import { IsLoading } from './IsLoading';
import { NoData } from './NoData';
import { DashboardSearch } from './Search/DashboardSearch';
import { DashboardDynamic } from '../../DashboardDynamic';

const Dashboard: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Dashboard');
  const { callState, send, data } = useApi<ICard[]>();
  const { data: dataSecurity, logout } = useContext(SecurityContext);
  const { user } = useSecurity();
  const [clientInfoSignal, setClientInfoSignal] = useState(false);
  const client_info: any = localStorage.getItem('client_info');
  const review = JSON.parse(client_info);
  const { data: context } = useContext(SecurityContext);
  const storage_security: any = localStorage.getItem('security');
  const security = JSON.parse(storage_security);

  useEffect(() => {
    if (context.cli_id && clientInfoSignal === false) {
      // checks whether client data came or not
      if (review?.length > 0) {
        setClientInfoSignal(true);
        localStorage.removeItem('client_info');

        return;
      } else {
        setClientInfoSignal(false);

        return;
      }
    }
  }, [context.cli_id, clientInfoSignal, review]);

  useEffect(() => {
    // Temporary if statements behavior
    if (dataSecurity.context === 'contr_perm') {
      return;
    }
    send('dashboard');
  }, [send, dataSecurity.context]);

  // Temporary if statements behavior
  if (dataSecurity.context === 'contr_perm') {
    return <DashboardDynamic />;
  }

  if (!user.isLogged()) {
    logout();
  }

  return clientInfoSignal ? (
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
  ) : (
    <div style={{ marginTop: 40 }}>
      <ErrorNoData message={trans('noClientFound')} />
    </div>
  );
};

export { Dashboard };
