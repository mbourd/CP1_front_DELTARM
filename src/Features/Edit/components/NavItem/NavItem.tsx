import React from 'react';
import { ListItem } from '@material-ui/core';
import { NavItemTextStyled, NavItemStyled } from './NavItem.style';
import { LockedIcon } from 'Styles';

interface INavItem {
  label: string;
  locked?: boolean;
  active?: boolean;
}

export const NavItem: React.FC<INavItem> = ({ label, locked = false, active = false }): React.ReactElement => {
  return (
    <ListItem disableGutters>
      <NavItemStyled className={'item'} locked={locked} active={active}>
        {locked ? <LockedIcon /> : null}
        <NavItemTextStyled>{label}</NavItemTextStyled>
      </NavItemStyled>
    </ListItem>
  );
};
