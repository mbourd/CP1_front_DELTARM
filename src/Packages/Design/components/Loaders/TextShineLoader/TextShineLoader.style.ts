import styled from 'styled-components';
import { ITextShineLoader } from '../types';

/* stylelint-disable */
export const TextShineLoaderStyled = styled.span<
  Required<Omit<ITextShineLoader, 'text'>>
>`
  background: ${({ $colors }) => {
    const step = 100 / $colors.length;
    $colors = $colors.map((color, k) => `${color} ${step * k}%`);

    return `linear-gradient(to right, ${$colors.join(', ')})`;
  }};
  background-size: 200% auto;
  //background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s linear infinite;

  @keyframes shine {
    to {
      background-position: -200% center;
    }
  }
`;
