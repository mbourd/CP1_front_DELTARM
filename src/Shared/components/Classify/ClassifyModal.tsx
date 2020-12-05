import React, { useCallback } from 'react';
import { Button, FormLabel, Modal, StairsLoader, Error500, RequestSuccess, BadRequest } from 'Shared/components';
import { useApi, SwitchCallState } from 'Services';
import { ModalFooterStyled } from './ClassifyModal.style';
import { INonCaseData } from 'Shared/apiRoutes';

interface IProps {
  open: boolean;
  onClose: () => void;
  fileId: string;
}

export const ClassifyModal: React.FC<IProps> = ({ open, onClose, fileId }): React.ReactElement | null => {
  const { request, callState, send, error } = useApi<INonCaseData>();

  const submit = useCallback(() => {
    send('classify', {}, { file_id: fileId });
  }, [fileId, send]);

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
          Classer sans suite
        </Button>
      ) : null}
    </ModalFooterStyled>
  );

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
          ERROR: <Error500 size={'md'} message={'Le serveur ne répond pas'} />,
          SERVER_ERROR: <Error500 size={'md'} message={'Le serveur ne répond pas'} />,
          SUCCESS: <RequestSuccess size={'lg'} message={'Le dossier a bien été classé'} title={'Opération réussie'} />,
          BAD_REQUEST: (
            <BadRequest size={'md'} message={error?.response ? error?.response.body.error_msg : ''} title={'Echec !'} />
          ),
        }}
      >
        <FormLabel>Souhaitez-vous classer ce dossier sans suite ?</FormLabel>
      </SwitchCallState>
    </Modal>
  );
};
