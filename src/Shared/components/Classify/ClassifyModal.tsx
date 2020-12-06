import React, { useCallback } from 'react';
import { Button, FormLabel, Modal, StairsLoader, Error500, RequestSuccess, BadRequest } from 'Shared/components';
import { useApi, SwitchCallState, router } from 'Services';
import { ModalFooterStyled } from './ClassifyModal.style';
import { INonCaseData } from 'Shared/apiRoutes';

interface IProps {
  open: boolean;
  onClose: () => void;
  fileId: string;
  actionLabel?: string;
  successMessage?: string;
  message?: string;
  routeName?: string;
}

export const ClassifyModal: React.FC<IProps> = ({
  open,
  onClose,
  fileId,
  actionLabel = 'Classer sans suite',
  successMessage = 'Le dossier a bien été classé',
  message = 'Souhaitez-vous classer ce dossier sans suite ?',
  routeName = 'classify',
}): React.ReactElement | null => {
  const { request, callState, send, error } = useApi<INonCaseData>();

  const submit = useCallback(() => {
    send(routeName, {}, { file_id: fileId });
  }, [fileId, send, routeName]);

  const footer: React.ReactNode = (
    <ModalFooterStyled>
      <Button
        color={'error'}
        onClick={() => {
          request.abort();
          onClose();
        }}
      >
        Annuler
      </Button>
      {callState === 'NOT_INIT' ? (
        <Button color={'success'} onClick={submit}>
          {actionLabel}
        </Button>
      ) : null}
    </ModalFooterStyled>
  );

  if (callState === 'SUCCESS') {
    router.redirectTo('manage');

    return null;
  }

  return (
    <Modal
      open={open}
      onClose={() => {
        request.abort();
        onClose();
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
