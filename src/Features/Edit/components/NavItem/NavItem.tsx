import React from 'react';
import { ListItem } from '@material-ui/core';
import { NavItemTextStyled, NavItemStyled } from './NavItem.style';
import { LockedIcon } from 'Styles';
import { ISection } from '../../types';

interface INavItem {
  item: ISection;
  active: boolean;
  onClick?: (id: string) => void;
}

export const NavItem: React.FC<INavItem> = ({ item, onClick, active = false }): React.ReactElement => {
  return (
    <ListItem disableGutters onClick={onClick && !active ? () => onClick(item.id) : undefined}>
      <NavItemStyled className={'item'} locked={item.locked} active={active}>
        {item.locked ? <LockedIcon /> : null}
        <NavItemTextStyled>{item.label}</NavItemTextStyled>
      </NavItemStyled>
    </ListItem>
  );
};
