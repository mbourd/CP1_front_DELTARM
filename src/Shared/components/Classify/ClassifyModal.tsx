import React, { useCallback } from 'react';
import { Button, FormLabel, Modal, PageLoader } from 'Shared/components';
import { useApi, useTrans, router } from 'Services';
import { ModalFooterStyled } from './ClassifyModal.style';
import { INonCaseData } from 'Shared/apiRoutes';

interface IProps {
  open: boolean;
  onClose: () => void;
  fileId: string;
}

export const ClassifyModal: React.FC<IProps> = ({ open, onClose, fileId }): React.ReactElement | null => {
  const { error, isLoading, send, data } = useApi<INonCaseData>();
  const [trans] = useTrans('Default');

  const submit = useCallback(() => {
    send('classify', {}, { file_id: fileId });
  }, [fileId, send]);

  let content = <FormLabel>Souhaitez-vous classer ce dossier sans suite ?</FormLabel>;

  let footer: React.ReactNode = (
    <ModalFooterStyled>
      <Button color={'error'} onClick={onClose}>
        Annuler
      </Button>
      <Button color={'success'} onClick={submit}>
        Valider
      </Button>
    </ModalFooterStyled>
  );

  if (error) {
    content = <p>Le serveur ne répond pas.</p>;
  }

  if (isLoading) {
    content = <PageLoader text={trans('loading')} />;
    footer = null;
  }

  if (data && !data.error) {
    router.redirectTo('manage');

    return null;
  }

  if (data && data.error) {
    content = <p>{data.errorMessage || data.returnMessage}</p>;
    footer = null;
  }

  return (
    <Modal open={open} onClose={onClose} width={'sm'} footer={footer}>
      {content}
    </Modal>
  );
};
