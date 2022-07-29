import React, { useCallback, useState } from 'react';
import {
  Button,
  FormLabel,
  Modal,
  StairsLoader,
  Error500,
  RequestSuccess,
  BadRequest,
  InputBase,
  FormError,
} from 'Shared/components';
import { useApi, SwitchCallState, router, storage } from 'Services';
import {
  GenericActionModalStyled,
  GenericActionCommentModalStyled,
} from './GenericActionModal.style';
import { useTrans } from '../../../Services';

interface IProps {
  open: boolean;
  onClose: () => void;
  fileId: string;
  actionLabel: string;
  cancelLabel?: string;
  successMessage: string;
  successCloseLabel?: string;
  message: string;
  postRouteName: string;
  redirectRouteName?: 'manage' | 'edit';
  comment?: boolean;
  commentRequired?: boolean;
  commentParam?: string;
  forceRedirect?: boolean;
  queries?: Record<string, string>;
}

export const GenericActionModal: React.FC<IProps> = ({
  open,
  onClose,
  fileId,
  actionLabel,
  cancelLabel,
  successMessage,
  successCloseLabel,
  message,
  postRouteName,
  redirectRouteName = 'manage',
  comment = false,
  commentRequired = false,
  commentParam,
  forceRedirect = false,
  queries = {},
}): React.ReactElement | null => {
  const { request, callState, send, error } = useApi<any>();
  const [commentError, setCommentError] = useState<string | null>(null);
  const [trans] = useTrans('SharedComponents');

  const submit = useCallback(() => {
    const q: Record<string, string> = { file_id: fileId };

    if (comment) {
      const com = storage.getData<string>('validation.reject.comments');
      if (commentRequired && !com) {
        return setCommentError(trans('requiredField'));
      }

      if (com && commentParam) {
        q[commentParam] = com;
      }
    }

    send(postRouteName, {}, Object.assign({}, q, queries));
  }, [
    fileId,
    send,
    postRouteName,
    comment,
    commentRequired,
    commentParam,
    queries,
    trans,
  ]);

  const footer: React.ReactNode = (
    <GenericActionModalStyled>
      <Button
        color={'error'}
        onClick={() => {
          request.abort();
          onClose();

          if (callState === 'SUCCESS') {
            router.redirectTo(
              redirectRouteName,
              { id: fileId },
              {},
              forceRedirect,
            );

            return null;
          }
        }}
      >
        {(callState === 'SUCCESS' && successCloseLabel) ||
          cancelLabel ||
          (callState === 'SUCCESS' ? trans('close') : trans('cancel'))}
      </Button>
      {callState === 'NOT_INIT' ? (
        <Button color={'success'} onClick={submit}>
          {actionLabel}
        </Button>
      ) : null}
    </GenericActionModalStyled>
  );

  return (
    <Modal
      open={open}
      onClose={() => {
        request.abort();

        onClose();

        if (callState === 'SUCCESS') {
          router.redirectTo(redirectRouteName);

          return null;
        }
      }}
      width={'sm'}
      footer={footer}
    >
      <SwitchCallState
        callState={callState}
        states={{
          IS_LOADING: <StairsLoader size={'md'} />,
          SERVER_ERROR: (
            <Error500 size={'md'} message={trans('noServerResponding')} />
          ),
          SUCCESS: (
            <RequestSuccess
              size={'lg'}
              message={successMessage}
              title={trans('successfullOperation')}
            />
          ),
          BAD_REQUEST: (
            <BadRequest
              size={'md'}
              message={error?.response ? error?.response.body.error_msg : ''}
              title={trans('failure')}
            />
          ),
        }}
      >
        <FormLabel>{message}</FormLabel>

        {comment ? (
          <GenericActionCommentModalStyled>
            <InputBase
              multiline
              multilineRows={10}
              placeholder={trans('addComment')}
              onChange={(e) => {
                storage.setData(
                  'validation.reject.comments',
                  e.currentTarget.value,
                );
                setCommentError(null);
              }}
            />
            <FormError>{commentError}</FormError>
          </GenericActionCommentModalStyled>
        ) : null}
      </SwitchCallState>
    </Modal>
  );
};
