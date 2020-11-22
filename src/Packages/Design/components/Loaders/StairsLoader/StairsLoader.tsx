import React from 'react';
import { StairsLoaderStyled } from './StairsLoader.style';
import { IStairsLoader } from '../types';

export const StairsLoader: React.FC<IStairsLoader> = ({
  barsColor,
  ballColor = barsColor,
  speed = 4,
}): React.ReactElement => {
  return (
    <StairsLoaderStyled barsColor={barsColor} ballColor={ballColor} speed={speed} className={'stairs-loader'}>
      <div className={'loader__bar'} />
      <div className={'loader__bar'} />
      <div className={'loader__bar'} />
      <div className={'loader__bar'} />
      <div className={'loader__bar'} />
      <div className={'loader__ball'} />
    </StairsLoaderStyled>
  );
};
