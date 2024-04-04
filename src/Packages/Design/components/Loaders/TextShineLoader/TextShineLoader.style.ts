import styled from 'styled-components';
import { ITextShineLoader } from '../types';

/* stylelint-disable */
export const TextShineLoaderStyled = styled.span<
  Required<Omit<ITextShineLoader, 'text'>>
>`
  animation: shine 3s linear infinite;
  background: ${({ $colors }) => {
    const step = 100 / $colors.length;
    $colors = $colors.map((color, k) => `${color} ${step * k}%`);

    return `linear-gradient(to right, ${$colors.join(', ')})`;
  }};
  /* background-clip: text; */
  /* text-fill-color: transparent; */
  background-clip: text;
  background-size: 200% auto;
  -webkit-text-fill-color: transparent;

  @keyframes shine {
    to {
      background-position: -200% center;
    }
  }
`;
