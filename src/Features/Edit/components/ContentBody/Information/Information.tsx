import React, { useCallback, useContext, useState } from 'react';
import { InformationStyled } from './Information.style';
import { TabHeader } from './TabHeader/TabHeader';
import { TabContent } from './TabContent/TabContent';
import { EditValidationContext } from 'Features';
import { IControl } from 'Features/Edit/types';
import { ContentHeader } from '../../ContentHeader/ContentHeader';
import { DisplayControl } from '../../Control';

export const Information: React.FC = (): React.ReactElement | null => {
  const [current, setCurrent] = useState(0);
  const { data } = useContext(EditValidationContext);

  const setCurrentContent = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  if (!data) {
    return null;
  }

  const controls: IControl[] = data.currentSection.chapters[current].controls;

  return (
    <InformationStyled>
      <ContentHeader />
      <TabHeader chapters={data.currentSection.chapters} setCurrentContent={setCurrentContent} index={current} />
      <TabContent>
        <DisplayControl controls={controls} />
      </TabContent>
    </InformationStyled>
  );
};
