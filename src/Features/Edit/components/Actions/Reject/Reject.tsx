import React, { useContext, useState } from 'react';
import { Button, ClassifyModal } from 'Shared/components';
import { ReturnIcon } from 'Styles';
import { EditValidationContext } from 'Features/Edit';
import { RejectStyled } from './Reject.style';

export const Reject: React.FC = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fileId } = useContext(EditValidationContext);

  return (
    <RejectStyled className={'action'}>
      <Button color={'error'} type={'alt'} startIcon={<ReturnIcon />} onClick={() => setIsModalOpen(!isModalOpen)}>
        Rejeter la validation
      </Button>
      {isModalOpen ? (
        <ClassifyModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          fileId={fileId}
          actionLabel={'Rejeter la validation'}
          successMessage={'La validation a été rejétée'}
          message={'Souhaitez-vous rejeter cette validation ?'}
        />
      ) : null}
    </RejectStyled>
  );
};
