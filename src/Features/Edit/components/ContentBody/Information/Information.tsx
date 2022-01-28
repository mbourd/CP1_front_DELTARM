import React, { useContext } from 'react';
import { InformationStyled } from './Information.style';
import { EditValidationContext } from 'Features';
import { ContentHeader } from '../../ContentHeader/ContentHeader';
import { FormControls } from '../../Control';

export const Information: React.FC = (): React.ReactElement | null => {
  const { data } = useContext(EditValidationContext);

  if (!data) {
    return null;
  }

  return (
    <InformationStyled>
      <ContentHeader />
      <FormControls chapters={data?.currentSection.chapters} />
    </InformationStyled>
  );
};
