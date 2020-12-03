import React, { useContext } from 'react';
import { EditContext } from 'Features';
import { ContentTitle } from '../../ContentTitle/ContentTitle';
import { ContentHeader } from '../../ContentHeader/ContentHeader';
import { DisplayControl } from '../../Control';

export const Disbursement: React.FC = (): React.ReactElement | null => {
  const { data } = useContext(EditContext);

  if (!data) {
    return null;
  }

  return (
    <>
      <ContentHeader />
      <ContentTitle>Décaissement</ContentTitle>
      <DisplayControl controls={data.currentSection.chapters[0].controls} />
    </>
  );
};
