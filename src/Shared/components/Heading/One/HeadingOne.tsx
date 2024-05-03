import React from 'react';
import { HeadingOneStyled } from './HeadingOne.style';
import { IColorVariant } from 'Styles';

interface IProps {
  variant?: keyof IColorVariant;
}

export const HeadingOne: React.FC<React.PropsWithChildren<IProps>> = ({
  variant = 'main',
  children,
}): React.ReactElement => {
  //   console.log('heading title', children);

  return <HeadingOneStyled $variant={variant}>{children}</HeadingOneStyled>;
};
