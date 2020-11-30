import React from 'react';
import { InformationStyled } from './Information.style';
import { ContentHeader } from '../ContentHeader/ContentHeader';

export const Information: React.FC = (): React.ReactElement => {
  return (
    <InformationStyled>
      <ContentHeader />
    </InformationStyled>
  );
};
