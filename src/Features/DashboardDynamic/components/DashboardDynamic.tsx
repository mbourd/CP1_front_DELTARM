import React, { Suspense, useContext, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import { useApi, useSecurity, SecurityContext } from 'Services';
import { BreadCrumb, Heading } from 'Shared/components';
import { DashboardStyled, MetricsContainerStyled } from './Dashboard.style';
import { ButtonContainerStyled } from './Dashboard.style';
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

const DashboardDynamic: React.FC = (): React.ReactElement => {
  const { send, data: response } = useApi<IDashboard>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const { modalData: recoilData, actionButton } = useActionButton(
    jwt,
    setIsModalOpen,
  );
  const modal: IDataModal = useRecoilValue<any>(recoilData);

  const { logout } = useContext(SecurityContext);

  if (!user.isLogged()) {
    logout();
  }

  useEffect(() => {
    send('dashboardControlPermanent');
  }, [send]);

  return (
    <>
      <Suspense fallback={<IsLoading />}>
        <BreadCrumb values={['Dashboard']} />
        <DashboardStyled>
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
          <Grid container>
            {response?.data.cards.visible &&
              response?.data.cards.card.map((card, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card card={card} key={index} actionIcons={actionButton} />
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
        </DashboardStyled>
      </Suspense>
    </>
  );
};

export { DashboardDynamic };
