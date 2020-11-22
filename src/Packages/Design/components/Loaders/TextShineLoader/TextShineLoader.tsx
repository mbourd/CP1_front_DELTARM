import React from 'react';
import { TextShineLoaderStyled } from './TextShineLoader.style';
import { ITextShineLoader } from '../types';

export const TextShineLoader: React.FC<ITextShineLoader> = ({
  children,
  text,
  speed = 4,
  colors = ['#000000', '#FFFFFF'],
}): React.ReactElement => {
  return (
    <TextShineLoaderStyled speed={speed} colors={colors} className={'text-shine-loader'}>
      {text || children}
    </TextShineLoaderStyled>
  );
};
