import React from 'react';
import { HeaderStyled } from './Header.style';
import { ICardHeader } from '../types';

export const Header: React.FC<ICardHeader> = ({
  children,
  color,
}): React.ReactElement => {
  return <HeaderStyled $backgroundColor={color}>{children}</HeaderStyled>;
};
