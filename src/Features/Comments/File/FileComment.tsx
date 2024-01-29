import React, { useCallback, useContext, useEffect } from 'react';
import { Card } from '@material-ui/core';
import { BPIBadge, Popper } from 'Shared/components';
import { CommentIcon } from 'Styles';
import { router, useApi } from 'Services';
import { EditValidationContext } from 'Features/Edit';
import { IFileComment } from '../types';
import { FileCommentBody } from './Body/FileCommentBody';
import {
  FileCommentStyled,
  FileCommentHeaderStyled,
} from './FileComment.style';
import { FileCommentFooter } from './Footer/FileCommentFooter';
import { AppContext, AppContextType } from 'AppContext';

export const FileComment: React.FC = (): React.ReactElement => {
  const appContext: AppContextType & Record<any, any> = useContext(AppContext);
  const { canSend } = appContext?.ForCompTests?.FileComment || {};
  const [anchorEl, setAnchorEl] = React.useState<
    SVGSVGElement | Element | null
  >(null);
  const { request, send, data } = useApi<IFileComment[]>({ canSend });
  const context = useContext(EditValidationContext);

  const queries = router.getQueries();
  const { fileId } = context;

  useEffect(() => {
    send('getFileComments', {}, { file_id: fileId });

    if (queries.comments === '1') {
      setAnchorEl(document.querySelector('.open-comments-icon'));
    }

    return () => {
      request.abort();
    };
  }, [send, fileId, request, queries.comments]);

  const addComment = useCallback(() => {
    send('getFileComments', {}, { file_id: fileId });
  }, [send, fileId]);

  return (
    <div>
      <BPIBadge content={data?.length}>
        <CommentIcon
          fontSize={'large'}
          className={
            'comment-icon open-comments-icon' + (anchorEl ? ' active' : '')
          }
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
            <FileCommentHeaderStyled>
              Commentaires liés au dossier
            </FileCommentHeaderStyled>
            {data ? <FileCommentBody comments={data} /> : null}
            <FileCommentFooter addComment={addComment} />
          </Card>
        </FileCommentStyled>
      </Popper>
    </div>
  );
};
