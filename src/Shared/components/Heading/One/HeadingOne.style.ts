import styled from 'styled-components/macro';
import { IColorVariant } from 'Styles';

interface IProps {
  variant: keyof IColorVariant;
}

export const HeadingOneStyled = styled.h1<IProps>`
  color: ${({ theme, variant }) => theme.color.heading[variant]};
  font-family: ${({ theme }) => theme.font.heading.main};
  font-size: ${({ theme }) => theme.sizing.heading.one};
  margin: ${({ theme }) => theme.spacing.xLarge} 0;
  text-align: center;
`;
