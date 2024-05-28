import React, { useContext, useEffect, useState } from 'react';
import { Grid } from '@mui/material';

import {
  useApi,
  useSecurity,
  SecurityContext,
  SwitchCallState,
} from 'Services';
import { BreadCrumb, Heading } from 'Shared/components';
import {
  DashboardDynamicStyled,
  MetricsContainerStyled,
  HeaderDashDynamicFixedStyled,
} from './DashboardDynamic.style';
import { ButtonContainerStyled } from './DashboardDynamic.style';
import { Card } from './Card/Card';
import { IsLoading } from './IsLoading';
import { SearchBar } from './Search/SearchBar';
import { IDashboard } from './types';
import { Button, ErrorNoData } from 'Shared/components';
import { SwitchMetric } from './Metrics/SwitchMetric';
import { ModalDynamic } from '../../ModalDynamic/components/ModalDynamic';
import { useActionButton } from '../../../Packages/Helpers/src/useActionButton';
import { useRecoilValue } from 'recoil';
import { IDataModal } from '../../ModalDynamic/components/types';
import { NoData } from './NoData';
import { useTrans } from '../../../Services';
import { CardAgGrid } from './CardAgGrid/CardAgGrid';
import { useDashboardDynamicReducer } from '../dashboardDynamic.reducer';

const DashboardDynamic: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement => {
  const { dispatchDashboardDynamicUpdateDataApi_dashboardControlPermanent } =
    useDashboardDynamicReducer();
  const [trans] = useTrans('Dashboard');
  const { send, data: response, callState } = useApi<IDashboard>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const { modalData: recoilData, actionButton } = useActionButton({
    jwt,
    setIsModalOpen,
  });
  const modal: IDataModal = useRecoilValue<any>(recoilData);

  const { logout } = useContext(SecurityContext);

  if (!user.isLogged()) {
    logout();
  }

  const [clientInfoSignal, setClientInfoSignal] = useState(true);

  const client_info: any = localStorage.getItem('client_info');
  const review = JSON.parse(client_info);
  const { data: context } = useContext(SecurityContext);

  useEffect(() => {
    dispatchDashboardDynamicUpdateDataApi_dashboardControlPermanent(response);
  }, [
    dispatchDashboardDynamicUpdateDataApi_dashboardControlPermanent,
    response,
  ]);

  useEffect(() => {
    if (context.cli_id && !clientInfoSignal) {
      // checks whether client data came or not
      if (review?.length > 0) {
        setClientInfoSignal(true);

        return;
      } else {
        setClientInfoSignal(false);

        return;
      }
    }
  }, [context.cli_id, clientInfoSignal, review]);

  useEffect(() => {
    if (context?.source_mode) {
      send(
        'dashboardControlPermanent',
        {},
        { source_mode: context.source_mode },
      );
    } else {
      send('dashboardControlPermanent');
    }
  }, [context?.source_mode, send]);

  return clientInfoSignal ? (
    <SwitchCallState
      callState={callState}
      states={{
        NOT_INIT: <IsLoading />,
        IS_LOADING: <IsLoading />,
        NO_DATA: <NoData />,
        SERVER_ERROR: <NoData />,
      }}
    >
      <BreadCrumb values={['Dashboard']} />
      {response?.data && (
        <DashboardDynamicStyled>
          <HeaderDashDynamicFixedStyled>
            {response?.data.title.visible && (
              <Heading
                style={{
                  fontSize: response?.data.title.font_size,
                  color: response?.data.title.font_color,
                }}
              >
                {response?.data.title.lib}
              </Heading>
            )}
            {response?.data.subtitle.visible && (
              <Heading
                style={{
                  fontSize: response?.data.subtitle.font_size,
                  color: response?.data.subtitle.font_color,
                }}
              >
                {response?.data.subtitle.lib}
              </Heading>
            )}
            {response?.data.search_bar.search_bar && (
              <SearchBar
                btn_lib={response?.data.search_bar.btn_lib}
                options={response?.data.search_bar.options}
                setIsModalOpen={setIsModalOpen}
              />
            )}
            {response && response?.data.btns.length > 0 ? (
              <ButtonContainerStyled>
                {response?.data.btns.map((btn, index) => {
                  return (
                    <Button
                      key={index}
                      onClick={() => actionButton(btn.action)}
                      style={{ backgroundColor: btn.bg_color }}
                    >
                      {btn.btn_lib}
                    </Button>
                  );
                })}
              </ButtonContainerStyled>
            ) : null}
            <MetricsContainerStyled>
              <Grid container component={'span'} alignItems={'center'}>
                {response?.data.metrics.visible
                  ? response?.data.metrics.indicator.map((indicator, index) => (
                      <SwitchMetric indicator={indicator} key={index} />
                    ))
                  : null}
              </Grid>
            </MetricsContainerStyled>
          </HeaderDashDynamicFixedStyled>
          <Grid container>
            {response?.data?.cards?.visible &&
              response?.data.cards.card.map((card, index) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  key={index}
                  style={{ height: '500px' }}
                >
                  {card.version === 1 ? (
                    <CardAgGrid card={card} triggerAction={actionButton} />
                  ) : (
                    <Card
                      card={card}
                      key={index}
                      triggerAction={actionButton}
                    />
                  )}
                </Grid>
              ))}
          </Grid>
          {isModalOpen && modal ? (
            <ModalDynamic
              open={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              data={modal}
            />
          ) : null}
        </DashboardDynamicStyled>
      )}
    </SwitchCallState>
  ) : !context.cli_id ? (
    <div style={{ marginTop: 40 }}>
      <ErrorNoData message={trans('noClientFound')} />
    </div>
  ) : (
    <IsLoading />
  );
};

export { DashboardDynamic };
