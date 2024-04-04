import styled from 'styled-components';
import { IColor } from '../../../types';

interface IProps {
  $colorType: keyof IColor;
}

export const FormLabelStyled = styled.span<IProps>`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.xSmall};
  color: ${({ theme, $colorType }) => theme.color[$colorType].main};
  font-family: ${({ theme }) => theme.font.medium.main};
  font-size: ${({ theme }) => theme.sizing.normal};
`;
