import React from 'react';
import { StairsLoaderStyled } from './StairsLoader.style';
import { IStairsLoader } from '../types';
import { useColor } from '../../../hooks';

type StairsLoaderProps = {
  barsColor?: string;
  ballColor?: string;
  /**
   * Animation speed in second.
   * @default 4
   */
  speed?: number;
  size?: 'sm' | 'md' | 'lg';
};

export const StairsLoader: React.FC<StairsLoaderProps> = ({
  barsColor,
  ballColor,
  speed = 3.2,
  size = 'lg',
}): React.ReactElement => {
  const color = useColor();

  return (
    <StairsLoaderStyled
      $barsColor={barsColor || color.primary.main}
      $ballColor={ballColor || color.secondary.main}
      $speed={speed}
      $size={size}
      className={'_LoaderStairs'}
    >
      <div className={'_LoaderStairsBar'} />
      <div className={'_LoaderStairsBar'} />
      <div className={'_LoaderStairsBar'} />
      <div className={'_LoaderStairsBar'} />
      <div className={'_LoaderStairsBar'} />
      <div className={'_LoaderStairsBall'} />
    </StairsLoaderStyled>
  );
};
