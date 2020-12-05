import React from 'react';
import { FileCommentBodyItemStyled } from './FileCommentBodyItem.style';
import { Avatar, Grid } from '@material-ui/core';

export const FileCommentBodyItem: React.FC = (): React.ReactElement => {
  return (
    <FileCommentBodyItemStyled>
      <Grid container alignItems={'center'} wrap={'nowrap'}>
        <Grid item>
          <Avatar>ND</Avatar>
        </Grid>
        <Grid item>
          <p className={'author'}>
            Nicolas Dupont - <span className={'date'}>02/10/2020 à 23:10:32</span>
          </p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis et expedita fuga impedit ipsa
          ipsam maxime mollitia nesciunt odio officia quaerat quia quibusdam ratione recusandae saepe suscipit, totam!
          Quisquam!
        </Grid>
      </Grid>
    </FileCommentBodyItemStyled>
  );
};
