import React from 'react';
import { Link } from 'react-router-dom';
import './translations';
import { MainHeaderStyled } from './MainHeader.style';
import { router, SecurityContext, useApi } from 'Services';
import { IconsContainer } from './IconsContainer/IconsContainer';
import { MainNav, useTransMainHeader } from '..';

export const MainHeader: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement => {
  /**
   * -----------------------------------------------------------
   * HOOKS
   * -----------------------------------------------------------
   */
  const { trans } = useTransMainHeader();
  const { data: context } = React.useContext(SecurityContext);
  const { send: sendClientInfos, data: clientInfos } = useApi<any>();

  /**
   * -----------------------------------------------------------
   * FUNCTIONS
   * -----------------------------------------------------------
   */
  if (clientInfos?.data[0].cli_name) {
    localStorage.setItem('client_info', JSON.stringify(clientInfos?.data));
    document.title = 'ADA - ' + clientInfos?.data[0].cli_name;
  }

  /**
   * -----------------------------------------------------------
   * VARIABLES
   * -----------------------------------------------------------
   */
  const dashboardPath = router.generatePath('dashboard');

  /**
   * -----------------------------------------------------------
   * CYCLE LIFE
   * -----------------------------------------------------------
   */
  React.useEffect(() => {
    if (context.cli_id) {
      sendClientInfos('clientInfo', {}, { cli_id: context.cli_id });
    }
  }, [context.cli_id, sendClientInfos]);

  /**
   * -----------------------------------------------------------
   * RENDER
   * -----------------------------------------------------------
   */
  return (
    <MainHeaderStyled id={'main-header'}>
      {clientInfos?.data[0].cli_logo_url && (
        <Link to={dashboardPath ? dashboardPath : '/'} className={'brand'}>
          <img src={clientInfos?.data[0].cli_logo_url} alt={trans('brand')} />
        </Link>
      )}
      {clientInfos?.data[0].cli_app_name && (
        <p className={'app-name'}>{clientInfos?.data[0].cli_app_name}</p>
      )}
      <IconsContainer />
      <MainNav />
    </MainHeaderStyled>
  );
};
