import React, { useContext } from 'react';
import { EditValidationContext } from 'Features';
import { ContentTitle } from '../../ContentTitle/ContentTitle';
import { ContentHeader } from '../../ContentHeader/ContentHeader';
import { DisplayControl } from '../../Control';

export const SettingUp: React.FC = (): React.ReactElement | null => {
  const { data } = useContext(EditValidationContext);

  if (!data) {
    return null;
  }

  return (
    <>
      <ContentHeader />
      {data.currentSection.chapters.map((chapter, index) => {
        return (
          <React.Fragment key={index}>
            <ContentTitle>{chapter.label}</ContentTitle>
            <DisplayControl controls={chapter.controls} />
          </React.Fragment>
        );
      })}
    </>
  );
};
