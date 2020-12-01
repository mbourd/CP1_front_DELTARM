import React, { useCallback, useState } from 'react';
import { InformationStyled } from './Information.style';
import { ContentHeader } from '../ContentHeader/ContentHeader';
import { TabHeader } from './TabHeader/TabHeader';
import { TabContent } from './TabContent/TabContent';

export const Information: React.FC = (): React.ReactElement => {
  const [current, setCurrent] = useState(0);

  const setCurrentContent = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  let content = null;

  if (current === 0) {
    content = <p>Informations obligatoires</p>;
  }

  if (current === 1) {
    content = <p>Informations facultatives</p>;
  }

  return (
    <InformationStyled>
      <ContentHeader />
      <TabHeader setCurrentContent={setCurrentContent} index={current} />
      <TabContent>{content}</TabContent>
    </InformationStyled>
  );
};
