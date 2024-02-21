import React from 'react';
import { TextShineLoaderStyled } from './TextShineLoader.style';
import { ITextShineLoader } from '../types';

type TextShineLoaderProps = {
  text: ITextShineLoader['text'];
  /**
   * Gradient colors. Provide a least two colors.
   * @default ['#000000', '#FFFFFF']
   */
  colors?: ITextShineLoader['$colors'];
  /**
   * Animation speed in second.
   * @default 4
   */
  speed?: ITextShineLoader['$speed'];
};

export const TextShineLoader: React.FC<
  React.PropsWithChildren<TextShineLoaderProps>
> = ({
  children,
  text,
  speed = 4,
  colors = ['#000000', '#FFFFFF'],
}): React.ReactElement => {
  return (
    <TextShineLoaderStyled
      $speed={speed}
      $colors={colors}
      className={'_LoaderTextShine'}
    >
      {text || children}
    </TextShineLoaderStyled>
  );
};
