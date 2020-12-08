import React, { useContext, useState } from 'react';
import { Button, GenericActionModal } from 'Shared/components';
import { EditValidationContext } from 'Features/Edit';

export const NewDisbursement: React.FC = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fileId } = useContext(EditValidationContext);

  return (
    <>
      <Button color={'success'} type={'alt'} onClick={() => setIsModalOpen(!isModalOpen)}>
        Nouveau décaissement
      </Button>
      {isModalOpen ? (
        <GenericActionModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          fileId={fileId}
          actionLabel={'Nouveau décaissement'}
          successMessage={'Vous pouvez compléter le nouveau décaissement'}
          message={'Souhaitez-vous faire un autre décaissement ?'}
          postRouteName={'actionNewDisbursement'}
          redirectRouteName={'edit'}
        />
      ) : null}
    </>
  );
};
