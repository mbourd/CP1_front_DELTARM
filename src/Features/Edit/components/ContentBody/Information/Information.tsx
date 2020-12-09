import React, { useContext } from 'react';
import { InformationStyled } from './Information.style';
import { EditValidationContext } from 'Features';
import { ContentHeader } from '../../ContentHeader/ContentHeader';
import { DisplayControl } from '../../Control';
import { ContentTitle } from '../../ContentTitle/ContentTitle';

export const Information: React.FC = (): React.ReactElement | null => {
  const { data } = useContext(EditValidationContext);

  if (!data) {
    return null;
  }

  return (
    <InformationStyled>
      <ContentHeader />
      {data.currentSection.chapters.map((chapter, index) => {
        return (
          <React.Fragment key={index}>
            <ContentTitle>{chapter.label}</ContentTitle>
            <DisplayControl controls={chapter.controls} />
          </React.Fragment>
        );
      })}
    </InformationStyled>
  );
};
