import styled from 'styled-components';
import { IColorVariant } from 'Styles';

interface IProps {
  $variant: keyof IColorVariant;
}

export const HeadingTwoStyled = styled.h1<IProps>`
  margin: ${({ theme }) => theme.spacing.small} 0;
  color: ${({ theme, $variant }) => theme.color.heading[$variant]};
  font-family: ${({ theme }) => theme.font.heading.main};
  font-size: ${({ theme }) => theme.sizing.heading.three};
  line-height: 20px;
  text-align: center;
`;
