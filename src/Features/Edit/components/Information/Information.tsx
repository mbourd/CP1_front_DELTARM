import React from 'react';
import { InformationStyled } from './Information.style';
import { ContentHeader } from '../ContentHeader/ContentHeader';
import { ContentTitle } from '../ContentTitle/ContentTitle';

export const Information: React.FC = (): React.ReactElement => {
  return (
    <InformationStyled>
      <ContentHeader />
      <ContentTitle>Mise en place</ContentTitle>
    </InformationStyled>
  );
};
