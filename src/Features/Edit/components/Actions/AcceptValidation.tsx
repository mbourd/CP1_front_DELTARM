import React, { useContext, useState } from 'react';
import { Button, GenericActionModal } from 'Shared/components';
import { EditValidationContext } from 'Features/Edit';

export const AcceptValidation: React.FC = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fileId } = useContext(EditValidationContext);

  return (
    <>
      <Button color={'success'} type={'alt'} onClick={() => setIsModalOpen(!isModalOpen)}>
        Valider le dossier
      </Button>
      {isModalOpen ? (
        <GenericActionModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          fileId={fileId}
          actionLabel={'Valider le dossier'}
          successMessage={'Le dossier a été validé'}
          message={'Souhaitez-vous valider ce dossier ?'}
          postRouteName={'actionAcceptValidation'}
        />
      ) : null}
    </>
  );
};
