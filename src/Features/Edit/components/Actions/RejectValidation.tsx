import React, { useContext, useState } from 'react';
import { Button, GenericActionModal } from 'Shared/components';
import { EditValidationContext } from 'Features/Edit';

export const RejectValidation: React.FC = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fileId, data } = useContext(EditValidationContext);

  return (
    <>
      <Button color={'error'} type={'alt'} onClick={() => setIsModalOpen(!isModalOpen)}>
        Refuser la validation
      </Button>
      {isModalOpen ? (
        <GenericActionModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          fileId={fileId}
          actionLabel={'Refuser la validation'}
          successMessage={'La validation a été refusé'}
          message={'Souhaitez-vous refuser cette validation ?'}
          postRouteName={'actionRejectValidation'}
          comment
          commentRequired
          queries={data?.validationCount ? { valid_num: data?.validationCount } : {}}
        />
      ) : null}
    </>
  );
};
