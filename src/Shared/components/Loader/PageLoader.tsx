import React from 'react';
import { StairsLoader, TextShineLoader } from 'Shared/components';
import { useTheme } from 'Styles';
import { PageLoaderStyled } from './PageLoader.style';

interface IProps {
  text: string;
}

export const PageLoader: React.FC<React.PropsWithChildren<IProps>> = ({
  text,
}): React.ReactElement => {
  const theme = useTheme();

  return (
    <PageLoaderStyled>
      <StairsLoader
        barsColor={theme.color.primary.main}
        ballColor={theme.color.secondary.main}
      />
      <p className={'text-container'}>
        <TextShineLoader
          text={text}
          colors={[
            'rgba(255, 205, 0, 1)',
            'rgba(255, 205, 0, 0.9)',
            'rgba(255, 205, 0, 0.8)',
            'rgba(255, 205, 0, 0.7)',
            'rgba(255, 205, 0, 0.6)',
            'rgba(255, 205, 0, 0.5)',
            'rgba(255, 205, 0, 0.4)',
            'rgba(255, 205, 0, 0.3)',
            'rgba(255, 205, 0, 0.2)',
            'rgba(255, 205, 0, 0.1)',
            'rgba(255, 205, 0, 1)',
          ]}
        />
      </p>
    </PageLoaderStyled>
  );
};
