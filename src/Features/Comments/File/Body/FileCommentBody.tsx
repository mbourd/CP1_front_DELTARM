import React from 'react';
import { FileCommentBodyStyled } from './FileCommentBody.style';
import { FileCommentBodyItem } from './Item/FileCommentBodyItem';

export const FileCommentBody: React.FC = (): React.ReactElement => {
  return (
    <FileCommentBodyStyled>
      <FileCommentBodyItem />
      <FileCommentBodyItem />
      <FileCommentBodyItem />
      <FileCommentBodyItem />
    </FileCommentBodyStyled>
  );
};
