import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './translations';
import { MainHeaderStyled } from './MainHeader.style';
import { AppContext, router, useTrans } from 'Services';
import { IconsContainer } from './IconsContainer/IconsContainer';
import { MainNav } from '..';

export const MainHeader: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('MainHeader');
  const dashboardPath = router.generatePath('dashboard');
  const { titleName, logoUrl, appName } = useContext(AppContext);

  if (titleName) {
    document.title = 'CP1 - ' + titleName;
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
      <MainNav />
    </MainHeaderStyled>
  );
};
