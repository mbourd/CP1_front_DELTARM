import React, {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Grid } from '@material-ui/core';

import { useApi, useSecurity, SecurityContext, router } from 'Services';
import { BreadCrumb, Heading } from 'Shared/components';
import { DashboardStyled, MetricsContainerStyled } from './Dashboard.style';
import { ButtonContainerStyled } from './Dashboard.style';
import { Card } from './Card/Card';
import { IsLoading } from './IsLoading';
import { SearchBar } from './Search/SearchBar';
import { ICardValueItemParams, IDashboard } from './types';
import { Button } from 'Shared/components';
import { SwitchMetric } from './Metrics/SwitchMetric';
import { DashboardModal } from './Search/Modal/DashboardModal';

const DashboardDynamic: React.FC = (): React.ReactElement => {
  const { send, data: response } = useApi<IDashboard>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalRoute, setCurrentModalRoute] = useState<string>('');

  const { user } = useSecurity();
  const { logout } = useContext(SecurityContext);

  if (!user.isLogged()) {
    logout();
  }

  useEffect(() => {
    send('dashboardControlPermanent');
  }, [send]);

  const handleClickCardIcons = useCallback(
    (action: ICardValueItemParams | null) => {
      switch (action?.target) {
        case 'blank':
          return window.open(action.route, '_blank');
        case 'modal':
          setIsModalOpen(true);
          setCurrentModalRoute(action.route);

          return;
        case 'self':
          return router.redirectToUrl(action.route, action?.params);
      }
    },
    [],
  );

  const onClickCustomButtons = useCallback((route: string) => {
    // click on custom buttons
    console.log('CUSTOM BUTTON ROUTE TO CALL: ' + route);
  }, []);

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
            <Grid container component={'span'} alignItems={'center'}>
              {response?.data.metrics.visible
                ? response.data.metrics.indicator.map((indicator, index) => (
                    <SwitchMetric indicator={indicator} key={index} />
                  ))
                : null}
            </Grid>
          </MetricsContainerStyled>
          <Grid container>
            {response?.data.cards.visible &&
              response.data.cards.card.map((card, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    card={card}
                    key={index}
                    actionIcons={handleClickCardIcons}
                  />
                </Grid>
              ))}
          </Grid>
          {isModalOpen ? (
            <DashboardModal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              route={currentModalRoute}
            />
          ) : null}
        </DashboardStyled>
      </Suspense>
    </>
  );
};

export { DashboardDynamic };
