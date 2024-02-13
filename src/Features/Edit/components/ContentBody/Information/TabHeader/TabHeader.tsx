import React from 'react';
import { Grid } from '@material-ui/core';
import { TabHeaderStyled } from './TabHeader.style';
import { IChapter } from 'Features/Edit/types';

interface ITabHeader {
  index: number;
  setCurrentContent: (current: number) => void;
  chapters: IChapter[];
}

export const TabHeader: React.FC<React.PropsWithChildren<ITabHeader>> = ({
  chapters,
  index,
  setCurrentContent,
}): React.ReactElement => {
  return (
    <TabHeaderStyled>
      <Grid container alignItems={'center'} wrap={'nowrap'}>
        {chapters.map((chapter, key) => {
          const label = chapter.label.replace(/informations? */i, '');

          return (
            <Grid
              item
              xs={6}
              className={index === key ? 'active' : ''}
              onClick={() => setCurrentContent(key)}
              key={key}
            >
              {label}
            </Grid>
          );
        })}
      </Grid>
    </TabHeaderStyled>
  );
};
