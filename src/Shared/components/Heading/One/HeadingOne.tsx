import React from 'react';
import { HeadingOneStyled } from './HeadingOne.style';
import { IColorVariant } from 'Styles';

interface IProps {
  children: React.ReactNode;
  variant?: keyof IColorVariant;
}

export const HeadingOne: React.FC<IProps> = ({ variant = 'main', children }): React.ReactElement => {
  return <HeadingOneStyled variant={variant}>{children}</HeadingOneStyled>;
};
