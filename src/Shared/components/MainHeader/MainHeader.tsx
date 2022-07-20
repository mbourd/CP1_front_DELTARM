import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './translations';
import { MainHeaderStyled } from './MainHeader.style';
import { router, SecurityContext, useApi, useTrans } from 'Services';
import { IconsContainer } from './IconsContainer/IconsContainer';
import { MainNav } from '..';

export const MainHeader: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('MainHeader');
  const dashboardPath = router.generatePath('dashboard');
  const { data: context } = useContext(SecurityContext);
  const { send: clientInfos, data: dataClientInfos } = useApi<any>();

  useEffect(() => {
    if (context.cli_id) {
      clientInfos('clientInfo', {}, { cli_id: context.cli_id });
    }
  }, [context.cli_id, clientInfos]);

  if (dataClientInfos?.data[0].cli_name) {
    localStorage.setItem('client_info', JSON.stringify(dataClientInfos?.data));
    document.title = 'CP1 - ' + dataClientInfos?.data[0].cli_name;
  }

  return (
    <MainHeaderStyled id={'main-header'}>
      {dataClientInfos?.data[0].cli_logo_url && (
        <Link to={dashboardPath ? dashboardPath : '/'} className={'brand'}>
          <img
            src={dataClientInfos?.data[0].cli_logo_url}
            alt={trans('brand')}
          />
        </Link>
      )}
      {dataClientInfos?.data[0].cli_app_name && (
        <p className={'app-name'}>{dataClientInfos?.data[0].cli_app_name}</p>
      )}
      <IconsContainer />
      <MainNav />
    </MainHeaderStyled>
  );
};
