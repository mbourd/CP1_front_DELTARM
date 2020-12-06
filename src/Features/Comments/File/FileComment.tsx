import React, { useContext, useEffect } from 'react';
import { Card } from '@material-ui/core';
import { BadRequest, BPIBadge, Error500, ErrorNotFound, Popper, StairsLoader } from 'Shared/components';
import { CommentIcon } from 'Styles';
import { SwitchCallState, useApi } from 'Services';
import { EditContext } from 'Features/Edit';
import { IFileComment } from '../types';
import { FileCommentBody } from './Body/FileCommentBody';
import { FileCommentFooter } from './Footer/FileCommentFooter';
import { FileCommentStyled, FileCommentHeaderStyled } from './FileComment.style';

export const FileComment: React.FC = (): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
  const { request, error, callState, send, data } = useApi<IFileComment>();
  const context = useContext(EditContext);
  const { fileId } = context;

  useEffect(() => {
    send('getFileComments', {}, { file_id: fileId });

    return () => {
      request.abort();
    };
  }, [send, fileId, request]);

  return (
    <>
      <BPIBadge content={context.data?.countComments}>
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
            <SwitchCallState
              callState={callState}
              states={{
                IS_LOADING: <StairsLoader size={'md'} />,
                SERVER_ERROR: <Error500 size={'sm'} title={'Le serveur ne répond pas'} />,
                NOT_FOUND: <ErrorNotFound size={'sm'} title={'Commentaires introuvables'} />,
                BAD_REQUEST: (
                  <BadRequest
                    size={'sm'}
                    message={error?.response ? error?.response.body.error_msg : ''}
                    title={'Echec !'}
                  />
                ),
              }}
            >
              <FileCommentHeaderStyled>Commentaires liés au dossier</FileCommentHeaderStyled>
              <FileCommentBody />
              <FileCommentFooter />
            </SwitchCallState>
          </Card>
        </FileCommentStyled>
      </Popper>
    </>
  );
};
