import React, { useContext } from 'react';
import { EditValidationContext } from 'Features';
import { ContentHeader } from '../../ContentHeader/ContentHeader';
import { FormControls } from '../../Control';

export const SettingUp: React.FC = (): React.ReactElement | null => {
  const { data } = useContext(EditValidationContext);

  if (!data) {
    return null;
  }

  return (
    <>
      <ContentHeader />
      <FormControls chapters={data?.currentSection.chapters} />
    </>
  );
};
