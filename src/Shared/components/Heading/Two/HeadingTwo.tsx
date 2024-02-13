import React from 'react';
import { HeadingTwoStyled } from './HeadingTwo.style';
import { IColorVariant } from 'Styles';

interface IProps {
  variant?: keyof IColorVariant;
}

export const HeadingTwo: React.FC<React.PropsWithChildren<IProps>> = ({
  variant = 'main',
  children,
}): React.ReactElement => {
  return <HeadingTwoStyled $variant={variant}>{children}</HeadingTwoStyled>;
};
