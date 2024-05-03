import React from 'react';
import { HeaderStyled } from './Header.style';
import { ICardHeader } from '../types';

export const Header: React.FC<React.PropsWithChildren<ICardHeader>> = ({
  children,
  color,
}): React.ReactElement => {
  return <HeaderStyled color={color}>{children}</HeaderStyled>;
};
