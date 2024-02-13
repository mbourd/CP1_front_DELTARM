import React from 'react';
import { FileCommentBodyStyled } from './FileCommentBody.style';
import { FileCommentBodyItem } from './Item/FileCommentBodyItem';
import { IFileComment } from '../../types';

interface IFileCommentBody {
  comments: IFileComment[];
}

export const FileCommentBody: React.FC<
  React.PropsWithChildren<IFileCommentBody>
> = ({ comments }): React.ReactElement => {
  return (
    <FileCommentBodyStyled>
      {comments.map((comment, index) => {
        return <FileCommentBodyItem comment={comment} key={index} />;
      })}
    </FileCommentBodyStyled>
  );
};
