import React from 'react';
import { FileCommentStyled, FileCommentHeaderStyled } from './FileComment.style';
import { BPIBadge, Popper } from 'Shared/components';
import { CommentIcon } from 'Styles';
import { Card } from '@material-ui/core';
import { FileCommentBody } from './Body/FileCommentBody';

export const FileComment: React.FC = (): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);

  return (
    <>
      <BPIBadge content={5}>
        <CommentIcon
          fontSize={'large'}
          className={'comment-icon' + (anchorEl ? ' active' : '')}
          onClick={(e) => {
            setAnchorEl(anchorEl ? null : e.currentTarget);
          }}
        />
      </BPIBadge>
      <Popper
        element={anchorEl}
        placement={'bottom-start'}
        bdr={'0'}
        border={'0'}
        onClickAway={() => setAnchorEl(null)}
        zIndex={2}
      >
        <FileCommentStyled>
          <Card>
            <FileCommentHeaderStyled>Commentaires liés au dossier</FileCommentHeaderStyled>
            <FileCommentBody />
          </Card>
        </FileCommentStyled>
      </Popper>
    </>
  );
};
