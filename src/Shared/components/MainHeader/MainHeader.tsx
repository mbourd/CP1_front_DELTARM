import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './translations';
import { MainHeaderStyled } from './MainHeader.style';
import { router, SecurityContext, useApi, useTrans } from 'Services';
import { IconsContainer } from './IconsContainer/IconsContainer';
// import { FlagsContainer } from './FlagsContainer/FlagsContainer';
import { MainNav } from '..';

export const MainHeader: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('MainHeader');
  const dashboardPath = router.generatePath('dashboard');
  const { data } = useContext(SecurityContext);

  const clientId = data.cli_id; // cliId from JWT security Context

  const { send, data: clientInfos } = useApi<any>({ waitForAuthenticated: true });

  useEffect(() => {
    send('clientInfo', {}, { cli_id: clientId });
  }, [send, clientId]);

  const logoUrl = clientInfos?.data[0].cli_logo_url;
  const appName = clientInfos?.data[0].cli_app_name;
  const name = clientInfos?.data[0].cli_name;

  if (name) {
    document.title = 'CP1 - ' + name;
  }

  return (
    <MainHeaderStyled id={'main-header'}>
      {logoUrl && (
        <Link to={dashboardPath ? dashboardPath : '/'} className={'brand'}>
          <img src={logoUrl} alt={trans('brand')} />
        </Link>
      )}
      {appName && <p className={'app-name'}>{appName}</p>}
      <IconsContainer />
      {/* <FlagsContainer /> */}
      <MainNav />
    </MainHeaderStyled>
  );
};
