import React from 'react';
import { ListItem } from '@material-ui/core';
import { NavItemTextStyled, NavItemStyled } from './NavItem.style';
import { LockedIcon } from 'Styles';
import { ISection } from '../../types';
import { BPITooltip } from 'Shared/components';

interface INavItem {
  item: ISection;
  active: boolean;
  onClick?: (id: string) => void;
  sectionLabel: string | null;
}

export const NavItem: React.FC<React.PropsWithChildren<INavItem>> = ({
  item,
  onClick,
  active = false,
  sectionLabel,
}): React.ReactElement => {
  let content = (
    <NavItemStyled className={'item'} $locked={item.locked} $active={active}>
      {item.locked && <LockedIcon />}
      <NavItemTextStyled>{sectionLabel}</NavItemTextStyled>
    </NavItemStyled>
  );

  if (item.tooltip) {
    content = (
      <BPITooltip title={item.tooltip} placement="right">
        {content}
      </BPITooltip>
    );
  }

  return (
    <ListItem
      disableGutters
      onClick={onClick && !active ? () => onClick(item.id) : undefined}
    >
      {content}
    </ListItem>
  );
};
