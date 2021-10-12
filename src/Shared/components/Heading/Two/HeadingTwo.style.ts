import styled from 'styled-components/macro';
import { IColorVariant } from 'Styles';

interface IProps {
  variant: keyof IColorVariant;
}

export const HeadingTwoStyled = styled.h1<IProps>`
  color: ${({ theme, variant }) => theme.color.heading[variant]};
  font-family: ${({ theme }) => theme.font.heading.main};
  font-size: ${({ theme }) => theme.sizing.heading.three};
  line-height: 20px;
  margin: ${({ theme }) => theme.spacing.xSmall} 0;
  text-align: center;
`;
