import React from 'react';
import { HeaderStyled } from './Header.style';
import { ICardHeader } from '../types';

export const Header: React.FC<
  React.PropsWithChildren<Omit<ICardHeader, 'children'>>
> = ({ children, color }): React.ReactElement => {
  return <HeaderStyled $backgroundColor={color}>{children}</HeaderStyled>;
};
