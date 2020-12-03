import React, { useContext } from 'react';
import { EditContext } from 'Features';
import { ContentTitle } from '../../ContentTitle/ContentTitle';
import { ContentHeader } from '../../ContentHeader/ContentHeader';
import { SettingUpStyled } from './SettingUp.style';
import { DisplayControl } from '../../Control';

export const SettingUp: React.FC = (): React.ReactElement | null => {
  const { data } = useContext(EditContext);

  if (!data) {
    return null;
  }

  return (
    <SettingUpStyled>
      <ContentHeader />
      <ContentTitle>Mise en place</ContentTitle>
      <DisplayControl controls={data.currentSection.chapters[0].controls} />
    </SettingUpStyled>
  );
};
