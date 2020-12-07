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
      <ContentTitle>Mise en place</ContentTitle>
      <DisplayControl controls={data.currentSection.chapters[0].controls} />
    </>
  );
};
