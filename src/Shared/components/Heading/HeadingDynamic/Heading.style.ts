import styled from 'styled-components/macro';
import { IColorVariant } from 'Styles';

interface IProps {
  $variant: keyof IColorVariant;
}

export const HeadingStyled = styled.h1<IProps>`
  color: ${({ theme, $variant }) => theme.color.heading[$variant]};
  font-family: ${({ theme }) => theme.font.heading.main};
  font-size: ${({ theme }) => theme.sizing.heading.one};
  line-height: 40px;
  margin: ${({ theme }) => theme.spacing.small} 0;
  text-align: center;
`;
