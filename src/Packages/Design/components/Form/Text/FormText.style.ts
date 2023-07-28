import styled from 'styled-components/macro';
import { IColor } from '../../../types';

interface IProps {
  $colorType: keyof IColor;
}

export const FormTextStyled = styled.span<IProps>`
  color: ${({ theme, $colorType }) => theme.color[$colorType].main};
  font-family: ${({ theme }) => theme.font.text.main};
  font-size: ${({ theme }) => theme.sizing.normal};
`;
