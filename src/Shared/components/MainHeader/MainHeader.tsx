import React from 'react';
import { Link } from 'react-router-dom';

import './translations';
import { MainHeaderStyled } from './MainHeader.style';
import logo from './logo.png';
import { router, useTrans } from 'Services';
import { IconsContainer } from './IconsContainer/IconsContainer';
import { FlagsContainer } from './FlagsContainer/FlagsContainer';
import { MainNav } from '..';

export const MainHeader: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('MainHeader');
  const dashboardPath = router.generatePath('dashboard');

  return (
    <MainHeaderStyled id={'main-header'}>
      <Link to={dashboardPath ? dashboardPath : '/'} className={'brand'}>
        <img src={logo} alt={trans('brand')} />
      </Link>
      <IconsContainer />
      <FlagsContainer />
      <MainNav />
    </MainHeaderStyled>
  );
};
