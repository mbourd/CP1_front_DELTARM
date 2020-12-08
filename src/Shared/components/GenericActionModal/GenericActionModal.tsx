import React, { useCallback } from 'react';
import { Button, FormLabel, Modal, StairsLoader, Error500, RequestSuccess, BadRequest } from 'Shared/components';
import { useApi, SwitchCallState, router } from 'Services';
import { GenericActionModalStyled } from './GenericActionModal.style';

interface IProps {
  open: boolean;
  onClose: () => void;
  fileId: string;
  actionLabel: string;
  successMessage: string;
  message: string;
  postRouteName: string;
  redirectRouteName?: 'manage' | 'edit';
}

export const GenericActionModal: React.FC<IProps> = ({
  open,
  onClose,
  fileId,
  actionLabel,
  successMessage,
  message,
  postRouteName,
  redirectRouteName = 'manage',
}): React.ReactElement | null => {
  const { request, callState, send, error } = useApi<any>();

  const submit = useCallback(() => {
    send(postRouteName, {}, { file_id: fileId });
  }, [fileId, send, postRouteName]);

  const footer: React.ReactNode = (
    <GenericActionModalStyled>
      <Button
        color={'error'}
        onClick={() => {
          request.abort();
          onClose();

          if (callState === 'SUCCESS') {
            router.redirectTo(redirectRouteName, { id: fileId });

            return null;
          }
        }}
      >
        {callState === 'SUCCESS' ? 'Fermer' : 'Annuler'}
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
          SERVER_ERROR: <Error500 size={'md'} message={'Le serveur ne répond pas'} />,
          SUCCESS: <RequestSuccess size={'lg'} message={successMessage} title={'Opération réussie'} />,
          BAD_REQUEST: (
            <BadRequest size={'md'} message={error?.response ? error?.response.body.error_msg : ''} title={'Echec !'} />
          ),
        }}
      >
        <FormLabel>{message}</FormLabel>
      </SwitchCallState>
    </Modal>
  );
};
