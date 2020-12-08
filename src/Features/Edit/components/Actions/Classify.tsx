import React, { useContext, useState } from 'react';
import { Button, ClassifyModal } from 'Shared/components';
import { StopIcon } from 'Styles';
import { useTrans } from 'Services';
import { EditValidationContext } from 'Features/Edit';

export const Classify: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Edit');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fileId } = useContext(EditValidationContext);

  return (
    <>
      <Button color={'error'} type={'alt'} startIcon={<StopIcon />} onClick={() => setIsModalOpen(!isModalOpen)}>
        {trans('classifyWithoutContinuation')}
      </Button>
      {isModalOpen ? <ClassifyModal open={isModalOpen} onClose={() => setIsModalOpen(false)} fileId={fileId} /> : null}
    </>
  );
};
