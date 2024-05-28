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
  AgGridDashboardStyled,
  MetricsContainerStyled,
  HeaderDashDynamicFixedStyled,
} from './AgGridDashboard.style';
import { ButtonContainerStyled } from './AgGridDashboard.style';
import { Card } from './Card/Card';
import { IsLoading } from './IsLoading';
import { SearchBar } from './Search/SearchBar';
import { IDashboard } from './types';
import { Button } from 'Shared/components';
import { SwitchMetric } from './Metrics/SwitchMetric';
import { ModalDynamic } from '../../ModalDynamic/components/ModalDynamic';
import { useActionButton } from '../../../Packages/Helpers/src/useActionButton';
import { useRecoilValue } from 'recoil';
import { IDataModal } from '../../ModalDynamic/components/types';
import { NoData } from './NoData';
import { AgGridCard } from './Card/AgGridCard';

const AgGridDashboard: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement => {
  // const [trans] = useTrans('Dashboard');
  const { data: context, logout } = useContext(SecurityContext);
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const { send, data: response, callState } = useApi<IDashboard>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { modalData: recoilData, actionButton } = useActionButton({
    jwt,
    setIsModalOpen,
  });
  const modal: IDataModal = useRecoilValue<any>(recoilData);

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

  useEffect(() => {
    console.log(response);
  }, [response]);

  if (!user.isLogged()) {
    logout();
  }

  return (
    <>
      <SwitchCallState
        callState={callState}
        states={{
          IS_LOADING: <IsLoading />,
          NO_DATA: <NoData />,
          SERVER_ERROR: <NoData />,
        }}
      >
        <BreadCrumb values={['Dashboard']} />
        {response?.data && (
          <AgGridDashboardStyled>
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
                    ? response?.data.metrics.indicator.map(
                        (indicator, index) => (
                          <SwitchMetric indicator={indicator} key={index} />
                        ),
                      )
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
                    style={{ height: '400px' }}
                  >
                    <Card
                      card={card}
                      key={index}
                      triggerAction={actionButton}
                    />
                  </Grid>
                ))}
              {response?.data?.ag_cards?.visible &&
                response?.data.ag_cards.card.map((card, index) => (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    key={index}
                    style={{ height: '400px' }}
                  >
                    <AgGridCard
                      card={card}
                      key={index}
                      triggerAction={actionButton}
                    />
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
          </AgGridDashboardStyled>
        )}
      </SwitchCallState>
    </>
  );
};

export { AgGridDashboard };
