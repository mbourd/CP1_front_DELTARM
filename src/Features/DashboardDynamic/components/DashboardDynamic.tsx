import React, { Suspense, useCallback, useContext, useEffect } from 'react';
import { Grid, LinearProgress } from '@material-ui/core';

import {
  useApi,
  SwitchCallState,
  useSecurity,
  SecurityContext,
} from 'Services';
import { BPITooltip, BreadCrumb, Heading } from 'Shared/components';
import { DashboardStyled, MetricsContainerStyled } from './Dashboard.style';
import { ButtonContainerStyled } from './Dashboard.style';
import { Card } from './Card/Card';
import { ICard } from './Card/types';
import { IsLoading } from './IsLoading';
import { NoData } from './NoData';
import { SearchBar } from './Search/SearchBar';
import { IDashboard } from './types';
import { Button } from 'Shared/components';
import { Metric } from './Metrics/Metric';
import {
  HelpIcon,
  UserCheckedIcon,
  WarningIcon,
} from '../../../Packages/Design';

const DashboardDynamic: React.FC = (): React.ReactElement => {
  const { send, data: response } = useApi<IDashboard>();

  const { user } = useSecurity();
  const { logout } = useContext(SecurityContext);

  if (!user.isLogged()) {
    logout();
  }

  useEffect(() => {
    send('dashboardControlPermanent');
  }, [send]);

  const onClickCustomButtons = useCallback((route: string) => {
    console.log('ROUTE TO CALL: ' + route);
  }, []);

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
          <ButtonContainerStyled>
            {response?.data.btns.map((btn, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => onClickCustomButtons(btn.route)}
                  style={{ backgroundColor: btn.btn_color }}
                >
                  {btn.btn_lib}
                </Button>
              );
            })}
          </ButtonContainerStyled>
          <MetricsContainerStyled>
            {response?.data.metrics.bars.map((bar, index) => {
              return (
                <Grid
                  container
                  component={'span'}
                  alignItems={'center'}
                  wrap={'nowrap'}
                  key={index}
                >
                  <Grid item component={'span'} xs={12}>
                    <Metric
                      key={index}
                      variant={'determinate'}
                      value={bar.value}
                      hint={bar.hint}
                      style={{
                        color: bar.bar_color,
                        backgroundColor: bar.bar_bg_color,
                      }}
                    />
                  </Grid>
                  <p>
                    {bar.lib} {bar.value}%
                  </p>
                  <Grid item component={'span'}>
                    <BPITooltip title={bar.info}>
                      <span>
                        <HelpIcon fontSize={'small'} />
                      </span>
                    </BPITooltip>
                  </Grid>
                </Grid>
              );
            })}
          </MetricsContainerStyled>
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
