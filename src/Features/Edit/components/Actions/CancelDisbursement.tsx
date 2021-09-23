import React, { useContext, useState } from 'react';
import { Button, GenericActionModal } from 'Shared/components';
import { EditValidationContext } from 'Features/Edit';

export const CancelDisbursement: React.FC = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fileId } = useContext(EditValidationContext);

  return (
    <>
      <Button color={'error'} type={'alt'} onClick={() => setIsModalOpen(!isModalOpen)}>
        Annuler le décaissement
      </Button>
      {isModalOpen ? (
        <GenericActionModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          fileId={fileId}
          actionLabel={'Oui, je veux.'}
          successMessage={'Le décaissement a été annulé'}
          message={'Souhaitez-vous annuler ce décaissement ?'}
          postRouteName={'actionCancelDisbursement'}
        />
      ) : null}
    </>
  );
};
