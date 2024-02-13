import styled from 'styled-components';
import { IColor } from '../../../types';

interface IProps {
  $colorType: keyof IColor;
}

export const FormLabelStyled = styled.span<IProps>`
  color: ${({ theme, $colorType }) => theme.color[$colorType].main};
  display: inline-block;
  font-family: ${({ theme }) => theme.font.medium.main};
  font-size: ${({ theme }) => theme.sizing.normal};
  margin-bottom: ${({ theme }) => theme.spacing.xSmall};
`;
