import React from 'react';
import { FileCommentBodyItemStyled } from './FileCommentBodyItem.style';
import { Avatar, Grid } from '@material-ui/core';
import { IFileComment } from '../../../types';
import { randomColor } from 'Styles';

interface IFileCommentBodyItem {
  comment: IFileComment;
}

export const FileCommentBodyItem: React.FC<
  React.PropsWithChildren<IFileCommentBodyItem>
> = ({ comment }): React.ReactElement => {
  const lastFirst = comment.user.split(' ');
  let firstLetters = '';
  if (lastFirst.length > 0) {
    firstLetters += lastFirst[0].charAt(0);
  }

  if (lastFirst.length > 1) {
    firstLetters += lastFirst[1].charAt(0);
  }

  return (
    <FileCommentBodyItemStyled $bgc={randomColor()}>
      <Grid container alignItems={'center'} wrap={'nowrap'}>
        <Grid item>
          <Avatar>{firstLetters}</Avatar>
        </Grid>
        <Grid item>
          <p className={'author'}>
            {comment.user} - <span className={'date'}>{comment.date}</span>
          </p>
          {comment.message}
        </Grid>
      </Grid>
    </FileCommentBodyItemStyled>
  );
};
