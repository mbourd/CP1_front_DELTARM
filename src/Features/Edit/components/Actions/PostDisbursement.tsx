import React, { useContext, useState } from 'react';
import { Button, GenericActionModal } from 'Shared/components';
import { EditValidationContext } from 'Features/Edit';

export const PostDisbursement: React.FC = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fileId } = useContext(EditValidationContext);

  return (
    <>
      <Button
        color={'success'}
        type={'alt'}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        Passer en Post-Décaissement
      </Button>
      {isModalOpen ? (
        <GenericActionModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          fileId={fileId}
          actionLabel={'Passer en Post-Décaissement'}
          successMessage={'Ce dossier a été passé Post-Décaissement'}
          message={'Souhaitez-vous Passer en Post-Décaissement ?'}
          postRouteName={'actionPostDisbursement'}
          redirectRouteName={'edit'}
          forceRedirect
        />
      ) : null}
    </>
  );
};
