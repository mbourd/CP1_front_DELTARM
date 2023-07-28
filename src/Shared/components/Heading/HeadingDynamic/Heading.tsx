import React from 'react';
import { HeadingStyled } from './Heading.style';
import { IColorVariant } from 'Styles';

export interface IProps {
  children: React.ReactNode;
  variant?: keyof IColorVariant;
  style?: React.CSSProperties;
}

export const Heading: React.FC<IProps> = ({
  variant = 'main',
  children,
  style,
}): React.ReactElement => {
  return (
    <HeadingStyled style={style} $variant={variant}>
      {children}
    </HeadingStyled>
  );
};
