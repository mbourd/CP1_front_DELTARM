import React from 'react';
import { HeaderStyled } from './Header.style';
import { ICardHeader } from '../types';

type HeaderProps = {
  color: ICardHeader['$color'];
};

export const Header: React.FC<HeaderProps> = ({
  children,
  color,
}): React.ReactElement => {
  return <HeaderStyled $color={color}>{children}</HeaderStyled>;
};
