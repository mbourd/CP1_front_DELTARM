import React, { useContext, useState } from 'react';
import { Button, GenericActionModal } from 'Shared/components';
import { EditValidationContext } from 'Features/Edit';

export const ChangeOwner: React.FC = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fileId } = useContext(EditValidationContext);

  return (
    <>
      <Button
        color={'error'}
        type={'alt'}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        Devenir propriétaire du dossier
      </Button>
      {isModalOpen ? (
        <GenericActionModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          fileId={fileId}
          actionLabel={'Devenir propriétaire du dossier'}
          successMessage={'Vous êtes propriétaire de ce dossier'}
          message={'Souhaitez-vous devenir propriétaire de ce dossier ?'}
          postRouteName={'actionChangeOwner'}
        />
      ) : null}
    </>
  );
};
