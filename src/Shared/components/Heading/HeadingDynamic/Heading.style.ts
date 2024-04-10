import styled from 'styled-components';
import { IColorVariant } from 'Styles';

interface IProps {
  $variant: keyof IColorVariant;
}

export const HeadingStyled = styled.h1<IProps>`
  margin: ${({ theme }) => theme.spacing.small} 0;
  color: ${({ theme, $variant }) => theme.color.heading[$variant]};
  font-family: ${({ theme }) => theme.font.heading.main};
  font-size: ${({ theme }) => theme.sizing.heading.one};
  line-height: 40px;
  text-align: center;
`;
