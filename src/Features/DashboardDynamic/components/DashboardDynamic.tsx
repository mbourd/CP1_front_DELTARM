import React, { Suspense, useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import {
  useApi,
  SwitchCallState,
  useSecurity,
  SecurityContext,
} from 'Services';
import { BreadCrumb, Heading } from 'Shared/components';
import { DashboardStyled } from './Dashboard.style';
import { Card } from './Card/Card';
import { ICard } from './Card/types';
import { IsLoading } from './IsLoading';
import { NoData } from './NoData';
import { SearchBar } from './Search/SearchBar';
import { IDashboard } from './types';

const DashboardDynamic: React.FC = (): React.ReactElement => {
  const { send, data: response } = useApi<IDashboard>();

  const { user } = useSecurity();
  const { logout, source_caller } = useContext(SecurityContext);

  if (!user.isLogged()) {
    logout();
  }

  useEffect(() => {
    send('dashboardControlPermanent');
  }, [send]);

  console.log(response);

  // lazy imports for suspense
  // https://fr.reactjs.org/docs/concurrent-mode-suspense.html

  return (
    <>
      <Suspense fallback={<IsLoading />}>
        <BreadCrumb values={['Dashboard']} />
        <DashboardStyled>
          {response?.data.title.visible && (
            <Heading
              style={{
                fontSize: response.data.title.font_size,
                color: response.data.title.font_color,
              }}
            >
              {response.data.title.lib}
            </Heading>
          )}
          {response?.data.subtitle.visible && (
            <Heading
              style={{
                fontSize: response.data.subtitle.font_size,
                color: response.data.subtitle.font_color,
              }}
            >
              {response.data.subtitle.lib}
            </Heading>
          )}
          {response?.data.search_bar.search_bar && (
            <SearchBar
              btn_lib={response.data.search_bar.btn_lib}
              options={response.data.search_bar.options}
            />
          )}
          {/*<Grid container>*/}
          {/*  {data?.cards.map((card, index) => {*/}
          {/*    return (*/}
          {/*      <Grid item xs={12} md={6} key={index}>*/}
          {/*        <Card {...card} />*/}
          {/*      </Grid>*/}
          {/*    );*/}
          {/*  })}*/}
          {/*</Grid>*/}
        </DashboardStyled>
      </Suspense>
    </>
  );
};

export { DashboardDynamic };
