import React from 'react';
import { Grid } from '@material-ui/core';
import { TabHeaderStyled } from './TabHeader.style';
import { useTrans } from 'Services';

interface ITabHeader {
  index: number;
  setCurrentContent: (current: number) => void;
}

export const TabHeader: React.FC<ITabHeader> = ({ index, setCurrentContent }): React.ReactElement => {
  const [trans] = useTrans('Edit');

  return (
    <TabHeaderStyled>
      <Grid container alignItems={'center'} wrap={'nowrap'}>
        <Grid item xs={6} className={index === 0 ? 'active' : ''} onClick={() => setCurrentContent(0)}>
          {trans('required')}
        </Grid>
        <Grid item xs={6} className={index === 1 ? 'active' : ''} onClick={() => setCurrentContent(1)}>
          {trans('optional')}
        </Grid>
      </Grid>
    </TabHeaderStyled>
  );
};
