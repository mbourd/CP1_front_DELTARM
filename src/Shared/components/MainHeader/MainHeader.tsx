import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { MainHeaderStyled } from './MainHeader.style';
import './translations';
import logo from './logo.png';
import { router, useTrans } from 'Services';
import { MenuIcon } from 'Styles';
import { IconsContainer } from './IconsContainer';
import { FlagsContainer } from './FlagsContainer';

export const MainHeader: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('MainHeader');
  const [active, isActive] = useState(false);
  const dashboardPath = router.generatePath('dashboard');

  const toggleMenu = useCallback(() => {
    isActive(!active);
  }, [active]);

  return (
    <MainHeaderStyled id={'main-header'}>
      <Link to={dashboardPath ? dashboardPath : ''} className={'brand'}>
        <img src={logo} alt={trans('brand')} />
      </Link>
      <IconsContainer />
      <FlagsContainer />
      <MenuIcon className={'menu' + (active ? ' active' : '')} onClick={toggleMenu} fontSize={'default'} />
    </MainHeaderStyled>
  );
};
