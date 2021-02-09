import React, { useContext, useState } from 'react';
import { Button, GenericActionModal } from 'Shared/components';
import { EditValidationContext } from 'Features/Edit';

export const Cancel: React.FC = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fileId } = useContext(EditValidationContext);

  return (
    <>
      <Button color={'error'} type={'alt'} onClick={() => setIsModalOpen(!isModalOpen)}>
        Annuler le dossier
      </Button>
      {isModalOpen ? (
        <GenericActionModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          fileId={fileId}
          actionLabel={'Oui'}
          cancelLabel={'Non'}
          successMessage={'Le dossier a été annulé'}
          successCloseLabel="Fermer"
          message={"Confirmez-vous l'annulation du dossier ?"}
          postRouteName={'actionCancel'}
        />
      ) : null}
    </>
  );
};
