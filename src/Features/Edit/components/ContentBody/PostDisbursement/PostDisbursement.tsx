import React, { useContext } from 'react';
import { EditValidationContext } from 'Features';
import { ContentTitle } from '../../ContentTitle/ContentTitle';
import { ContentHeader } from '../../ContentHeader/ContentHeader';
import { FormControls } from '../../Control';

export const PostDisbursement: React.FC = (): React.ReactElement | null => {
  const { data } = useContext(EditValidationContext);

  if (!data) {
    return null;
  }

  return (
    <>
      <ContentHeader />
      <ContentTitle>Post Décaissement</ContentTitle>
      <FormControls controls={data.currentSection.chapters[0].controls} />
    </>
  );
};
