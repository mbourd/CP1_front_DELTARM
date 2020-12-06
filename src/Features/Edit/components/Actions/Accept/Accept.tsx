import React, { useContext, useState } from 'react';
import { Button, ClassifyModal } from 'Shared/components';
import { CheckIcon } from 'Styles';
import { EditContext } from 'Features/Edit';
import { AcceptStyled } from './Accept.style';

export const Accept: React.FC = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fileId } = useContext(EditContext);

  return (
    <AcceptStyled className={'action'}>
      <Button color={'success'} type={'alt'} startIcon={<CheckIcon />} onClick={() => setIsModalOpen(!isModalOpen)}>
        Accepter la validation
      </Button>
      {isModalOpen ? <ClassifyModal open={isModalOpen} onClose={() => setIsModalOpen(false)} fileId={fileId} /> : null}
    </AcceptStyled>
  );
};
